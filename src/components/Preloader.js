import React, { Component } from 'react';



const Preloader = ({parentTimer}) => {
    return (
    <div className="preloader-wrap wrap-animate">
          <div className="preloader animate " onAnimationEnd={parentTimer}>
              <h2>
              css<br/>
              is<br/>
              awesome
              </h2>
          </div>
      </div>
    );
};

export default Preloader;
