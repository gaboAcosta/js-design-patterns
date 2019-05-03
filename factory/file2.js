/**
 * Created by gabriel.acosta on 5/2/19.
 */

const UserServiceFactory = require('./UserServiceFactory')
const UserService = new UserServiceFactory.create()

UserService.findAllRoles()
