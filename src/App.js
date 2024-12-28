import classes from "./App.module.css";
import amazonlogo from "./assets/amazon-logo.png";
import ProductData from "./ProductData";
import React, { useEffect, useState } from "react";
import SelectColor from "./SelectColor";
import Features from "./Features";

function App() {
  const [selectedcolor, setSelectedColor] = useState(
    "https://imgur.com/iOeUBV7.png"
  );
  const handleSelectColor = (imageUrl) => {
    setSelectedColor(imageUrl);
  };
  const [selectFeature, setSelectedFeature] = useState(null);
  const [isActiveFeature, setActiveFeature]= useState(null)
  const [time, setTime] = useState(null);

  useEffect(() => {
    const updatedTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setTime(`${hours}:${mins}`);
    };
    updatedTime();

    const timer = setInterval(updatedTime, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isActiveFeature === "Time") {
      setSelectedFeature(time);
    }
  }, [time, isActiveFeature]);

  const handleFeaturebtn = (name) => {
    setActiveFeature(name)
    if (name !== "Time") {
      setSelectedFeature('78');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.Topbar}>
          <img src={amazonlogo} alt="Amazon Logo" />
        </nav>
      </header>

      <div>

        <div className={classes.MainContainer}>
        <div className={classes.showMob}>
            <h1>{ProductData?.title}</h1>
            <h3 className={classes.Description}>{ProductData?.description}</h3>
            </div>

          <div className={classes.ProductImg}>
            <img src={selectedcolor} alt="Black strap watch" />
            <div className={classes.featureSelected}>
              { isActiveFeature ==='Heart Rate'?
              <i className="fa-solid fa-heart-pulse" />:null
              }
              <p>{selectFeature}</p>
              </div>
          </div>

          <div className={classes.ProductData}>
            <div className={classes.showWeb}>
            <h1>{ProductData?.title}</h1>
            <h3 className={classes.Description}>{ProductData?.description}</h3>
            </div>
            <div>
              <h1 className={classes.heading}>Select Color</h1>
              <div className={classes.watchesList}>
                {ProductData?.colorOptions?.map((color, index) => {
                  return (
                    <SelectColor
                      isActive={selectedcolor === color?.imageUrl}
                      colorWatches={color}
                      key={index}
                      onSelectColor={handleSelectColor}
                    />
                  );
                })}
              </div>

              <div className={classes.feature}>
                <h1 className={classes.heading}>Features</h1>
                <div className={classes.featureList}>
                  {ProductData?.featureList?.map((feature, index) => {
                    return (
                      <Features
                        key={index}
                        featureList={feature}
                        onBtnCLick={() => handleFeaturebtn(feature)}
                        isFeatureActive={isActiveFeature === feature}
                      />
                    );
                  })}
                </div>
              </div>

              <div className={classes.buyNowBtn}>
                <button className={classes.buyBtn}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
