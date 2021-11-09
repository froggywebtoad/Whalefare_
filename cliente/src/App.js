import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Login from './Login';
import Signup from './Signup';
import Logout from './Logout';
import Home from './Home';
import Profile from './Profile';
/*
import Add from './Add';
import Alert from './components/Alert';
*/
import Generador from './Generador';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from 'react-router-dom'


function App() {
    const [user, setUser] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:4000/profile').then((response) => {
            if (response.data.user) {
                setUser(response.data.user[0].id_u);
            }
        });
    }, []);

    Axios.defaults.withCredentials = true;

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid ">
                    <div className="navbar-brand mx-5">WHALEFARE</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-5">
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"><NavLink to="/home" activeClassName="active">Home</NavLink></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"><NavLink to="/login" activeClassName="active">Iniciar sesión</NavLink></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"><NavLink to="/signup" activeClassName="active">Registrarme</NavLink></div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" aria-current="page"><NavLink to="/logout" activeClassName="active">Cerrar sesión</NavLink></div>
                            </li>
                            <li className="nav-item">
                                <img height="30px" width="30px" src={"https://avatars.dicebear.com/api/jdenticon/" + user + ".svg?b=%23000000&r=50"} className="card-img-top" alt="profilePic" />
                                <div className="nav-link" aria-current="page"><NavLink to="/profile" activeClassName="active">Perfil</NavLink></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/logout">
                    <Logout />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/generar">
                    <Generador />
                </Route>
                <Route path="/profile">
                    <div className="container">
                        <Profile />
                    </div>

                </Route>
            </Switch>
        </Router>
    );
}
/*
return(
        <header>
            <ul>
                <li><a href="/"><b>WHALEFARE</b></a></li>
                <li><a href="github.com" aria-label="Haz clic aquí para iniciar sesión."><b>Iniciar sesión</b></a></li>
                <li><a href="github.com" className="active"
                       aria-label="Haz clic aquí para registrarte."><button><b>Registrarse</b></button></a></li>
            </ul>
        </header>
    );
*/

export default App;