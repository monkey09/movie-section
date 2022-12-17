const getMovies = search => {
  const movies = useState('movies', () => null)
  const load = async () => {
    try {
      await useFetch('/api/movies?search=' + search).then(data => {
        movies.value = data.data.value.data
      })
    } catch (e) {
      console.log('Shit happend', e)
    }
  }
  return { movies, load }
}

export default getMovies