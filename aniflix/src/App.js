import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {Home} from './routes/home/home.component'
import {Navigation} from './routes/navigation/navigation.component';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
