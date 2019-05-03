/**
 * Created by gabriel.acosta on 5/2/19.
 */

const UserServiceConstructor = require('./UserService')
const databaseMock = require('./dbMock')

const UserService = new UserServiceConstructor(databaseMock)
UserService.findAllGroups()
