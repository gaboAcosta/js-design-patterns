/**
 * Created by gabriel.acosta on 5/2/19.
 */

class Observable {
  constructor(){
    this.subscribers = []
    this.name = 'The original name!'
  }
  subscribe(subscriber){
    this.subscribers.push(subscriber)
  }
  notify(){
    this.subscribers.forEach((sub) => { sub.notify(this) })
  }
  update(newName) {
    this.name = newName
    this.notify()
  }
}

module.exports = Observable