import {init} from 'next-firebase-auth';

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000;

const initAuth = () => {
  init({
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    firebaseClientInitConfig: {
      apiKey: process.env.FIREBASE_KEY, // required
      authDomain: process.env.FIREBASE_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE,
      projectId: process.env.FIREBASE_PROJECT_ID,
    },
    cookies: {
      name: 'ExampleApp', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: process.env.PUBLIC_COOKIE_SECURE === 'true',
      signed: true,
    },
  });
};

export default initAuth;
