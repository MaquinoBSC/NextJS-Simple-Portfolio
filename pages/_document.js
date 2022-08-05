import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name='description' content='Maquino Simple PortFolio WebSite' />
        <title>My Portfolio</title>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}