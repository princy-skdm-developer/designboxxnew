import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages 
import Home from "./Pages/Home";

import Studentswork from "./Pages/Studentswork";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NavBarCom from  "./Component/NavBarCom";
import Courses from './Pages/Courses';
import Errorpage from "./Pages/Errorpage";
import CourseData from './Component/CourseData';





function App() {
  const slugObjectsArray = [];

// Iterate over the RoomList and extract Slugs as objects
// CourseDescFashion.forEach((Category) => {
//   if (Array.isArray(Category.Year)) {
//   Category.Year.forEach((year) => {
//     slugObjectsArray.push({ slug: year.Slugs });
    
//   });
// }
// });
  return (
    <div className="App">
      <BrowserRouter>
      <NavBarCom/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='designboxx-interior-fashion-designing-institutes' element={<Studentswork/>} />
          <Route path='/top-designing-institutes-near-ghatkopar' element={<Contact/>} />
          <Route path='/designing-institutes-ghatkopar' element={<About/>} />
             {CourseData.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.slug}
            element={<Courses/>}
          />
        ))}
          <Route path='/*' element={<Errorpage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

