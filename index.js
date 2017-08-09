const getPdf = require('./libs/get_pdf.js')

if (require.main === module) {
  const url = process.argv[2] || 'http://localhost:8000/general'
  const headers = process.argv[3] ? JSON.parse(process.argv[3]) : {"sessionid": "ur73o4yrftvk8tssrd25l85g14r8vpyd"}
  createPDF(url, headers)
    .then(name => {
      console.log(name)
    })
    .catch(err => {
      console.log(err)
    })
}


/**
 * Create a pdf from a given url.  
 * Pass in an optional headers object that will attached to initial request and outgoing requests
 * @param {*} url 
 * @param {*} headers 
 */
function createPDF(url, headers) {
  if (!url) return Promise.reject('No url supplied')

  return getPdf(url, headers)
}

module.exports = {
  createPDF
}