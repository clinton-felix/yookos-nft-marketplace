import "../styles/globals.css"

// INTERNAL IMPORTS
import { Navbar } from "../components/componentsindex"

const MyApp = ({ Component, pageProps }) => (
  <div>
    <Navbar />
    <Component {...pageProps} />
  </div>
)

export default MyApp
