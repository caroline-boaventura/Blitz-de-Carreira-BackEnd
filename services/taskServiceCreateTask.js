const { create } = require('../models/taskModel');

// Referência: https://www.horadecodar.com.br/2021/04/03/como-pegar-a-data-atual-com-javascript/
const createDate = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth()).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`
};

const createTask = async (name, status) => {
  const date = createDate();

  const { insertedId } = await create(name, status, date);

  const newTask = {
    _id: insertedId,
    name,
    status,
    date
  };
  return newTask;
};

module.exports = {
  createTask,
}