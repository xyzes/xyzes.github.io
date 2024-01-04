import * as React from 'react';

const ContentCard = ({ children, title, imagePath, imageAlt, onClick }) => {

  return (
    <a className="content-card" onClick={onClick}>
      {imagePath &&
        <img src={imagePath} alt={imageAlt} className="project-thumbnail" />
      }
      <div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description-short">{children}</p>
      </div>
    </a>
  );
}

export default ContentCard;