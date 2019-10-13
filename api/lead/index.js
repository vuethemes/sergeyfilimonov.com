module.exports = async (req, res) => {
  const lib = require('../_use/date.js')

  res.send(lib.date)
}
