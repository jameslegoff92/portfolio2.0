const {createClient} = require('@sanity/client')


const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2024-09-24', // use current date (YYYY-MM-DD) to target the latest API version
})

module.exports = client