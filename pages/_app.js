import App from 'next/app'
import AppContext from 'context/AppContext';
import NavBar from 'components/NavBar';
import useInitialState from '../hooks/useInitialState';
import '../styles.css'


function MyApp({ Component, pageProps }) {

  
  const initialState = useInitialState();

  return(
    <AppContext.Provider value={initialState} >
      <NavBar />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp