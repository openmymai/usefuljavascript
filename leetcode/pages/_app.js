import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp