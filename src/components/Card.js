import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '25rem',
  };

  return (
    <div className = 'd-flex flex-wrap'>
      {props.projects.map(item => (
        <div className="card m-3" style={cardStyle}>
              <img
                  className="card-img-top"
                  src= {item.image}
            alt="Application Screenshot"
          />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <div className="d-flex justify-content-between">
                <a href={item.repo} className="btn btn-primary">
                VIEW REPO
                </a>
                <a href={item.live} className="btn btn-primary">
                VIEW LIVE
                </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}