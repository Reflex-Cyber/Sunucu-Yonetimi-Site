import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Topluluk işlerine yardımcı olması için yapılmış olan bir bot."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@SunucuYönetimi" />
          <meta name="twitter:creator" content="@SunucuYönetimi" />
          <meta property="og:url" content="https://sunucuyönetimi.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Sunucu Yönetimi" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Topluluk işlerine yardımcı olması için yapılmış olan bir bot."
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="SunucuYönetimi" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Sunucu Yönetimi"
          />
          <meta name="theme-color" content="#037efb" />
          <link rel="icon" href="/img/logo.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
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
