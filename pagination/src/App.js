import React, {  useState } from 'react'
import './App.css';


const exampleItems = [...Array(100).keys()].map(i => "Item " + i);


const Pagination = props => {
  const [state, setState] = useState({current_page: 1,
                                      pages_slice: [1, 2, 3, 4, 5],
                                      initial_load: true,
                                      max_page: 10,
                                      items_per_page: 10,
                                      items_slice: [...exampleItems.slice(0, 10)],
                                      total_items: [...exampleItems]
                            })



  const page_change = (page) => {
    //variables to handle slicing items
    let indexOfLastItem = page * state.items_per_page;
    let indexOfFirstItem = indexOfLastItem - state.items_per_page;
    let currentItems = state.total_items.slice(indexOfFirstItem, indexOfLastItem);

    //variables for page change
    let next_page = page + 1
    let prev_page = page - 1

    //handles general page change
    if(page > 2 && page < state.max_page - 1) {
      setState({...state,
                current_page: page,
                pages_slice: [prev_page - 1,
                              prev_page,
                              page,
                              next_page,
                              next_page + 1],
                initial_load: false,
                items_slice: [...currentItems]
              })
     }
     if(page === 2 ) {
       setState({...state,
                 current_page: page,
                 pages_slice: [prev_page,
                               page,
                               next_page,
                               next_page + 1,
                               next_page + 2],
                 initial_load: false,
                 items_slice: [...currentItems]
               })
      }
     //handles use case for user to go back to first page from another page
     if(page === 1 && !state.initial_load) {
       setState({...state,
                 current_page: page,
                 pages_slice: [page,
                               next_page,
                               next_page + 1,
                               next_page + 2,
                               next_page + 3],
                 items_slice: [...currentItems]
            })
     }
     //handles last page change
     if(page === state.max_page) {
       setState({...state,
                 current_page: page,
                 pages_slice: [prev_page - 3,
                               prev_page - 2,
                               prev_page - 1,
                               prev_page,
                               page],
                 initial_load: false,
                 items_slice: [...currentItems]
               })
     }
     if(page === state.max_page - 1) {
       setState({...state,
                 current_page: page,
                 pages_slice: [prev_page - 2,
                               prev_page - 1,
                               prev_page,
                               page,
                               next_page],
                 initial_load: false,
                 items_slice: [...currentItems]
               })
     }

   }



  return (
    <div>
      <br />
      <div className="FlexRowMain">
        <button onClick={() => console.log(state)}> Get State </button>
      </div>
      <br />
      <br />
      <div className="FlexRowMain">
        <div className="FlexColumn">
            {state.items_slice.map((num) =>
                <div key={num}>
                  {num}
                </div>)}
         </div>
       </div>
       <br />
       <div className="FlexRowMain">
         <button onClick={() => page_change(1) }> First </button>
         <button onClick={() => page_change(state.current_page - 1) }> Prev </button>
            {state.pages_slice.map((page) =>
                <div
                  onClick={() => page_change(page)}
                  className={state.current_page === page
                                ? "pagination-active"
                                : "pagination-item" }
                  key={page}>
                    {page}
                 </div>
            )}
          <button onClick={() => page_change(state.current_page + 1)}> Next </button>
          <button onClick={() => page_change(state.max_page)}> Last </button>
        </div>
    </div>
  );
}



export default Pagination;
