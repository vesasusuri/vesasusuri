import "./App.scss";
import { lazy, useEffect ,Suspense, } from 'react';
import ScrollToTop from "./ScrollToTop";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";

import {IntlProvider} from 'react-intl';
import {useSelector} from 'react-redux';
import {translate} from './translation/translate';

import Loading from "./components/shared/Loading/Loader";

const Home = lazy(() => import('./pages/Home/Home'));
const Login = lazy(() => import('./pages/Login/Login'));
const Signup = lazy(() => import('./pages/Signup/Signup'));
const Products = lazy(() => import('./pages/Products/Products'));
function App() {
  const language = useSelector((state) => state.language.language);

  useEffect(() => {
    Aos.init({
      duration:1250,
      once: true
    })
  }, [])
  return (
    <Router>
      <Suspense fallback={<Loading />}>
       <IntlProvider locale={language}
          formats={{ number: 'en' }}
          messages={translate[language]}>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
