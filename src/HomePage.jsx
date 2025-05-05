import "./HomePage.css"
import {useState} from 'react';

const color = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    
]

function HomePage(){
    const [notes, addNotes] = useState([]);
    return(     
        <div className="Parent">
            <nav>
                <button onClick={()=>{
                    let colorindex = Math.floor(Math.random() * 5);
                    let currentdivcolor = color[colorindex];
                    let div = <div style={{backgroundColor:currentdivcolor}} className="item">hai</div>
                    let newarr = [...notes,div]
                    addNotes(newarr);
                }} className="add">+</button>  
            </nav>

            <main> 
                {notes}
                {/* <div style={{backgroundColor : "red"}} className="item">1</div>
                <div style={{backgroundColor : "blue"}} className="item">2</div>
                <div style={{backgroundColor : "green"}} className="item">3</div>
                <div style={{backgroundColor : "yellow"}} className="item">4</div>
                <div style={{backgroundColor : "orange"}} className="item">5</div> */}
            </main>

        </div>
)
}

export default HomePage;