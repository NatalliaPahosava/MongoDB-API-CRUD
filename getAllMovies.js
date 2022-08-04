import movies from './mongoConnect.js'
console.log('here are movies',movies)
const getAllMovies = ()=>{
const allMovies = movies.find().toArray((err,movies)=>{console.log(movies)
})

}
export default getAllMovies