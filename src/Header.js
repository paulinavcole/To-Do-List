import React from 'react';

const Header = ({ toUpperCase })=> {
    let title = 'To Do List';
    return (
      <h1>{  toUpperCase ? title.toUpperCase(): title }</h1>
    );
  }
  
  export default Header;