import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.scss';

// Create clickable (navigate to corresponding page) menu item component.
function MenuItem({ title, imageUrl, ImageSize, linkUrl }) {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(linkUrl);

  return (
    <div className={`${ImageSize} menu-item`} onClick={onNavigateHandler}>
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
