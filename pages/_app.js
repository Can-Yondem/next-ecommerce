import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../sliderCss/slick-theme.css";
import "../sliderCss/slick.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
