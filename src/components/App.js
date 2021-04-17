import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from '../components/Layout';
import NotFound from '../components/NotFound'

import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import BadgesEdit from '../pages/BadgeEdit'
import Home from '../pages/Home'
function App() {
    return(
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route  exact path= '/badges' component= {Badges}/>
                    <Route  exact path= '/badges/new' component= {BadgeNew}/>
                    <Route  exact path= '/badges/:badgeId/edit' component= {BadgesEdit}/>
                    <Route  exact path= '/' component= {Home}/>
                    <Route  component= {NotFound}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App