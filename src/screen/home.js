import React, {useState, useEffect} from 'react'

import './home.css'
import PicOfDay from '../services/picOfDay'

function Home() {

    const [picOfDayData, setPicOfDayData] = useState({});
    const [toogleText, setToggleText] = useState(false);
    
    useEffect(() => {
        new PicOfDay().componentDidMount().then((data) => {
            setPicOfDayData(data);
            console.log(data);
        });
    }, []);

    // Inline styling to insert variables.
    const picContainer = {backgroundImage: "url("+picOfDayData.url+")"}

    function handleText() {
        setToggleText(!toogleText);
        console.log(toogleText);
    }

    return (
        <div className="Pic-of-day" style={picContainer}>
            <p onClick={handleText} className="ToggleBtn">Click here to hide the text!</p>
            <div className="Filter"></div>
            <div className="PodFunctionalities">
                <img className="arrow" onClick={new PicOfDay().subDateCall} src="../images/left_arrow.svg" alt="navigation left arrow" />
                {toogleText ?

                    <div className="Explanation">
                    <h3> {picOfDayData.title} </h3>
                    <p> {picOfDayData.explanation} </p>
                    <p className="Date"> {picOfDayData.date} </p>
                </div>
:                <div></div> }
                <img className="arrow" onClick={new PicOfDay().addDateCall} src="./right_arrow.svg" alt="navigation right arrow" />
            </div>
        </div>
    )
}


export default Home;