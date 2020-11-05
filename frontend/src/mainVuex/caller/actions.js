import Api from '@/util/Api'

import { Device } from 'twilio-client'
import { getLogger } from 'loglevel'
getLogger(Device.packageName)

export default {

  setupTwilioDevice() {
    Api.get(`/twilio/token`)
    .then(({ data }) => {

      const { token } = data
      Device.setup(token)

      Device.on('ready', (device) => {
        console.log('Ready');
        console.log(device);
      })

      Device.on('error', (error) => {
        console.log('Error: ' + error.message);
      })

      Device.on('incoming', (conn) => {
        console.log('Incoming connection from ' + conn.parameters.From);
        // accept the incoming connection and start two-way audio
        conn.accept();
      })

    })
  },
  destroyTwilioDevice() {
    Device.destroy()
  }
}
