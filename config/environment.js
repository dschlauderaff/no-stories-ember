'use strict';

const AUTH_CONFIG = require('./auth0-variables')

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'no-stories',
    environment,
    rootURL: '/',
    locationType: 'auto',
    'ember-simple-auth': {
      authenticationRoute: 'login',
      auth0: {
        clientID: AUTH_CONFIG.clientID,
        domain: AUTH_CONFIG.domain,
        logoutReturnToURL: '/logout',
        enableImpersonation: false,
        silentAuth: {
          // Silent authentication is off by default.
          // See 'Silent Authentication' section in ember-simple-auth-auth0
          // readme for a list of options that go here.
        }
      }
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
