import { BrowserRouter as Router, NavLink, Routes, Route } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import AlbumList from './components/AlbumList';
// import { Album } from "./components/Album.interface";
import AlbumDetails from './components/AlbumDetails';
import AlbumsProvider from './context/AlbumsProvider'

function App() {

  return (
    <AlbumsProvider>
      <Router basename='/homework_39'>
        <nav className='nav-menu'>
          <ul className='menu'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/albums">Albums</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<AlbumList />} />
          <Route path="/albums/:id/photos" element={<AlbumDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AlbumsProvider>
  );
}

export default App;
