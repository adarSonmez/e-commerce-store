import React, { Component, useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './Directory.scss';
import { SECTIONS_DATA } from './section.data';

function Directory() {
  const [sections, setSection] = useState(SECTIONS_DATA);

  // Display each menu item (Iterate through sections).
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Directory;
