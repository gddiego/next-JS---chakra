// import '../styles/globals.css'
// import ThemeContainer from '../context/theme/ThemeContainer';

import ThemeContainer from "../context/ThemeContainer"

function MyApp({ Component, pageProps }) {
  return (
<ThemeContainer>
<Component {...pageProps} />
</ThemeContainer>
  )
}

export default MyApp
