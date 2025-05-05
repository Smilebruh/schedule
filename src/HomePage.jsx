import "./HomePage.css"

function HomePage(){
    return(     
        <div className="Parent">
            <nav>
            <button className="add">+</button>


            
            </nav>
            <main> 
                <div style={{backgroundColor : "red"}} className="item">1</div>
                <div style={{backgroundColor : "blue"}} className="item">2</div>
                <div style={{backgroundColor : "green"}} className="item">3</div>
                <div style={{backgroundColor : "yellow"}} className="item">4</div>
                <div style={{backgroundColor : "orange"}} className="item">5</div>
            </main>

        </div>
)
}

export default HomePage;