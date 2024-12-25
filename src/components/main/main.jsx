import { Component } from "react";

import ornament from "../../assets/imgs/doppi-ornament.png"
import retry from "../../assets/imgs/retry.svg";
import "./main.scss";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    componentDidMount(){
        const savedCount = localStorage.getItem("counter"); 
        if(savedCount){
            this.setState({ counter: parseInt(savedCount, 10) }); 
        }
    }
    
    saveCountToLocalStorage = (newCount) => {
        localStorage.setItem("count", newCount);
    };

    onIncrement = () => {
        this.setState(
            (prevState) => ({ counter: prevState.counter + 1 }),
            () => localStorage.setItem("counter", this.state.counter)
        )
    }

    onReset = () => {
        this.setState({counter: 0}, () => localStorage.setItem("counter", 0));
    }

    render() {
        return (
            <div className="main">
                <div className="ornament">
                    <img src={ornament}></img>
                </div>

                {/* Counter Codes */} 

                <div className="counter-container">
                    <div className="value">
                        <h1>{this.state.counter}</h1>
                    </div>
                    <div className="counter">
                        <button onClick={this.onIncrement} className="increment">+
                        </button>
                        <button className="reset" onClick={this.onReset} title="Sanoqni boshiga qaytarish">
                            <img src={retry}></img>
                        </button>
                    </div>
                </div>

                {/* Counter Codes End */}

                <div className="ornament">
                    <img src={ornament}></img>
                </div>
            </div>
        )
    }
}

export default Main;