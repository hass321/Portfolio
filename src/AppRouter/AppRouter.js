import React,{ Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Components
import Header from '../components/Header/Header';
// Screens
import Home from  '../screens/Home/Home';
import About from '../screens/About/About';
import Projects from '../screens/Projects/Projects';
import WebSlider from '../components/Slider/Slider';

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Fragment>
                <Header />
                <Switch>
                    <WebSlider />
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} exact/>
                    <Route path="/projects" component={Projects} exact/>
                </Switch>
            </Fragment>
        </BrowserRouter>
    )
};

export default AppRouter;