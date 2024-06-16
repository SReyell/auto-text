// pages/_app.js

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageRestaurants} />;
}

export default MyApp;
