import React from "react";
import classes from "./App.module.css";

const SelectColor = (props) => {
const handleWatchColor=()=>{
props.onSelectColor(props.colorWatches.imageUrl)

}

const divClass=`${classes.colorWatch} ${props.isActive ? classes.isActive:""}`
  return (
    <div className={divClass}>
      <img src={props.colorWatches.imageUrl} onClick={handleWatchColor} alt="Color Watches" />
    </div>
  );
};
export default SelectColor;
