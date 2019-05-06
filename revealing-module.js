/**
 * Created by gabriel.acosta on 5/2/19.
 */

const myObject = (function(){
  const publicVar = 1

  const privateVar = 2

  const publicMethod = function(){}

  const privateMethod = function(){
    publicMethod()
  }

  return {
    name: publicVar,
    sayHello: privateMethod
  }
})()

console.log(myObject)