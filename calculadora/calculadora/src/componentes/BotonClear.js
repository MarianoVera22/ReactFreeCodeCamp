import React from 'react';
import '../estilos/BotonClear.css'

const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.borrar}>
    {props.children}
  </div>
);

export default BotonClear;