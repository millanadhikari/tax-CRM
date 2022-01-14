import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import { theme } from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Sidebar/>
      <Component {...pageProps}/>
x      

    </ChakraProvider>
  )
}

export default MyApp
