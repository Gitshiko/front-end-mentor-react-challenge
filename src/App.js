// import logo from './logo.svg';
import './App.css';
import Ratings from './assets/components/ratings';
import Image from './assets/components/image';
import { useState } from 'react';
// import DisplayRating from './assets/components/displayRating';


function App() {
  const[modalDisplay, setModalDisplay] = useState(false);
  
  function changeDisplay(){
    setModalDisplay(true);  
  };

  // const[clicked, setClicked] = useState(false);
  // function changeBgState(){
  //   setClicked(!clicked);    
  // }
  
  const ratingArr = [];
  for(let i = 0; i < 5 ; i++){
    ratingArr[i] = {ratingNum: i + 1, bgState: false};
  }
  
  const ratingComponent  = [];
  // ratingArr.forEach((item)=>{
  //   ratingComponent.push(<Ratings ratingNumber={item.ratingNum} state={clicked} clickFunction={changeBgState}/>)
  // })
  ratingArr.forEach((item)=>{
    ratingComponent.push(<Ratings ratingNumber={item.ratingNum}/>)
  })
  
  console.log(ratingArr);  


  return (
    <div className="App">
      <div className='app-container'>
        <div className='normalView' style={modalDisplay ? {display:'none'} : {display:'flex'} }>

          <div className='star-container'>
            <div className='circle star'><span class="fa fa-star"></span></div>
          </div>

          <h1 className='heading'>How did we do?
          </h1>

          <div className='text'>
            <p>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </p>
          </div>  
   
          {/* <div className='rating-container'>
            {ratingArr.map(function(rating){
              return <Ratings ratingNumber= {rating.ratingNum} state={rating.bgState} clickFunction={changeBgState()} />
            })}
          </div>  */}

          <div className='rating-container'>  
            {ratingComponent}            
          </div> 
          
          <div className='button-container'>
            <button onClick={changeDisplay}>SUBMIT</button>
          </div>

        </div>

        <div className='modalView' style={modalDisplay ? {display:'flex'} : {display:'none'} }> 
                
          <div className='image'>
            <Image />           
          </div>

          <div className='capsule'>
            <p>You selected 4 out of 5</p>
          </div>

          <h1 className='thankuM'>Thank you!
          </h1>

          <div className='textM'>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
