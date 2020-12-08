import React, {useState, useEffect} from 'react'

import './home.css'
import PicOfDay from '../services/picOfDay'
import DateUtils from '../utils/date'

function Home() {

    var today = new Date();

    const [picOfDayData, setPicOfDayData] = useState({});
    const [toggleText, setToggleText] = useState(false);
    const [currentDay, setCurrentDay] = useState(today);
    
    const dateUtils = new DateUtils();

    useEffect(() => {

        var formatedDate =dateUtils.getFormatedDate(currentDay);

        new PicOfDay().fetchDate(formatedDate).then((data) => {
            setPicOfDayData(data);
        });
    }, []);

    // Inline styling to insert variables.
    const picContainer = {backgroundImage: "url("+picOfDayData.url+")"}

    function handleText() {
        setToggleText(!toggleText);
    }
 


    return (
        <div className="Pic-of-day" style={picContainer}>
            <p onClick={handleText} className="ToggleBtn">Click here to hide the text!</p>
            <div className="Filter"></div>
            <div className="PodFunctionalities">
                <img className="arrow" onClick={()=>  console.log(dateUtils.subDateCall(currentDay))   } src="images/left_arrow.svg" alt="navigation left arrow" />
                {toggleText ?

                    <div className="Explanation">
                    <h3> {picOfDayData.title} </h3>
                    <p> {picOfDayData.explanation} </p>
                    <p className="Date"> {picOfDayData.date} </p>
                </div>
:                <div></div> }
                <img className="arrow" onClick={new PicOfDay().addDateCall} src="images/right_arrow.svg" alt="navigation right arrow" />
            </div>
        </div>
    )
}


export default Home;