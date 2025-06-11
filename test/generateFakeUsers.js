import { faker } from "@faker-js/faker"

const generateFakeUser = () => {
//    const firstName = faker.person.firstName()
//    const lastName = faker.person.lastName()
  const firstName = "Liliana"
   const lastName = "Cargill"
return {
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({ firstName, lastName }),
    username: faker.internet.username({ firstName, lastName }),
    password: "test",
    role: faker.helpers.arrayElement([ "User" ]), 
    cart: [], 
    wishList: [] 
   
}
}

export const generateFakeUsers = (length) => {
    const users = []
    Array.from({ length: length }).forEach(() => {
        users.push(generateFakeUser())
    })
    return users
}