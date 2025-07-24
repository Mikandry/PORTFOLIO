import React from 'react';
import Header from './components/layouts/Header';
import Home from './components/home/Home';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About/About';
import Education from './components/Education/Education';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Slice from './components/Slice/Slice';
import Welcome from './components/welcome/Welcome';
import Professional from './components/Professional/Professional';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show welcome page at root / */}
        <Route path="/" element={<Welcome />} />

        {/* Other routes with header */}
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/professional"
          element={
            <>
              {/* <Header /> */}
              <Professional />
            </>
          }
        />
        <Route
          path="/education"
          element={
            <>
              <Header />
              <Education />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
            </>
          }
        />
        <Route
          path="/project"
          element={
            <>
              <Header />
              <Projects />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
            </>
          }
        />
        <Route
          path="/slice"
          element={
            <>
              <Header />
              <Slice />
            </>
          }
        />

        {/* Redirect unknown paths to welcome */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
