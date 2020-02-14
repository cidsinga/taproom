import React from 'react';

function NewTicketForm(){
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

export default NewTicketForm;
