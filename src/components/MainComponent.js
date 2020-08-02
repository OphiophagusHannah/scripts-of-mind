import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Menu from './LocalProjects/GetLocalProjects';
import ProjectDetail from './LocalProjects/PostDetails';
import Header from './Nav';
// import Footer from './FooterComponent';
import Home from './HomePage';
import Contact from './ContactPage';
import About from './AboutPage';

import { projects } from './LocalProjects/projects';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: projects
            // comments: COMMENTS,
            // promotions: PROMOTIONS,
            // leaders: LEADERS
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                // project={this.state.projects.filter((project) => project.featured)[0]}
                // promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                // leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        const ProjectWithId = ({ match }) => {
            return (
                <ProjectDetail project={this.state.projects.filter((project) => project.id === parseInt(match.params.dishId, 10))[0]}
                />
            );
        };



        return (


            <div className="App">
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu projects={this.state.projects} />} />
                    <Route path='/menu/:dishId' component={ProjectWithId} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />

                    <Redirect to="/home" />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* <DishDetail dish={this.state.dishes.filter((dish) =>
                    dish.id === this.state.selectedDish)[0]
                // } /> */}
                {/* <Footer /> */}
            </div>

        );
    }
}

export default Main;
