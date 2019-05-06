/**
 * Created by gabriel.acosta on 5/2/19.
 */

module.exports = function (database, loggerMock) {
  if(!loggerMock) throw new Error('Logger missing!')
  return {
    findAllUsers: function() {
      loggerMock.log('Look this is my new logger!')
      return database.findAll('Users')
    },
    findAllGroups: function() {
      loggerMock.log('This is the groups new log!!')
      return database.findAll('Groups')
    },
    findAllRoles: function() {
      return database.findAll('Roles')
    }
  }
}