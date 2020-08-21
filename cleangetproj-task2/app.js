//Work loading
const http = require('https')
const fs = require('fs')
const path = require('path')


const downloadPage = (url='https://coderbyte.com/api/challenges/json/json-cleaning') => {
  console.log('downloading ', url)
  const fetchPage = (urlAgain, callback) => {
    http.get(urlAgain, (response) => {
      let buff = ''
      response.on('data', (chunk) => { 
        buff += chunk
      })
      response.on('end', () => {
        callback(null, buff)
      })
    }).on('error', (error) => {
      console.error(`Got error: ${error.message}`)
      callback(error)
    })
  }
  fetchPage(url, (error, data)=>{
    if (error) return console.log(error)
    console.log(data)
  })  
}


downloadPage(process.argv[2])