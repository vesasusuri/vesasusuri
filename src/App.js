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
const OurTeam = lazy(() => import('./pages/ourTeam/OurTeam'));
const AboutUs = lazy(() => import('./pages/aboutUs/AboutUs'));
const Projects = lazy(() => import('./pages/projects/projects'));
const Cinema = lazy(() => import('./pages/cinema/cinema'));
const Laravel = lazy(() => import('./pages/laravel/laravel'));
const Wordpress = lazy(() => import('./pages/wordpress/wordpress'));
const Mysql = lazy(() => import('./pages/php/php'));
const React = lazy(() => import('./pages/react/reactt'));
const Java = lazy(() => import('./pages/java/java'));
const Code = lazy(() => import('./pages/code/code'));

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
        <Route exact path="/ourTeam" element={<OurTeam/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/aboutUs" element={<AboutUs/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/laravel" element={<Laravel/>} />
        <Route exact path="/wordpress" element={<Wordpress/>} />
        <Route exact path="/php&mysql" element={<Mysql/>} />
        <Route exact path="/react" element={<React/>} />
        <Route exact path="/java" element={<Java/>} />
        <Route exact path="/code" element={<Code/>} />
        <Route exact path="/scratch" element={<Code/>} />
        <Route exact path="/mit" element={<Code/>} />
        <Route exact path="/cinema" element={<Cinema/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
      </IntlProvider>
      </Suspense>
    </Router>
  );
}

export default App;
