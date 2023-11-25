export default defineEventHandler((event) => {
  if (event.req.method === 'GET') {
    return {
      message: 'Hi from API-Endpoint'
    }
  }
  if (event.req.method === 'POST') {
    // create a blog
    // return the blog;
  }
})
