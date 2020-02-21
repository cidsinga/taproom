import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  var kegStyle = {
    textAlign: 'center',
    textDecoration: 'underline',
  }
  const kegInformation =
    <div style={kegStyle}>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>${props.price}/pint</em></p>
      <p><em>{props.alchoholcontent}% ABV</em></p>
      <hr/>
    </div>
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {alert('hey, you just clicked the keg belonging to ' + props.name);}}>
          {kegInformation}
        </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alchoholcontent: PropTypes.string.isRequired,
  availablepints: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string


};


export default Keg;
