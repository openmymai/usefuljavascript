import Layout from './layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp