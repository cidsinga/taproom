import React from "react";
import Keg from "./Keg"
import PropTypes from 'prop-types';

var masterKegList = [
  {
    name: "Deathbringer Stout",
    brand: "Shaxx's Swill",
    price: 6.00,
    alchoholcontent: 7,
    availablepints: 124,
  },
  {
    name: "Huckleberry Hef",
    brand: "Bad Omen Brewery",
    price: 5.00,
    alchoholcontent: 7,
    availablepints: 124,
  },
  {
    name: "Heros Burden",
    brand: "Omelon Brewing",
    price: 7.00,
    alchoholcontent: 7,
    availablepints: 124,
  },
]


function KegList(props){
  var listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }
  return (
      <div style={listStyle}>

        {props.KegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alchoholcontent={keg.alchoholcontent}
            availablepints={keg.availablepints} />
        )}
      </div>
    );
  }

  KegList.propTypes = {
    kegList: PropTypes.array
  };

  export default KegList;
