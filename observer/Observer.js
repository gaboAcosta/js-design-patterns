/**
 * Created by gabriel.acosta on 5/2/19.
 */

class Observer {
  notify(changedObject){
    console.log('The object has been changed!', changedObject)
  }
}

module.exports = Observer