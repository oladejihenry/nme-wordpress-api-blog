 const express = require('express')
 const newsRouter = express.Router()
 const axios = require('axios')

newsRouter.get('', async(req, res) => {
    try {
      const newsAPI = await axios.get(`https://www.nme.com/wp-json/wp/v2/posts/`)
      res.render('news',{ articles  : newsAPI.data})
    } catch (error) {
      if (err.response) {
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.header)
      }else if (err.request) {
        console.log(err.request)
      }else {
        console.log('Error', err.message)
      }
      
    }
})

 module.exports = newsRouter