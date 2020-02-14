import React from "react";
import Keg from "./Keg"

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


function KegList(){
  var listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }
  return (
      <div style={listStyle}>

        {masterKegList.map((keg, index) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alchoholcontent={keg.alchoholcontent}
            availablepints={keg.availablepints} />
        )}
      </div>
    );
  }

  export default KegList;
