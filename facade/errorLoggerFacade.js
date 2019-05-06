/**
 * Created by gabriel.acosta on 5/3/19.
 */

const logger = require('./logger')

module.exports = {
  log(message){
    logger.log(message, 'red')
  }
}