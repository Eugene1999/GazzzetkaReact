import './App.css';

import React, { useState, createContext, useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  useNavigate,
} from 'react-router-dom';
import { AuthProvider, RequireAuth, Login } from './Auth/Auth.jsx';

import RightSidebar from './Sidebar/RightSidebar.jsx';
import Content from './Content/Content.jsx';
import Header from './Header/Header.jsx';


// Main app layout
const Layout = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Content />
        <RightSidebar />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <RequireAuth>
                <Layout />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
