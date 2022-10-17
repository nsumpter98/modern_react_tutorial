import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';

function App() {


  return (
    <Router>
        <div className="App">
            <Navbar />
          <div className="content">
              <Switch>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/create' element={<Create/>} />
              </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
