import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.scss';

function MenuItem({ title, imageUrl, ImageSize, linkUrl }) {
  const navigate = useNavigate();

  return (
    // Create clickable (navigate to corresponding page) menu item component.
    <div
      className={`${ImageSize} menu-item`}
      onClick={() => navigate(`${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
}

export default MenuItem;
