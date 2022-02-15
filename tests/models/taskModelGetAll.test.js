// quando é buscado com sucesso
// retorna um array de objetos
// tal array contém objetos com um _id

const { expect } = require('chai');

const TaskModel = {
  get: () => { }
}

describe('fetch all tasks in DB', () => {
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

  describe('when it returns successfully', () => {
    it('returns an array', async () => {
      const response = await getAllTask()

      expect(response).to.be.a('array')
    });

    it('the array contains objects with an id', () => {
      const response = await getAllTask()

      expect(response[0]).to.have.a.property('_id')
    })
  })
})