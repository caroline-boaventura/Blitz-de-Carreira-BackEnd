const { expect } = require('chai');
const { getAll } = require('../../services/taskServiceGetAll')

describe('fetch all tasks in DB', () => {
  describe('when it returns successfully', () => {
    it('returns an array', async () => {
      const response = await getAll()

      expect(response).to.be.a('array')
    });
  })
})