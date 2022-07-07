import React from 'react';
import { useSelector } from 'react-redux';

import MenuItem from '../menu-item/MenuItem';
import { selectDirectorySections } from '../../store/features/directory/directory.selectors';
import './Directory.scss';

// Display each menu item (Iterate through sections).
function Directory() {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
}

export default Directory;
