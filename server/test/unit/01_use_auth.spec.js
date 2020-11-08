const { test, trait } = use('Test/Suite')('User Auth')
const startCase = require('lodash/startCase')
const {userData, authRegister, authLogin, authGetLoggedUser} = require('../helpers/auth_helpers.js')

trait('Test/ApiClient')

test('it should sign up the user and return the token', async ({ client, assert }) => {

  const response = await authRegister(client, userData)

  response.assertStatus(200)
  assert.exists(response.body.token)

})

test('it should sign in the user with email and password', async ({ client, assert }) => {

  const response = await authLogin(client, userData)

  response.assertStatus(200)
  assert.exists(response.body.token)

})

test('it should login, get authenticated user based in token and check if name match and its startCase applied', async ({ client, assert }) => {

  const userResponse = await authGetLoggedUser(client)

  userResponse.assertStatus(200)
  assert.equal(userResponse.body.user.name, startCase(userData.name), 'check if name applied startCase')

})

test('it should check if the USER with example email exists', async ({ client, assert }) => {

  const response = await client
  .post('/api/user/auth/checkEmail')
  .send({email: userData.email})
  .end()

  response.assertStatus(200)

})

test('it should return 404 if the USER with example email doesnt exists', async ({ client, assert }) => {

  const response = await client
  .post('/api/user/auth/checkEmail')
  .send({email: 'some@email.com'})
  .end()

  response.assertStatus(404)

})
