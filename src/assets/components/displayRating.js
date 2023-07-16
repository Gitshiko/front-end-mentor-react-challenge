import Ratings from "./ratings";

function DisplayRating(props){
    const{clsName} = props;
    for (let i = 1; i < 6; i++) 
           
        return (<div className={clsName}>
            <Ratings ratingNumber={i}/>
        </div>)
          
      
}
     
  