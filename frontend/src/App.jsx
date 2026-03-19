import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'  
import HomePage from './pages/Homepage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import AccommodationPage from './pages/AccommodationPage/AccommodationPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />                    
          <Route path="about" element={<AboutPage />} />             
          <Route path="errorpage" element={<ErrorPage />} />       
          <Route path="accommodation/:id" element={<AccommodationPage />} />  
        </Route>
        
        
        <Route path="*" element={<ErrorPage />} />
         <Route index element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
