import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Registerr from './pages/register/Registration';
import Login from './pages/login/Login';
import Image from './pages/Image/Image';
import Worker from './pages/Worker/Worker';
import AllWorkers from './pages/Worker/ViewWorker';
import WorkerInfo from './pages/Worker/WorkerInfo';
//import EditWorker from './pages/Worker/EditWorker';
//import EditWorker from './pages/Worker/EditWorkers';
import EditW from './pages/Worker/EditW';

import Logout from './components/Logout';
import Orders from './components/Orders';
import APIProducts from './components/APIProducts';
import AllOrders from './components/OrdersSecond';
import Layout from "./components/Layout";
import Abc from "./components/Abc";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "./App.css";
function App() {
  // Function to clear complete cache data
  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
    alert('Complete Cache Cleared')
  };
  return (
    // <div>
    // <button onClick={() => clearCacheData()} >
    //     Clear Cache Data</button>
    //     </div>
    <Router>
    <Routes>
    <Route exact path="/" element={<Layout />}>
   
    <Route exact path="abc" element={<Abc />} />
    <Route exact path='/orders' element={<Orders/>} />
    <Route exact path='/allorders' element={<AllOrders/>} />
    <Route exact path='/apiorders' element={<APIProducts/>} />
    <Route exact path='/logout' element={<Logout/>} />
    <Route exact path="/register" element={<Registerr />} />
   
    <Route exact path='/image' element={<Image/>} />
    <Route exact path='/addworker' element={<Worker/>} />
    <Route exact path='/viewworker' element={<AllWorkers/>} />
    <Route exact path="/workerinfo" element={<WorkerInfo />} />
    <Route exact path="/editworker/:id" element={<EditW />} />

    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route exact path='/' element={<Login/>} />
   
        
       </Route>
        </Routes>
        </Router>
  );
}

export default App;
