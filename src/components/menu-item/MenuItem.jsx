import React from "react";
import { withRouter } from 'react-router-dom';
import "./MenuItem.scss";

const MenuItem = ({ title, imageURL, size, history, linkURL, match }) => {
  return (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkURL}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
