/**
 * Created by gabriel.acosta on 5/2/19.
 */

const chalk = require('chalk')

module.exports = {
  log(message, color) {
    console.log(chalk.keyword(color)(message))
  }
}
