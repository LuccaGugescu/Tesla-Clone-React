import React from 'react'
import Header from '../header/Header';
import Item from '../item/Item';
import Accessories from '../../assets/Desktop-Accessories.jpg';
import ModelS from '../../assets/Desktop-ModelS.jpeg';
import Model3 from '../../assets/Desktop-Model3.jpeg';
import ModelX from '../../assets/Desktop-ModelX.jpeg';
import ModelY from '../../assets/Desktop-ModelY.jpeg';
import SolarPanels from '../../assets/Desktop-SolarPanels.jpeg';
import SolarRoof from '../../assets/Desktop-SolarRoof.jpeg';
import './App.css';


function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__itemsContainer">
                <Item 
                  title="Solar for Existing Roofs"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={SolarPanels}
                  leftBtnTxt="ORDER NOW"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  first
                />
                

                <Item 
                  title="Model S"
                  desc="$72,990"
                  descLink=""
                  backgroundImg={ModelS}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  
                />

                <Item 
                  title="Model 3"
                  desc="$30,190"
                  descLink=""
                  backgroundImg={Model3}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  
                />
                <Item 
                  title="Model X"
                  desc="$83,190"
                  descLink=""
                  backgroundImg={ModelX}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  
                />
                <Item 
                  title="Model Y"
                  desc="$34,190"
                  descLink=""
                  backgroundImg={ModelY}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  
                />

                <Item 
                  title="SolarRoof"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={SolarRoof}
                  leftBtnTxt="ORDER NOW"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                />

                <Item 
                  title="Accessories"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={Accessories}
                  leftBtnTxt="ORDER NOW"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                />
            </div>
            {/*item => snapping */}
        </div>
    )
}

export default App
