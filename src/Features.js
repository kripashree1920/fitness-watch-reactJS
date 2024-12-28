import React from "react";
import classes from "./App.module.css"
const Features =(props)=>{

    const handleFeatureSelection =(e)=>{
        props.onBtnCLick(e?.target?.innerText)
    }
const divClass =`${classes.featureBtns} ${props.isFeatureActive ? classes.activeBtn:""}`
    return(
        <div className={classes.fBtns}>
            <button className={divClass} onClick={handleFeatureSelection}>{props.featureList}</button>
        </div>
    )
}

export default Features;
