import Route from '@ember/routing/route'
import ApplicationRouteMixin from 'ember-simple-auth-auth0/mixins/application-route-mixin'
import { inject as service } from '@ember/service'
import fetch from 'fetch'

export default Route.extend(ApplicationRouteMixin, {
  session: service(),

  model() {
    return fetch('http://localhost:3000/private', {
      method: 'GET',
      cache: false,
      headers: {
        Authorization: `Bearer ${this.session.data.authenticated.accessToken}`,
        'Access-Control-Allow-Origin': '*'
      }
    }).then(response => {
      console.log(response)
    })
  }
})
