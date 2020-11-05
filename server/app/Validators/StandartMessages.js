const Antl = use('Antl')

module.exports = {

  get validateAll () {
    return true
  },

  get messages() {
		return Antl.list('validation')
  },

	async fails(errorMessages) {
		return this.ctx.response.status(400).json({ errors: errorMessages })
  }

}
