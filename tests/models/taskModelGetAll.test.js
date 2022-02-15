// quando é buscado com sucesso
// retorna um array de objetos
// tal array contém objetos com um _id

const { expect } = require('chai');
const sinon = require('sinon');
const { getAllTask } = require('../../models/taskModelGetAll')

const { MongoClient } = require('mongodb');
const { getConnection } = require('./mongoMockConnection')

const mongoConnection = require('../../models/connection');

describe('fetch all tasks in DB', () => {

  let connectionMock;

  const payloadTask = [
    {
      _id: 9999,
      name: 'Cozinhar',
      status: 'Em Andamento',
      date: '15/02/2022'
    },
    {
      _id: 9990,
      name: 'Codar',
      status: 'Pendente',
      date: '15/02/2022'
    }
  ]

  before(async () => {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

  after(async () => {
    MongoClient.connect.restore();
  })

  describe('when it returns successfully', () => {
    it('returns an array', async () => {
      const response = await getAllTask()

      expect(response).to.be.a('array')
    });
  })
})