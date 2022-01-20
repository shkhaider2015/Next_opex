import '../styles/globals.css'
import React, { useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/serviceWorker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return <>
                <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                 <title>Gogo React - React Admin Template</title>
         <Component {...pageProps} />
  </>
}

export default MyApp
