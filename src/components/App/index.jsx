import React from "react";
import './style.css'
let fonts = ["Roboto", "Poppins", "Open Sans", "Georama", "Noto Sans JP", "Oswald", "Style Script", "Palette Mosaic", "Merriweather", "Crimson Pro", "Roboto", "Poppins"];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message : ""
        };
    }
handleChange =(event) => {this.setState({message : event.target.value})}
    render() {
        
        return (
            <>

                <div className="header">
                    <center><h2>Font-Tester App</h2></center>
                    <input type="text" id="search" placeholder={this.state.message}  />
                    <input  onChange={this.handleChange} type="text" id="text" placeholder="Write text here..."   />
                    <input type="range" id="size" name="size" min="1" step="40" max="100" placeholder="size" />
                </div>

                <div className="card-container">
                    {fonts.map((font) =>
                        <div className="cards">
                            <h1 >{font}</h1>
                            <input type="text" id="textarea" placeholder={this.state.message} />

                        </div>

                    )}
                </div>



            </>
        )
    }
}
export default App;