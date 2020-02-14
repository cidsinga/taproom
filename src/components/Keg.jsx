import React from "react";
import PropTypes from "prop-types";


function Keg(props){
  var kegStyle = {
    textAlign: 'center',
    textDecoration: 'underline',
  }
  return (
    <div style={kegStyle}>
    <h3>{props.brand} - {props.name}</h3>
    <p><em>${props.price}/pint</em></p>
    <p><em>{props.alchoholcontent}% ABV</em></p>
    <hr/>
    </div>

  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alchoholcontent: PropTypes.string.isRequired,
  availablepints: PropTypes.number.isRequired,


};


export default Keg;
