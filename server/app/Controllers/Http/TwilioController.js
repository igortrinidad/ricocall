'use strict'

const ClientCapability = require('twilio').jwt.ClientCapability;
const Twilio = require('twilio')
const Env = use('Env')

class TwilioController {

  constructor() {
    this.accountSid = Env.get('TWILIO_ACCOUNT_SID')
    this.authToken = Env.get('TWILIO_ACCOUNT_TOKEN')
    this.appSid = Env.get('TWILIO_APP_SID')
    this.appEndpoint = Env.get('APP_ENDPOINT')
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
  async token ({ request, response, view }) {

    const { name: clientId } = request.all()

    const capability = new ClientCapability({
      accountSid: this.accountSid,
      authToken: this.authToken,
    })

    capability.addScope(
      new ClientCapability.OutgoingClientScope({ applicationSid: this.appSid })
    )

    capability.addScope(new ClientCapability.IncomingClientScope( clientId ))

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

    console.log(`Routing call ${From} => ${To}`)

    const xml =
    `<?xml version="1.0" encoding="UTF-8"?>
      <Response>
        <Dial>
          <Client>${To}</Client>
        </Dial>
      </Response>
    `

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

    const voiceUrl = `${this.appEndpoint}/api/twilio/routeIncomingCall`

    const client = Twilio(this.accountSid, this.authToken)

    console.log(voiceUrl)

    client.applications(this.appSid)
      .update({
          voiceMethod: 'get',
          voiceUrl
       })
      .then(application => console.log('APPLICATION VOICE URL UPDATED TO: ', application.voiceUrl));

  }



}

module.exports = TwilioController
