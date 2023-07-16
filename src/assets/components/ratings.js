import { useState } from 'react';

function Ratings(props){  
    const {ratingNumber} = props;     
    // console.log(state);
  
    const[clicked, setClicked] = useState(false);
    function changeState(){
        setClicked(!clicked);
    }
        
    return(  
        <>
        {
        clicked ? <div className='circle rating onclick' onClick={changeState}><p style={{opacity:'1'}}>{ratingNumber}</p></div>
        :
        <div className='circle rating' onClick={changeState}><p>{ratingNumber}</p></div>
        }     
        </>     
    )   

} 
export default Ratings;