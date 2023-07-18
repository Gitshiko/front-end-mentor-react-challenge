// import logo from './logo.svg';
import './App.css';
//import Ratings from './assets/components/ratings';
import Image from './assets/components/image';
import { useState } from 'react';
// import DisplayRating from './assets/components/displayRating';


function App() {
  const[modalDisplay, setModalDisplay] = useState(false);
  
  function changeDisplay(){
    setModalDisplay(true);  
  };

  const [selectedRating,setSelectedRating] = useState('')
  const ratingArr = [1, 2, 3, 4, 5];  
 

  // function changeState(e){
  //   let buttons = document.querySelectorAll('.circle')
  //   buttons.forEach((button) => {
  //     if(button.classList.contains('onclick')){
  //       button.classList.remove('onclick')
  //     }
  //   })
  //   console.log(e.target.innerHTML);
  //   e.target.classList.add('onclick');
  //   setSelectedRating(e.target.innerHTML);
  // }
  function changeState(e){
    console.log(e.target.innerHTML);
    setSelectedRating(parseInt(e.target.innerHTML));
    console.log(selectedRating);
 }


  console.log(selectedRating); 

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
            { ratingArr.map((item, index) => { return (   
            <div key={index} onClick={(e) => changeState(e)} className= { 'circle rating'}>{item}</div>
            )
            })
            }            
          </div>  */}

          <div className='rating-container'>  
            { ratingArr.map((item, index) => { return (
   
            <div key={index} onClick={(e) => changeState(e)} className= { 'circle rating' + ((item) === selectedRating ? ' onclick' : '')}><p>{item}</p></div>
            )
            })
            }            
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
            <p>You selected {selectedRating} out of 5</p>
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
