import React from 'react';
import Navbar from './Navbar';


function Layaut (props){
    return (
<React.Fragment>
         <Navbar />
         {props.children}
  </React.Fragment> )
}

export default Layaut;