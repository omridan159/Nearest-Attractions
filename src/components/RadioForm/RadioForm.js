import React from 'react';
import './RadioForm.css';

const RadioForm = ({
   handleRadio,
   attractionsTypeList,
   selectedAttractionType,
}) => {
   return (
      <div className='form-wrapper'>
         <div onChange={handleRadio} className='radio-form'>
            {attractionsTypeList.map((attraction) => {
               return (
                  <div className='radio-wrapper' key={attraction} dir='rtl'>
                     <label className='radio-label'>
                        <input
                           type='radio'
                           readOnly
                           name={attraction}
                           value={attraction}
                           checked={attraction === selectedAttractionType}
                        />
                        <span>{attraction}</span>
                     </label>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default RadioForm;
