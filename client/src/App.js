import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

//components
import Login from "./components/account/Login";
import Home from "./components/home/Home";
import DataProvider from "./context/DataProvider";
import Header from "./components/header/Header";

function App() {

  const [isAuthenticated, isUserAuthenticated] = useState(false);

  const PrivateRoute = ({ isAuthenticated, ...props }) => {
    return isAuthenticated  ? 
      <>
        <Header />
        <Outlet />
      </> : <Navigate replace to='/login' />
  };
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: 64 }}>
          <Routes>
             <Route path="/login" element={<Login isUserAuthenticated={isUserAuthenticated}/>}/>
             <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                 <Route path="/" element={<Home/>}/>
             </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
