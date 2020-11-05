const BaseModel = require('./BaseModel')

export default class User extends BaseModel {
  constructor(obj = {}) {
    super()

    if(process.env.NODE_ENV == 'production') {
      this.id = obj.id || null
      this.name = obj.name || ''
      this.email = obj.email || ''
      this.password = obj.password || ''
      this.password_confirmation = obj.password_confirmation || ''
      this.created_at = obj.created_at || ''
      this.updated_at = obj.updated_at || ''
      this.isBlocked = obj.isBlocked || false
    } else {
      this.id = obj.id || null
      this.name = obj.name || 'Igor'
      this.email = obj.email || 'igortrindade.me@gmail.com'
      this.password = obj.password || '123123'
      this.created_at = obj.created_at || ''
      this.updated_at = obj.updated_at || ''
      this.isBlocked = obj.isBlocked || false
    }
  }

  get requireds() {
    return [
      {
        item: 'name',
        label: 'name',
      },
      {
        item: 'email',
        label: 'email',
        validation: (value) => {
          let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !re.test(String(value).toLowerCase());
        }
      },
      {
        item: 'password',
        label: 'senha',
        validation: (value) => {
          if (value.length < 6) return true
        }
      },
    ]
  }

  get errorPhrase(){
    return {
      init: 'Please check the information: ',
      end: ' to procced'
    }
  }
}
