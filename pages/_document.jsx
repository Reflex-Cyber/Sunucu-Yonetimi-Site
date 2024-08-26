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
            content="Eski TA - TPT"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@EskiTATPT" />
          <meta name="twitter:creator" content="@EskiTATPT" />
          <meta property="og:url" content="https://ordu-yönetimi-tma.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Eski TA - TPT" />
          <link
            rel="icon"
            href="/img/logo2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Topluluk işlerine yardımcı olması için yapılmış olan bir bot!"
          />
          <meta property="og:image" content="https://play-lh.googleusercontent.com/glgNKjN8hykdWM8rNAGaAeUWA8SWwqH_ziJWvfqzw9_fyjivEGgQlvcm4cZ0Efu-4w=w600-h300-pc0xffffff-pd" />
          <meta property="og:image:alt" content="Eski TA - TPT" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Ordu Yönetimi - TMA Studios"
          />
          <meta name="theme-color" content="#dd0808" />
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
