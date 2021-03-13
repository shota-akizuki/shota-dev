import '../styles/globals.css';
import { Footer } from '../components/footer';
import { ThemeProvider } from 'next-themes';
function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;


