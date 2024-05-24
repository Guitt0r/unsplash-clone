import './App.css'
import Home from "./pages/Home/Home.tsx";
import { Route, Routes } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage/PhotoPage.tsx";
import Header from "./components/Header/Header.tsx";
import { useState } from "react";
import SearchResults from "./pages/SearchResults/SearchResults.tsx";
import CollectionPage from "./pages/CollectionPage/CollectionPage.tsx";

function App() {

  const [columns, setColumns] = useState<number>(3);
  return (
    <main className='mainWrapper'>
      <Header columns={columns} setColumns={setColumns}/>
      <div className='contentWrapper'>
        <Routes>
          <Route path="/" element={<Home columns={columns}/>}/>
          <Route path="photo/:id" element={<PhotoPage/>}/>
          <Route path="search/:id" element={<SearchResults columns={columns}/>}/>
          <Route path="collection/:id" element={<CollectionPage columns={columns}/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
