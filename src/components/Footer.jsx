import React from 'react';
let curretYear = new Date().getFullYear();
function Footer(){
    return( 
    <footer>
        <p >Copyright ©  {curretYear}</p>
    </footer>
    )
}
export default Footer;