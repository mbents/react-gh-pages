let Parser = require('rss-parser')
let parser = new Parser()

export const parse = async () => {
  let feed = await parser.parseURL('https://w1.weather.gov/xml/current_obs/KMSP.rss')
  return feed.items
}
