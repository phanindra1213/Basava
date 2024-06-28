import '../styles/globals.css';

function MyApp({ Component, pageProps }: { Component: React.ComponentType<any>, pageProps: any }) {
  return <Component {...pageProps} />;
}

export default MyApp;