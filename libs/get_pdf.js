const Nightmare = require('nightmare')  
require('nightmare-webrequest-addon')
const nightmare = Nightmare({ show: false })
const shortid = require('shortid')
// require('shelljs/global') // Only for the example launching of the pdf

/**
 * Generates the pdf.
 * Returns a promise containing the filesystem location of the pdf
 * @param {string} url 
 * @param {object} headers
 * @returns {Promise} 
 */
function generatePDF (url, headers) {
  const name = `/tmp/${shortid.generate()}.pdf`
  return nightmare
    .goto(url, headers)
    // .onBeforeSendHeaders(function(detail, callback) {
    //   callback({
    //     requestHeaders: {
    //       Cookie: 'local-compliance=<cookie-val>'
    //     }
    //   })
    // })
    .wait(10000) // This can be replaced with an element selector
    .pdf(name)
    .end()
    .then(() => {
      return name
    })
}

module.exports = generatePDF