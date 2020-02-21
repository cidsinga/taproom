import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _name = null;
  let _brand = null;
  let _price = null;
  let _alchoholcontent = null;
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: _name.value, brand: _brand.value, price: _price.value, alchoholcontent: _alchoholcontent.value, id: v4()});
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _alchoholcontent.value = '';


  }
  return (
    <div>
      <form>
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brand'
          placeholder='Brand'/>
        <input
          type='text'
          id='price'
          placeholder='Enter Price per Pint'/>
          <input
          type='text'
          id='alchoholcontent'
          placeholder='Alchohol % by Vol'/>
        <button type='submit'>Get It!</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
