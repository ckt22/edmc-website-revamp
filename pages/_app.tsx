// import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import Layout from '@components/layout';
import { Wrapper } from '@googlemaps/react-wrapper';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { GOOGLE_MAP_API_KEY } = publicRuntimeConfig;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Wrapper apiKey={GOOGLE_MAP_API_KEY}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Wrapper>
  )
}
