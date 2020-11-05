const Mail = use('Mail')
const Env = use('Env')

module.exports = async ({ userName, email, newPassword }) => {

  const resume = 'We have been request a new password, so here it is'
  const content = `
    <h3>Hi ${userName}</h3>
    <p style="color: #32322c;">We have been requested a new password, so here it is</p>
    <h1 class="text-center">${newPassword}</h1>
  `

  const hasActionButton = true
  const actionTitle = 'Sign in'
  const actionUrl = 'https://ricocall.igortrindade.dev'

  await Mail.send('emails.template.standart', { content, resume, hasActionButton, actionTitle, actionUrl }, (message) => {
    message.from(Env.get('MAIL_FROM'), Env.get('MAIL_FROM_NAME'))
    message.to(email, userName)
      .subject('Ricocall new password has been requested')
  })

}
