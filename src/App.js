
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignUp from './Pages/SignUp/SignUp';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyDashboard from './Pages/Dashboard/Myappointments';
import Myappointments from './Pages/Dashboard/Myappointments';
import MyReview from './Pages/Dashboard/MyReview';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='appointment' element={
        <RequireAuth>
          <Appointment></Appointment>
        </RequireAuth>

        }></Route>
        <Route path='dashboard' element={
        <RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>

        }>
          <Route index element={<Myappointments></Myappointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
    
  );
}

export default App;
