import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './routes/home/home.component'
import {Navigation} from './routes/navigation/navigation.component';
import {TvPage} from './routes/Tv/tv.component';
import {MoviesPage} from './routes/movies/movies.components';
import {LandingPage} from './routes/landing/landing.component';
import {AuthenticationPage} from './routes/authentication/authentication.component'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path="/tv" element={<TvPage />}/>
          <Route path="/movies" element={<MoviesPage />}/>
          <Route path="/landing" element={<LandingPage />}/>
          <Route path="/authentication" element={<AuthenticationPage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
