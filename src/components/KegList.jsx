import React from "react";
import Keg from "./Keg"
import PropTypes from 'prop-types';




function KegList(props){
  var listStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    zIndex: '1',
  }
  return (
      <div style={listStyle}>

        {props.kegList.map((keg) =>
          <Keg name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alchoholcontent={keg.alchoholcontent}
            buyPint={keg.buyPint}
            currentRouterPath={props.currentRouterPath}
            key={keg.id} />
        )}
      </div>
    );
  }

  KegList.propTypes = {
    kegList: PropTypes.array,
    currentRouterPath: PropTypes.string,
    buyPint: PropTypes.func

  };

  export default KegList;
