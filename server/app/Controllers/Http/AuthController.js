'use strict'

const newPasswordEmail = use("App/Services/email/newPasswordEmail")

const User = use('App/Models/User')

class AuthController {

  async register({request, response, auth}) {

    const data = request.only(User.fillable)
    await User.create(data)
    const token = await auth.authenticator('user').attempt(data.email, data.password)

    return response.status(200).json(token)
  }

  async login({request, response, auth}) {

    const {email, password} = request.all()

    const token = await auth.authenticator('user').attempt(email, password)

    return response.status(200).json(token)
  }

  async getLoggedUser({auth, response}) {

    const user = await auth.authenticator('user').getUser()

    if(user.isBlocked) return response.status(403).json({message: 'User is blocked'})

    return response.status(200).json({ user })
  }

  async update({auth, request, response}) {

    const user = await auth.authenticator('user').getUser()

    if(!user) return response.status(404).json()

    const data = request.only(User.fillable)

    const { passwordIsUpdated } = request.only(['passwordIsUpdated'])
    if(!passwordIsUpdated) delete data.password

    user.merge(data)

    await user.save()

    return user

  }

  async checkEmail({request, response}) {

    const {email} = request.only('email')

    const user = await User.query().where('email', email).first()

    if(user) {
      return response.status(200).json()
    }

    return response.status(404).json()
  }

  async generateNewPassword({request, response}) {

    const {email} = request.only('email')

    const user = await User.query().where('email', email).first()

    if(user) {

      const newPassword = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
      user.password = newPassword.toString()
      await user.save()

      await newPasswordEmail({userName: user.name, email: user.email, newPassword})

      return response.status(200).json()
    }

    return response.status(404).json()
  }

}

module.exports = AuthController
