import './App.scss';
import Sidebar from './Components/Sidebar/Sidebar'
import Homes from './Page/Home/Homes';
import Box from './Page/Box/Box';
import Weight from './Page/Weight/Weight';

import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Sidebar />
        <div className="App__content">
           <Switch>
              <Route path="/person">
                 <Homes />
              </Route>
              <Route path="/message">
                 <Box />
              </Route>
              <Route path="/document">
                  <Weight />
              </Route>
           </Switch>
        </div>
    </div>
  );
}

export default App;