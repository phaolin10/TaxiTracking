import React  from 'react';
import {Router, Scene} from 'react-native-router-flux';

import Home from './components/Home';
import Query1 from './components/Query1';
import Query2 from './components/Query2';
import Query3 from './components/Query3';



const App = () => {
 
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home"
          component={Home}
          title="Anasayfa"
        />
        <Scene
          key="Query1"
          component={Query1}
          title="Sorgu 1"
        />
        <Scene
          key="Query2"
          component={Query2}
          title="Sorgu 2"
        />
        <Scene
          key="Query3"
          component={Query3}
          title="Sorgu 3"
        />
      </Scene>
    </Router>
  );
}

export default App;
