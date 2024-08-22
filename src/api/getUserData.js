const getUserData = async (setAuthData) => {
  var myHeaders = new Headers()
  const accessToken = localStorage.getItem('access_token')
  myHeaders.append('Authorization', `Bearer ${accessToken}`)

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const response = await fetch(
    'https://youtube.googleapis.com/youtube/v3/channels?part=snippet&mine=true',
    requestOptions
  )

  const data = await response.json()
  if (data) {
    const userData = data.items[0].snippet
    localStorage.setItem('auth_data', JSON.stringify(userData))
    setAuthData(userData)
  }
}

export default getUserData
