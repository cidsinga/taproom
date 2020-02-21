import React from "react";
import Keg from "./Keg"
import PropTypes from 'prop-types';


function KegList(props){
  var listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }
  return (
      <div style={listStyle}>

        {props.kegList.map((keg) =>
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
