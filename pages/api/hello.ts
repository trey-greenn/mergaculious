// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}

const Fred = require('fred-api');

const fred = new Fred("ad5eaf456f64fd483d71efd6d3002fdd")

fred.getSeries({
  series_id: 'GNPCA'},
  function(error:any,result:any){
    console.log(result)
  }
  )