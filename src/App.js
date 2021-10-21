import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import PurchaseComplete from './components/PurchaseComplete/PurchaseComplete';
import MenuBar from './components/MenuBar/MenuBar';
import MenuBar2 from './components/MenuBar2/MenuBar2';
import Header from './components/Header/Header';
import Lunches from './components/Lunches/Lunches';
import Dinners from './components/Dinners/Dinners';
import OrderItem from './components/OrderItem/OrderItem';
import Shipping from './components/Shipping/Shipping';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Header></Header>
          <MenuBar2></MenuBar2>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/lunch">
              <Lunches></Lunches>
            </Route>
            <Route exact path="/dinner">
              <Dinners></Dinners>
            </Route>
            <Route exact path="/orderitem/:orderid">
              <OrderItem></OrderItem>
            </Route>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path="/purchase">
              <PurchaseComplete></PurchaseComplete>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
