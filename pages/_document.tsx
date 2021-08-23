import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="Marvol es él sitió donde cualquiera puede conocer todas las novedades de sus superhéroes favoritos."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
