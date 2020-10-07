import React from 'react';
import Time from './Time';
import FlashAutoIcon from '@material-ui/icons/FlashAuto';
function Header(){
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   const newDate = date.toLocaleDateString(undefined, options)
    return <header>
        
        <h1><FlashAutoIcon/> Keeper</h1>
<div className="timeDate"><h1><Time/>{newDate}</h1></div>
        
    </header>
}
export default Header;