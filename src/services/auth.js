import { WebAuth } from 'auth0-js';

const auth0 = new WebAuth({
  domain: 'dev-emily.auth0.com',
  clientID: 'GXMQqnYroBLgn6B2e3EqamZ36mXiq2TE',
  redirectUri: 'http://localhost:7890/callback',
  responseType: 'token id_token',
  scope: 'openid profile'
});

export const login = () => {
  auth0.authorize();
};
