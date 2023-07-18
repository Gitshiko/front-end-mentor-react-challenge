//import { useState } from 'react';

function Ratings(props){  
    let {ratingNumber, state, clickFunction} = props;

    console.log(state);
  
    // const[clicked, setClicked] = useState(false);
    // function changeState(){
    //     setClicked(!clicked);       
    // }
   

    // if (clicked === true) {
    //     state = ratingNumber;
    // } else {
    //     state = '';
    // }

    console.log(state);
          
    return(  
        <>
        {
        state ? <div className='circle rating onclick' onClick={clickFunction}><p style={{opacity:'1'}}>{ratingNumber}</p></div>
        :
        <div className='circle rating' onClick={clickFunction}><p>{ratingNumber}</p></div>
        }     
        </>     
    )   

} 
//export default Ratings;