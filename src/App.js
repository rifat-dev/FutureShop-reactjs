import './App.css';
import {useEffect} from 'react'
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import SideNavBar from './components/pages/SideNav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Products from './components/pages/Products'
import Blog from './components/pages/Blog'
import Contact from './components/pages/Contact'
import Checkout from './components/pages/Checkout'
import {getPostsAction} from './store/action/postAction'
import {getProductsAction} from './store/action/productsAction'
import ChartModel from './components/models/ChartModal'


function App(props) {

    useEffect(() =>{
      props.getPostsAction()
      props.getProductsAction()
    })


  return (
    <div className="App">
      <BrowserRouter>
        <Row>
          <Col md={2}>
            <SideNavBar/>
          </Col>
          <Col md={10}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about"  component={About} />
              <Route path="/products"  component={Products} />
              <Route path="/blogs"  component={Blog} />
              <Route path="/contact"  component={Contact} />
              <Route path="/cart"  component={Checkout} />
            </Switch>
            <ChartModel/>
          </Col>
        </Row>


      </BrowserRouter>
    </div>
  );
}

export default connect(null,{getPostsAction,getProductsAction})(App);
