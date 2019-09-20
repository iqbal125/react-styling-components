import React, {useState, useEffect} from 'react';

import './App.css';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'



const App = () => {
  const [state, setState] = useState({active_image: 0,
                                      images: [
                                        { pic: img1, id: 1, },
                                        { pic: img2, id: 2,  },
                                        { pic: img3, id: 3, } ] })



  return (
    <div className="App">
    <button onClick={() => console.log(state)}>Get State</button>
     <div className="container">
       <button  className="left-button"
                onClick={state.active_image > 0
                                ? () => setState({...state,
                                          active_image: state.active_image - 1,
                                           })
                                : null
                             }
                            >
         Right
       </button>
     {console.log('gggg')}
       <button  className="right-button"
                onClick={state.active_image < state.images.length - 1
                                ? () => setState({...state,
                                          active_image: state.active_image + 1,
                                           })
                                : null
                             }
                          >
         Left
       </button>
      <div>
      {state.images.map((image, index) =>
        index === state.active_image
          ? <img src={image.pic}
               key={image.id}
               width="100%"
               height="300px"
               className="active-slide"
                />
          : null
        )
      }
      </div>
      <div>
      {state.images.map((image, index) =>
        <button key={image.id} onClick={() => setState({...state,
                                                        active_image: index,
                                                     })}>
          {image.id}
        </button>
       )
      }
      </div>
     </div>
    </div>
  );
}

export default App;
