module.exports = async (req, res) => {

  let result: string = 'Hello World'

  result = '0'

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
