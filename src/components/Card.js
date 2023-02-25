import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div>
      {props.projects.map(item => (
        <div className="card" style={cardStyle}>
          <img
            className="card-img-top"
            src={item.image}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">Name: {item.name}</h5>
            <p className="card-text">Description: {item.description}</p>
            <a href={item.repo} className="btn btn-primary">
              VIEW REPO
            </a>
            <a href={item.live} className="btn btn-primary">
              VIEW LIVE
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}