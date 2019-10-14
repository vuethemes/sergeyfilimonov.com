module.exports = async (req, res) => {
  const lib = require('../../../utils/date.js')
  console.log(123)

  res.send(lib.date)
}
