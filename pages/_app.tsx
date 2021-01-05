import { AppProps } from 'next/dist/next-server/lib/router/router'
import { GlobalStyles } from 'twin.macro'

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
)

export default App
