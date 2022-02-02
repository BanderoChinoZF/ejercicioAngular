// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  firebase: {
    projectId: 'pruebareclutamiento-angular',
    appId: '1:429030662876:web:774fbf3b51e6463b234a19',
    storageBucket: 'pruebareclutamiento-angular.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyCmajyt7GFaFjoW0bDP3g5Zcd9hOlc3ZSw',
    authDomain: 'pruebareclutamiento-angular.firebaseapp.com',
    messagingSenderId: '429030662876',
    measurementId: 'G-DH26SS21TT',
  },
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
};
