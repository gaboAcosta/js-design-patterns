/**
 * Created by gabriel.acosta on 5/2/19.
 */

const myObject = (function(){
  const user = {
    name: 'Gabo'
  }
  const someName = 'asdasd'
  function sayName(){
    return someName
  }
  return {
    sayHello: function(){
      console.log('Hello my name is', sayName())
    },
    sayGoodBye: function() {
      console.log()
    }
  }
})()

console.log(myObject)
myObject.sayHello()
myObject.name = "Dado"
myObject.sayHello()

myObject.sayHello = function(){
  console.log('New Hello!!')
}

myObject.sayHello()