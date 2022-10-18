import Navbar from "./Navbar";
import Home from "./Home";
import Create from "./Create";
import NotFound from "./NotFound";
import BlogDetails from "./BlogDetails";
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
//Route from ionic import
import { Route } from 'react-router-dom';

import '@ionic/react/css/core.css'
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

function App() {


    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={Create} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
        // <Router>
        //     <div className="App">
        //         <Navbar />
        //       <div className="content">
        //           <Switch>
        //               <Route exact path='/' element={<Home/>} />
        //               <Route exact path='/create' element={<Create/>} />
        //               <Route exact path='/blogs/:id' element={<BlogDetails/>} />
        //               <Route path='*' element={<NotFound/>} />
        //           </Switch>
        //       </div>
        //     </div>
        // </Router>
    );
}

export default App;
