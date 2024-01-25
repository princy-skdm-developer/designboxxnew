import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages 
import Home from "./Pages/Home";
import Courses2 from "./Pages/Courses2";
import Studentswork from "./Pages/Studentswork";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBarCom from  "./Component/NavBarCom";
import Courses from './Pages/Courses';

import Placement from './Pages/Placement';

import CourseDescFashion from './Component/CourseDescFashion';
import CourseDescInterior from './Component/CourseDescInterior';





function App() {
  const slugObjectsArray = [];

// Iterate over the RoomList and extract Slugs as objects
CourseDescFashion.forEach((Category) => {
  if (Array.isArray(Category.Year)) {
  Category.Year.forEach((year) => {
    slugObjectsArray.push({ slug: year.Slugs });
    
  });
}
});
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarCom/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Studentswork' element={<Studentswork/>} />
          <Route path='/Placement' element={<Placement/>} />
         
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/Courses' element={<Courses/>}/>
          <Route path='/Courses2' element={<Courses2/>}/>
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          {CourseDescFashion.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.Slugs}
              element={<Courses/>}
            />
            ))}
              {CourseDescInterior.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.Slugs}
              element={<Courses2/>}
            />
            ))}
            {slugObjectsArray.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.slug}
              element={<Courses/>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

