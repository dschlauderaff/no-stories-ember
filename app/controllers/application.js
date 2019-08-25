import Controller from '@ember/controller'
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      const authOptions = {
        responseType: 'token id_token',
        scope: 'openid email profile',
        audience: 'https://nostories/api'
      }

      this.session.authenticate(
        'authenticator:auth0-universal',
        authOptions,
        (err, email) => {
          alert(`Email link sent to ${email}`)
        }
      )
    },

    logout() {
      this.session.invalidate()
    }
  }
})
