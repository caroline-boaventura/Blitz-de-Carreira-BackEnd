const { expect } = require('chai');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection')

const mongoConnection = require('../../models/connection');
const { create } = require('../../models/taskModelCreateTask')


describe('fetch all tasks in DB', () => {
  let connectionMock;

  const payloadTask = {
    name: 'Cozinhar',
    status: 'Em Andamento',
  };

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    await connectionMock.db('To-Do-List').collection('tasks').drop();
    MongoClient.connect.restore();
  })

  describe('when it returns successfully', () => {
    it('returns an object', async () => {
      const response = await create(payloadTask)

      expect(response).to.be.a('object');
    });

    it('the object has a "insertedId" of the new task inserted', async () => {
      const response = await create(payloadTask);

      expect(response).to.have.a.property('insertedId');
    });

    it('there must be a task with the registered name', async () => {
      const { insertedId } = await create(payloadTask);

      const taskCreated = await connectionMock
        .db('To-Do-List')
        .collection('tasks')
        .findOne({});

      expect(taskCreated).to.have.a.property('name');;
    });
  });

})