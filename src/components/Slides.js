import React, { Component } from 'react';
import ReactHtmlParserfrom from 'react-html-parser';

const contentSwitcher = (slideNum) => {
    let content;

    switch(slideNum) {
        case 1:
            content = `
            <section class="content center-all-children center-vertically">
                <h1>CSS101</h1>
                <h2>Specificity & Selectors</h2>
            </section>
            `;
            break;
        case 2:
            content = `
            <section class="content">
                <h1>Other</h1>
                <h2>Specificity & Selectors</h2>
            </section>
            `;
            break;
        default:
            content = `
            <section class="content">
                <h1>CSS101</h1>
                <h2>Specificity & Selectors</h2>
            </section>
            `;
    }

    return content;
}


const renderSlideNum = (slideNum) => {
    return ReactHtmlParserfrom(contentSwitcher(slideNum));
};

const Slides = ({slideNum}) => {
    return (
      <div className="slides">
          {renderSlideNum(slideNum)}
      </div>
    );
};

export default Slides;
