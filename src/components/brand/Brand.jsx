import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';
import { useLocation } from 'react-router-dom';


const Brand = () => {

  let location = useLocation();

  if(location.pathname === '/cart'){
    return<></>
  }
  if(location.pathname === '/cart/CartPart2'){
    return<></>
  }
  if(location.pathname === '/users/ArtistLoginTo'){ return<></> }
  if(location.pathname === '/users/Register'){ return<></> }
  if(location.pathname === '/users/BuyLogin'){ return<></> }
  if(location.pathname === '/users/SellRegister'){ return<></> }
  if(location.pathname === '/users/SellLogin'){ return<></> }


  return(
    <div className="gpt3__brand section__padding">
    <div>
      <img src={google} />
    </div>
    <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
  )
}
  

export default Brand;
