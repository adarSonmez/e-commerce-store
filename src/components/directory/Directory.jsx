import React, { useState } from 'react';
import MenuItem from '../menu-item/MenuItem';
import { SECTIONS_DATA } from './section.data';
import './Directory.scss';

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
