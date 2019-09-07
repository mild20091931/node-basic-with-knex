import knex from '../utils/knex';

const tableName = 'users';

export default {
  findUserByFirstName: async firstName => {
    return await knex(tableName)
      .select()
      .where({ firstName: firstName });
  },
  
  createUser: async data => {
    return await knex(tableName)
      .insert(data);
  },
};
