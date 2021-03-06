const URL = [
  'https://api.unsplash.com/users/ademilter/photos',
  '?',
  `client_id=${process.env.UNSPLASH_ACCESS_KEY}`
].join('')

async function getPhotos() {
  const res = await fetch(URL, {
    method: 'get'
  })
  return await res.json()
}

export { getPhotos }
