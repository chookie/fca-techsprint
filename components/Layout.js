import NextHead from 'next/head'
import { Container } from 'reactstrap'
import Header from './Header'
import { Row, Col } from 'reactstrap';
import Footer from "./Footer";

const defaultDescription = ''
const defaultOGURL = ''

const Layout = (props) => (
  <div>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{props.title || ''}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon"  type="image/x-icon" href="/static/favicon/favicon.ico" />
      <link rel='shortcut icon' type='image/x-icon' href='/static/favicon/favicon.ico' />
      <link rel="apple-touch-icon" sizes="57x57" href="/static/favicon/apple-icon-57x57.png"/>
      <link rel="apple-touch-icon" sizes="60x60" href="/static/favicon/apple-icon-60x60.png"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/static/favicon/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="//static/favicon/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/static/favicon/apple-icon-114x114.png"/>
      <link rel="apple-touch-icon" sizes="120x120" href="/static/favicon/apple-icon-120x120.png"/>
      <link rel="apple-touch-icon" sizes="144x144" href="/static/favicon/apple-icon-144x144.png"/>
      <link rel="apple-touch-icon" sizes="152x152" href="/static/favicon/apple-icon-152x152.png"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-icon-180x180.png"/>
      <link rel="icon" type="image/png" sizes="192x192"  href="/static/favicon/android-icon-192x192.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="96x96" href="/static/favicon/favicon-96x96.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png"/>
      <link rel="manifest" href="/static/favicon/manifest.json"/>
      <meta name="msapplication-TileColor" content="#ffffff"/>
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.title || ''} />
      <meta
        property="og:description"
        content={props.description || defaultDescription}
      />
      <meta name="twitter:site" content={props.url || defaultOGURL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={`${props.url}/static/og-image-300x300.png`} />
      <meta property="og:image" content={`${props.url}/static/og-image-300x300.png`} />
      <meta property="og:image" content={`${props.url}/static/og-image-300x300.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_GB" />
      {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" /> */}
      {/* https://www.bootstrapcdn.com/bootswatch/?theme=10 */}
      <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.3/minty/bootstrap.min.css" rel="stylesheet" integrity="sha384-Qt9Hug5NfnQDGMoaQYXN1+PiQvda7poO7/5k4qAmMN6evu0oDFMJTyjqaoTGHdqf" crossOrigin="anonymous"/>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
    </NextHead>
    <Container>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      {props.children}
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Container>
  </div>
);

export default Layout
