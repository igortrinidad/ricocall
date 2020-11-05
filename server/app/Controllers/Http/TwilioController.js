'use strict'

const ClientCapability = require('twilio').jwt.ClientCapability;
const Twilio = require('twilio')
const Env = use('Env')

class TwilioController {

  constructor() {
    this.accountSid = Env.get('TWILIO_ACCOUNT_SID')
    this.authToken = Env.get('TWILIO_ACCOUNT_TOKEN')
    this.appSid = Env.get('TWILIO_APP_SID')
  }

  /**
   * Show a list of all chatmessages.
   * GET chatmessages
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async token ({ request, response, auth }) {

    const user = await auth.getUser()

    const capability = new ClientCapability({
      accountSid: this.accountSid,
      authToken: this.authToken,
    })

    capability.addScope( new ClientCapability.OutgoingClientScope({ clientName: user.id, applicationSid: this.appSid }))

    capability.addScope( new ClientCapability.IncomingClientScope(user.id))

    const token = capability.toJwt()

    return response.status(200).json({token})

  }


  /**
   * routeIncomingCall
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async routeIncomingCall ({ request, response }) {

    const { AccountSid, ApplicationSid, From, To, CallSid } = request.all()

    if(this.accountSid != AccountSid || this.appSid !== ApplicationSid) {
      return response.status(403).json({ message: 'Unauthorized Twilio Application'})
    }

    console.log(`ROUTING CALL: ${From} => ${To}`)

    const xml = `<?xml version="1.0" encoding="UTF-8"?><Response><Dial callerId="client:${From}"><Client>${To}</Client></Dial></Response>`;

    response.header('Content-Type', 'application/xml')

    return response.status(200).send(xml)

  }


  /**
   * updateApplicationVoiceUrl
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async updateApplicationVoiceUrl ({ request, response }) {

    const { url: voiceUrl} = request.all()

    const client = Twilio(this.accountSid, this.authToken)

    client.applications(this.appSid)
      .update({
          voiceMethod: 'get',
          voiceUrl
       })
      .then(application => console.log('APPLICATION VOICE URL UPDATED TO: ', application.voiceUrl));

  }



}

module.exports = TwilioController
