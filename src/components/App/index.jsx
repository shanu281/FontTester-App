import React from "react";
import './style.css'
let fonts = ["Roboto", "Poppins", "Open Sans", "Georama", "Noto Sans JP", "Oswald", "Style Script", "Palette Mosaic", "Merriweather", "Crimson Pro", "Roboto", "Poppins"];

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            filteredSearch: fonts,
            fontSize: "30px",
            range: "30"
        };
    }
    handleSearch = (event) => { this.setState({ filteredSearch: event.target.value }) }
    handleChange = (event) => { this.setState({ message: event.target.value }) }
    handleSize = (event) => { this.setState({ fontSize: event.target.value }) }
    handleRange = (event) => { this.setState({ range: this.state.fontSize }) }
    render() {
        
        let allProducts = fonts.map((font) => {
            return (
                <div className="cards">
                    <h1 >{font}</h1>
                    <input type="text" id="textarea" style={{ fontFamily: font, fontSize: this.state.fontSize }} placeholder={this.state.message} />
                </div>)
        });

        let fontSizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
        return (
            <>
            
                <div className="header">
                    <center><h2>Font-Tester App</h2></center>
                    <input onChange={this.handleSearch} type="text" id="text" placeholder=" Search" />
                    <input onChange={this.handleChange} type="text" id="text" placeholder="Write text here..." />

                    {<select onChange={this.handleSize} name="fontSizes" id="fontSize">
                        {fontSizes.map(fontSize =>
                            <option value={`${fontSize}px`}>{fontSize}px</option>
                        )}
                    </select>}


                    <input onChange={this.handleRange} type="range" id="size" name="size" min="1" value={this.state.range} max="100" placeholder="size" />
                </div>
             
                <div className="card-container">
                    {
                        fonts.includes(this.state.filteredSearch) ?

                            <div className="cards">
                                <h1 >{this.state.filteredSearch}</h1>
                                <input type="text" id="textarea" style={{ fontFamily: this.state.filteredSearch, fontSize: "2rem" }} placeholder={this.state.message} />
                            </div> : allProducts
                    }
                </div>




            </>
        )
    }
}
export default App;