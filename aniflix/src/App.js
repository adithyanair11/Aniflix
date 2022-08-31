import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './routes/home/home.component'
import {Navigation} from './routes/navigation/navigation.component';
import {TvPage} from './routes/Tv/tv.component';
import {MoviesPage} from './routes/movies/movies.components';
import {LandingPage} from './routes/landing/landing.component';
import {AuthenticationPage} from './routes/authentication/authentication.component';
import { WatchListPage } from './routes/watchlist/watch-list.component';
import {SearchPage} from './components/search-page/search-page.component';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from './utils/firebase/firebase.utils';
import { Navigate } from 'react-router-dom';
import { setCurrentUser } from './store/user/user.action';
import { selectCurrentUser } from './store/user/user.selector';
import {useDispatch,useSelector} from 'react-redux';
import {useEffect} from 'react';
function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user){
         createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="App">
    <SearchPage />
      <Navigation />
      <Routes>
          <Route index path="/*" element={currentUser ? <Home /> : <Navigate to="/landing" />}/>
          <Route path="/tv/*" element={currentUser ? <TvPage /> : <Navigate to="/landing" />}/>
          <Route path="/movies/*" element={currentUser ? <MoviesPage /> : <Navigate to="/landing" /> }/>
          <Route path="/landing" element={<LandingPage />}/>
          <Route path="/authentication" element={<AuthenticationPage /> }/>
          <Route path="/watchlist" element={currentUser ? <WatchListPage /> : <Navigate to="/landing" />}/>
      </Routes>
    </div>
  );
}

export default App;
