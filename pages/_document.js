import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta name="theme-color" content="#000000" />
                <link rel="stylesheet" href="/assets/fonts/simple-line-icons/css/simple-line-icons.css" />
                <link rel="stylesheet" href="/assets/fonts/iconsmind-s/css/iconsminds.css" />
            
                <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument