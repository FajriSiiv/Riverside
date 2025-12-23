
const getCachedAnime = defineCachedFunction(async (id: string) => {
  const url = `https://api.jikan.moe/v4/anime/${id}/staff`
  
  const response = await $fetch<{ data: any }>(url, {
    method: 'GET',
    retry: 3,
    timeout: 5000,
  })

  return response.data
}, {
  maxAge: 60 * 60, // Cache 1 jam
  name: 'animeStaff',
  getKey: (id: string) => id
})

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

  // Validasi ID
  if (!id || isNaN(Number(id))) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid Anime ID',
    })
  }

  try {
    const data = await getCachedAnime(id)

    if (!data) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Anime Staff Not Found',
      })
    }
    
    return data
  } catch (error: any) {
    const statusCode = error.response?.status || 500
    const message = error.response?._data?.message || error.message || 'Internal Server Error'

    throw createError({
      statusCode,
      statusMessage: `Jikan API Error: ${message}`,
    })
  }
})