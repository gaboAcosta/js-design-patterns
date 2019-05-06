/**
 * Created by gabriel.acosta on 5/2/19.
 */

/**
 * Created by gabriel.acosta on 5/2/19.
 */

const user = {
  name: 'Mike'
}

function User () {
  return user
}

const myUser = new User()
console.log(myUser)

const myUser2 = new User()
console.log(myUser2)

myUser.name = 'Gabo'
console.log(myUser)
console.log(myUser2)
console.log(user)