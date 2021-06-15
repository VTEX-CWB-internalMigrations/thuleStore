import React from "react"
import { useCssHandles } from "vtex.css-handles"
import logo from './logo.png'
import "./index.css"

const Amedigital = ({AmeBtn}) => {
  const handles = useCssHandles(CSS_HANDLES)

  return (
    <div className={`${handles.ametButtonContainer}`}>
    <AmeBtn />
    <div className={`${handles.ametButtonText}`}>Compre com <img src={logo} alt={"logo"}/>
     e receba até 10% de volta</div>
    </div>
  )

}

export default Amedigital

