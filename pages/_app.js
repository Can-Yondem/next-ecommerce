import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from 'react-redux';
import { store } from "../redux/store";

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    cache: new InMemoryCache()
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ApolloProvider>
    </Provider>


  )
}

export default MyApp
