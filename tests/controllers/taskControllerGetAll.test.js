const sinon = require('sinon');
const { expect } = require('chai');
const { getAllTask } = require('../../controllers/taskControllerGetAll');

describe('fetch all tasks in DB', () => {
  describe('when it returns successfully', () => {
    const response = {};
    const request = {};

    before(() => {
      response.status = sinon.stub()
        .returns(response)
      response.json = sinon.stub()
        .returns();
    })

    it('status is called with code 200', async () => {
      await getAllTask(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
    })

    it('returns an array', async () => {
      await getAllTask(request, response);

      expect(response.json.calledWith([])).to.be.equal(true);
    });
  })
})