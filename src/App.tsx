import './App.css'
import Home from "./pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage/PhotoPage.tsx";

function App() {
  return (
    <main className='mainWrapper'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="photo/:id" element={<PhotoPage/>}/>
      </Routes>
    </main>
  )
}

export default App
