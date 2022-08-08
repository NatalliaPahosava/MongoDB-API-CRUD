import express from 'express'
import cors from 'cors'

import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'
import { addEmployee } from './employees.js'

const app = express()
app.use(cors())
app.use(express.json()) // for us to receive json in body for POST

// const PORT = 4001
app.listen(process.env.PORT, () => console.log('API running on ',process.env.PORT))
// movie routes
app.post('/add-movie', addMovie)
app.put('/update-movie', updateMovie)
app.delete('/delete-movie', deleteMovie)
app.get('/get-movies', queryMovies)

// employee routes
app.post('/add-employee', addEmployee)


app.get('/', (req, res) => res.send('Hey here is my API!!'))



// import express from 'express'
// import cors from 'cors'

// import { addMovie, queryMovies, deleteMovie, updateMovie } from './movies.js'
// import { addEmployee } from './employees.js'
// const app = express()
// app.use(cors())
// app.use(express.json()) // for us to receive json in body for POST

// const PORT = 4001

// // CRUD
// app.post('/add-movie',addMovie)

// // app.post('/add-movie', async (req, res) => {
// //   const result = await addMovie(req.body)
// //   res.send(result)
// // })

// app.put('/update-movie', updateMovie)

// // app.put('/update-movie', async (req, res) => {
// //   const result = await updateMovie(req.query, req.body)
// //   res.send(result)
// // })

// app.delete('/delete-movie', deleteMovie)

// //  async (req, res) => {
// //   const result = await deleteMovie(req.query)
// //   res.send(result)})

// app.get('/get-movies', queryMovies)
  
// // app.get('/get-movies', async (req, res) => {
// //   const data = await queryMovies()
// //   res.send(data)
// // })

// app.get('/', (req, res) => res.send('Hey here is my API!!'))

// app.listen(PORT, () => console.log('API running on ', PORT))
