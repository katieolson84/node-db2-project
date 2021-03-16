const db = require('../../data/db-config');

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db ('cars').where('id', id).first()
}

const create = async car => {
  const [id] = await db('cars').insert(car, ['id', 'vin', 'make', 'model', 'mileage', 'title', 'transmission'])
  return getById(id)
}

// Stretch for update and delete

const updateById = async (id, car) => {
  await db('cars').where('id', id).update(car)
  return getById(id)
}

const deleteById = async id => {
  const toBeDeleted = await getById(id)
  await db ('cars').where({id}).del()
  return toBeDeleted
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}