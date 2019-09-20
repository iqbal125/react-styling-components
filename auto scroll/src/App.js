import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if(window.scrollY > 20 && this.state.scrolled === false ) {
        window.scrollTo({top: 500, left: 500, behavior: 'smooth'})
        this.setState({scrolled: true})
      }
      // else if(window.scrollY > 100 && window.scrollY < 600  ) {
      //   console.log('red')
      // }
      // else if(window.scrollY > 600 && window.scrollY < 1100  ) {
      //   console.log('green')
      //   console.log(window.scrollY)
      //   console.log(window.screen.height)
      // }
      // else if(window.scrollY > 1100 && window.scrollY < 1600  ) {
      //   console.log('yellow')
      //   console.log(window.scrollY)
      // }
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
        <div style={{height: '500px', backgroundColor: 'green'}}>
        </div>
        <div style={{height: '500px', backgroundColor: 'yellow'}}>
        </div>
      </div>
    );
  }
}

export default App;
