import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/Main';
import SobreEmpresa from './pages/SobreEmpresa';
import Contato from './pages/Contato';
import Hosting from './pages/Hosting';
import Privacidade from './pages/Privacidade';
import Cloud from "./pages/Cloud";


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/sobre-empresa" component={SobreEmpresa} />
                <Route path="/contato" component={Contato} />
                <Route path="/hosting" component={Hosting} />
                <Route path="/cloud" component={Cloud} />
                <Route path="/privacidade" component={Privacidade} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;