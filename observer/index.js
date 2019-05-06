/**
 * Created by gabriel.acosta on 5/2/19.
 */

const Observable = require('./Observable')
const Observer = require('./Observer')

const myObservable = new Observable()

const firstSubscriber = new Observer()
const secondSubscriber = new Observer()

//console.log(myObservable)

myObservable.subscribe(firstSubscriber)
myObservable.subscribe(secondSubscriber)

//console.log(myObservable)

myObservable.update('This will be the new name!')

//console.log(myObservable)