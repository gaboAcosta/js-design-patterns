/**
 * Created by gabriel.acosta on 5/2/19.
 */

module.exports = function (database) {
  return {
    findAllUsers: function() {
      return database.findAll('Users')
    },
    findAllGroups: function() {
      return database.findAll('Groups')
    },
    findAllRoles: function() {
      return database.findAll('Roles')
    }
  }
}