import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Heder from './component/Header/Heder';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Error from './component/Error/Error';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import About from './component/About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Heder></Heder>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>

         <Route path="/home">
           <Home></Home>
         </Route>

         <Route path="/services">
           <Services></Services>
         </Route>

         <Route path="/login">
           <Login></Login>
         </Route>

         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>

         <Route path="*">
           <Error></Error>
         </Route>
         

       </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
