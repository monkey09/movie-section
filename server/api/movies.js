export default defineEventHandler (async event => {
  let data = null
  const { search } = getQuery(event)
  await $fetch('https://api.tvmaze.com/search/shows?q=' + search)
  .then(res => {
    data = res
  })
  return { data }
})