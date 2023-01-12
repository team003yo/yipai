import React from 'react';
import  { Container, Dropdown, DropdownButton}  from  'react-bootstrap' ;
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import './artist.css';

const Artist = () => (
  <>  
  <div className="yipai__artist section__padding" id="home">
    <div className="yipai__artist-image">      
    </div>    
  </div>
  <Container>
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </DropdownButton>
  </Container>
    
  </>
);

export default Artist;
