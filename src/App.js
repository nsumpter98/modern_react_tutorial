import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NotFound from "./NotFound";
import {BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom';
import BlogDetails from "./BlogDetails";

function App() {


  return (
    <Router>
        <div className="App">
            <Navbar />
          <div className="content bg-gray-400">
              <Switch>
                  <Route exact path='/' element={<Home/>} />
                  <Route exact path='/create' element={<Create/>} />
                  <Route exact path='/blogs/:id' element={<BlogDetails/>} />
                  <Route path='*' element={<NotFound/>} />
              </Switch>
          </div>
        </div>
    </Router>
  );
}

export default App;
