import { NowRequest, NowResponse } from '@now/node'
import axios from 'axios'

module.exports = async (req: NowRequest, res: NowResponse) => {
  res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')

  const url = 'https://www.cbr-xml-daily.ru/daily_json.js'

  const obj = await axios.get(url)

  const result: Number = obj.data.Valute.USD.Value

  console.log(result)

  res.send(result)
}
