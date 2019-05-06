/**
 * Created by gabriel.acosta on 5/2/19.
 */


const UserServiceConstructor = require('./UserService')
const databaseMock = require('./dbMock')
const loggerMock = require('./loggerMock')

module.exports = {
  create: function() {
    const UserService = new UserServiceConstructor(databaseMock, loggerMock)
    return UserService
  }
}