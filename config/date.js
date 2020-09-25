let date = new Date
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

const today = () => {
  return month + '-' + day + '-' + year
}

module.exports = today()