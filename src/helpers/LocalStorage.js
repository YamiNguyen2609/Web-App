const SET_TIME = 'SET_TIME'
const ACCOUNT = 'ACCOUNT'

const sessionLogin = user => {
  var hours = 8 // Reset when storage is more than 24hours
  var now = new Date().getTime()
  var setupTime = localStorage.getItem(SET_TIME)
  if (setupTime == null) {
    localStorage.setItem(SET_TIME, now)
    localStorage.setItem(ACCOUNT, JSON.stringify(user))
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.removeItem(SET_TIME)
      localStorage.removeItem(ACCOUNT)
    }
  }
}

const getAccount = () => {
  return JSON.parse(localStorage.getItem(ACCOUNT))
}

export { sessionLogin, getAccount }
