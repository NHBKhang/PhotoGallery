import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="See pictures from NHBKHANG."
          />
          <meta property="og:site_name" content="" />
          <meta
            property="og:description"
            content="See pictures from NHBKHANG."
          />
          <meta property="og:title" content="NHBKHANG Photo Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="NHBKHANG Photo Gallery" />
          <meta
            name="twitter:description"
            content="See pictures from NHBKHANG."
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
