import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false,
      animate: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 20 && this.state.scrolled === false ) {
        window.scrollTo({top: 200, left: 200, behavior: 'smooth'})
        this.setState({scrolled: true, animate: true})
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }


  render() {
    return (
      <div>
        <div style={{height: '100px'}}>
        </div>
        <div style={{height: '500px', backgroundColor: 'red'}}>
        </div>
        <div className={this.state.animate ? "animateUp" : null}>
        </div>
        <div style={{height: '500px', backgroundColor: 'red'}}>
        </div>
      </div>
    );
  }
}

export default App;
