import React from 'react';
import './App.css';
import AddMovie from './AddMovie'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Footer from './component/footer';
import Services from './component/Services';
import Package from './component/Package';
import Contact from './component/Contact';

function App() {
   
  return (
   

    <Router>
<Header/>
    <Routes>
        <Route exact path='/addmovie'  element={<AddMovie />} />
        <Route exact path='/'  element={<Home />} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/package' element={<Package/>} />
        <Route exact path='/contact' element={<Contact/>} />



    </Routes>
    <Footer/>
    </Router>

  );
}

export default App;


// import {useState, useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import AddMovie from './AddMovie'


// function App() {

//   const [movies, setMovies] = useState([])
//   useEffect (() => {
//     setMovies([
//       {
//         name:'Billions',
//         genre: 'Drama',
//         starring: 'Damian Lewis, Paul Giamatt',
//       },
//       {
//         name:'Sarafina',
//         genre: 'drama',
//         starring: 'Leleti Khumalo',
//       },
    
//     ])
//   }, [])

//   return (
//     <div className="App">
//      {/* const {movies} = movies */}
//       {movies.map((movie, index) => {
//         return(
//           <div className="movies">
//             <h2>{movie.name}</h2>
//             <h3>{movie.genre}</h3>
//             <h4>{movie.starring}</h4>
//           </div>
//         )
//       }
//       )}

//     </div>
//   );
// }

// export default App;


