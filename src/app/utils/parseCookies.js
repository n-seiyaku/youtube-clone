const parseCookies = (cookieHeader) => {
  return cookieHeader.split(';').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=').map((c) => c.trim())
    cookies[name] = value
    return cookies
  }, {})
}

export default parseCookies
