
const userData = {
  name: 'igor trindade',
  email: 'igorlucast@hotmail.com',
  password: '123123',
}
module.exports.userData = userData

module.exports.authRegister = async (client, data) => {
  return await client
    .post('/api/user/auth/register')
    .send(data)
    .end()
}

module.exports.authLogin = async(client, data) => {

  const {email, password} = data

  return await client
  .post('/api/user/auth/login')
  .send({
    email: email,
    password: password
  })
  .end()
}

module.exports.getToken = async(client) => {

  const {email, password} = userData

  const response = await client
  .post('/api/user/auth/login')
  .send({
    email: email,
    password: password
  })
  .end()

  return response.body.token

}

module.exports.authGetLoggedUser = async (client) => {

  const response = await this.authLogin(client, userData)

  const token = response.body.token

  return  await client
  .get('/api/user/auth/getLoggedUser')
  .header('accept', 'application/json')
  .header('authorization', `Bearer ${token}`)
  .end()
}
