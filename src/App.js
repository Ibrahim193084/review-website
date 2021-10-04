import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import ServicePage from './components/ServicePage/ServicePage';
import Details from './components/Details/Details';
import NewsPage from './components/NewsPage/NewsPage';
import AboutPage from './components/AboutPage/AboutPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <ServicePage></ServicePage>
          </Route>
          <Route exact path="/services/:id">
            <Details></Details>
          </Route>
          <Route exact path="/news">
            <NewsPage></NewsPage>
          </Route>
          <Route exact path="/about">
            <AboutPage></AboutPage>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
