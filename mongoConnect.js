import { MongoClient } from 'mongodb'
 
// import { uri } from ""

// const uri = 'mongodb://localhost:27017'
// import {uri} from "./credentials.js"

const uri = 'mongodb+srv://NatalliaPahosava:sladk11mo1@nataliapogosova.1b8tti3.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri) // creating client mongo instance
const db = client.db('bocacode-test') // connecting to db = bocacod-test

export default db


















// import { MongoClient } from 'mongodb'
// import { uri } from "./credentials.js"

// // const uri = 'mongodb://localhost:27017'

// const client = new MongoClient(uri) // creating client mongo instance
// const db = client.db('bocacode-test') // connecting to db = bocacod-test
// // const movies = db.collection('movie') // getting the movie collection

// export default db