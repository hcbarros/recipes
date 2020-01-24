import React from 'react';


export default function ArrowButton(props) {
    const { onClick } = props;
    return (
      <div
        className="arrowButton"
        onClick={onClick}
      >
        <i className="fa fa-long-arrow-right"></i>
      </div>
    );
}