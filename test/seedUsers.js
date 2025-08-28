// import "dotenv/config"
// import axios from "axios"
// import { generateFakeUsers } from "./generateFakeUsers.js"


// const seedUsers = generateFakeUsers(1)
// console.log("seedUsers", seedUsers)

// seedUsers.forEach(async (user) => {
//     const addUser = await axios.post(`${process.env.MONGODB_URL}/users`, user)
//     console.log("addUser", addUser.data)
// })

import axios from 'axios';

const seedUsers = [
  {
    firstName: 'Liliana',
    lastName: 'Cargill',
    email: 'Liliana.Cargill31@hotmail.com',
    username: 'Liliana.Cargill',
    password: 'test',
    role: 'User',
    cart: [],
    wishList: []
  }
];

// Make sure your backend server is running on this port
const API_BASE_URL = 'http://localhost:3001/api'; // Adjust port as needed

async function seedDatabase() {
  try {
    console.log('seedUsers', seedUsers);
    
    for (const user of seedUsers) {
      try {
        const response = await axios.post(`${API_BASE_URL}/users`, user);
        console.log(`User ${user.username} created successfully:`, response.data);
      } catch (error) {
        if (error.response) {
          console.error(`Error creating user ${user.username}:`, error.response.data);
        } else {
          console.error(`Network error for user ${user.username}:`, error.message);
        }
      }
    }
  } catch (error) {
    console.error('Error seeding database:', error.message);
  }
}

seedDatabase();
