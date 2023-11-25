export default defineEventHandler(async (event) => {
  if (event.req.method === 'GET') {
    return {
      message: 'Hello from Api endpoint'
    }
  }
  if (event.req.method === 'POST') {
    const body = await readBody(event)
    return body
    // create a blog
    // return the blog;
  }
})
