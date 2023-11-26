export default defineEventHandler(async (event) => {
  if (event.req.method === 'GET') {
    return {
      message: 'Hello from Api endpoint'
    }
  }
  if (event.req.method === 'POST') {
    const body = await readBody(event)
    if (body.message === '') {
      return {
        message: 'Please fill out the input field'
      }
    } else {
      return body
    }
  }
})
