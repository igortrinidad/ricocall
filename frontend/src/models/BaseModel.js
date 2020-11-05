const BaseModel = class {
  get errors(){
    return this.requireds.filter((req) => {

      if(typeof (this[req.item]) == 'boolean' && !this[req.item]) {
        return
      }

      if (typeof (req.validation) == 'function') {
        return req.validation(this[req.item], this)
      }

      if (
        typeof (this[req.item]) == 'string' && !this[req.item].length
        || Array.isArray(this[req.item]) && !this[req.item].length
        || typeof (this[req.item]) == 'object' && !this[req.item]
      ) {
        return req
      }
    })
  }

  get hasError(){
    return (this.errors.length) ? true : false
  }

  get errorPhrase(){
    return {
      init: 'Please, check this information ',
      end: ' to procceed.'
    }
  }

  get validationPhrase(){
    return this.errorPhrase.init + this.errors.map((erro) => erro.label).join(', ') + this.errorPhrase.end;
  }

  get validationPhraseHtml(){
    return `${this.errorPhrase.init} <b>${this.errors.map((erro) => erro.label).join(', ')}</b> ${this.errorPhrase.end}`;
  }

  validation = (input) => {
    if(!this[input].length) return { hasError: true, checked: false, filled: false }
    if (this.errors.filter((item) => item.item == input).length) return { hasError: true, checked: false, filled: true }
    return { hasError: false, checked: true, filled: true };
  }
}

module.exports = BaseModel
