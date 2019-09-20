import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      last_scroll: 0,
      cur_scroll: 0,
      counter: 0,
      show_header: true,
      scrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (e) => {
      if(this.state.counter % 5 === 0) {
        this.setState({cur_scroll: window.scrollY,
                       last_scroll: window.scrollY - this.state.cur_scroll
                       })
        console.log(window.scrollY)
        console.log(this.state.cur_scroll)
        console.log(this.state.last_scroll)
        if(this.state.last_scroll < 0 ) {
          this.setState({show_header: true})
        }
        else {
          this.setState({show_header: false})
        }
        this.setState({counter: this.state.counter + 1})
      } else {
        this.setState({counter: this.state.counter + 1})
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll')
  }


  render() {
    return (
      <div>
          <ul className={!this.state.show_header ? "hide" : "show"}>
            <li>Home</li>
            <li>News</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        <div style={{height: '100px'}}>
        </div>
        <div style={{height: '500px', backgroundColor: 'red'}}>
        </div>
        <div style={{height: '500px', backgroundColor: 'red'}}>
        </div>
      </div>
    );
  }
}

export default App;
