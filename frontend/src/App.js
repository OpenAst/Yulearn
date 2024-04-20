import react from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Home from './pages/Home';
import ProtectedRoute from "./components/ProtectedRoute";
import About from './navigations/About';
import Resource from './navigations/Resource';
import Profile from './navigations/Profile';
import Course from './components/Course';



function App() {

      return <div>
        <BrowserRouter>
            <Routes>
              <Route path="/" 
              element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
              }
              />
              <Route 
                path="/login" element={<Login />}
              />
              <Route 
              path="/register" 
              element={<Register />}
              />
              <Route 
                path="*" element={<NotFound />}
              />
              <Route path="/courses" element={<Course />} 
              />
              <Route path="/about" element={<About />}
              />
              <Route path="/resources" element={<Resource />}
              />  
              <Route path="/profile" element={<Profile />}
              />
            </Routes> 
        </BrowserRouter>
      </div>
}

export default App;
