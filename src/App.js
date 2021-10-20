import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import Heder from './component/Header/Heder';
import Home from './component/Home/Home';
import Error from './component/Error/Error';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import About from './component/About/About';
import AuthProvider from './context/AuthProvider';
import Footer from './component/Footer/Footer';
import Doctors from './component/Doctors/Doctors';
import PrivateRoot from './PrivateRoot/PrivateRoot';
import DoctorDetails from './component/DoctorDetails/DoctorDetails';
import Details from './component/Details/Details/Details';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Heder></Heder>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            
            <PrivateRoot path="/details/:detailsKey">
              <Details></Details>
            </PrivateRoot>

            <Route path="/doctors">
              <Doctors></Doctors>
            </Route>

            <PrivateRoot path="/doctorDetails/:doctorDetailsKey">
              <DoctorDetails></DoctorDetails>
            </PrivateRoot>

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
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
