/**
 * Created by gabriel.acosta on 5/2/19.
 */

function User () {
  const user = {
    name: 'Mike'
  }
  return user
}

const myUser = new User()
console.log(myUser)

const myUser2 = new User()
console.log(myUser2)

myUser.name = 'Gabo'
console.log(myUser)
console.log(myUser2)