import React, { Component } from 'react';
import posts from './interferance.js';
import './scss/interferance-image.css';
// get posts from online api
// it's return a json file

class GetInterferance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: posts,
            transform: 0,
            saturation: 0,
            opacity: 1,
            min: 0,
            max: 10,
            number: 1
        };
    }
    componentDidMount() {
        this.setState({ number: this.generateNumber(this.state.min, this.state.max) })
    }

    minChange = (event) => {
        this.setState({ min: event.target.value })
    }

    maxChange = (event) => {
        this.setState({ max: event.target.value })
    }

    generateNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    getInputs = () => {
        if (this.state.min > this.state.max) {
            const minTemp = this.state.min
            const maxTemp = this.state.max
            this.setState(
                {
                    min: maxTemp,
                    max: minTemp
                }, () =>
                this.setState({
                    number: this.generateNumber(this.state.min, this.state.max)
                })
            );
        } else {
            this.setState({
                number: this.generateNumber(this.state.min, this.state.max)
            })
        }
    }

    render() {
        const { posts } = this.state;
        let aosDelay = 50;
        return (
            <div className="wrapper">

                {
                    posts.map(post => (
                        <div key={post.id} data-aos="fade-left" data-aos-delay={aosDelay + post.id * 50} className={post.class} align="start">
                            <img alt="some" className="inverse" src={post.image} />
                            <img alt="some" className="shade" src={post.image} />
                            <img alt="some" className="img" src={post.image} />

                        </div>

                    ))
                }
                <Display></Display>



            </div>
        );
    }
}


class Display extends Component {
    render() {
        return (
            <div className="fetching-box"></div>
        );
    }
}

export default GetInterferance;