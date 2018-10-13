import React, { Component } from 'react';
import ReactHtmlParserfrom from 'react-html-parser';
import Preloader from './Preloader';

import userAgentBodyPng from '../assets/user_agent_body.png';

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
                <h1>The cascade</h1>
                <ul>
                    <li><h3>The cascade is an algorithm that defines how to combine property values originating from different sources.  It lies at the core of CSS, as emphasized by the name: Cascading Style Sheets.</h3></li>
                    <li><h3>Though style sheets come from these different origins, they overlap in scope.  to make this work, the cascade algorithm defines how they interact.</h3></li>
                    <li><h3>The CSS cascade algorithm's job is to select CSS declarations (key-value pairs which define styles) in order to determine the correct values for CSS properties.  <br/> CSS declarations originate from different origins: the User-agent stylesheets (browser specific styles defined by browser vendors), the Author stylesheets (what we, the developers, write and work with), and the User stylesheets (which can be added to the browser individually by users).</h3></li>
                    <li><h3>The cascade takes three things into consideration: source order, specificity, and importance.</h3></li>
                    <li><h3>The cascade algorithm sorts declarations according to the following criteria, in descending order of priority:  Origin and Importance > Specificity > Order of Appearance</h3></li>
                </ul>
                
            </section>
            `;
            break;
        case 3:
            content = `
            <section class="content">
                <h1>User agent stylesheet</h1>
                <ul>
                    <li><h3>Open a new tab in your browser and type ‘about:blank’ in the address bar.</h3></li>
                    <li><h3>Open inspector and inspect the body.</h3></li>
                    <li><img class="userAgentBodyPng" alt="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjQAAACmCAIAAABC2II1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlEQTk3Mjc5QzZERDExRTg5RkQxREI3NkNCQUYxMjYxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlEQTk3MjdBQzZERDExRTg5RkQxREI3NkNCQUYxMjYxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OURBOTcyNzdDNkREMTFFODlGRDFEQjc2Q0JBRjEyNjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OURBOTcyNzhDNkREMTFFODlGRDFEQjc2Q0JBRjEyNjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5110mLAAAvXUlEQVR42uyd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"></li>
                    <li><h3>This style declaration cascades from the 'user agent stylesheet' and may be different according to browser vendor.</h3></li>
                    <li><h3>User agent style sheets are overridden by anything that you set in your own stylesheet.</h3></li>
                    <li><h3>They are just the rock bottom: in the absence of any style sheets provided by the page or by the user, the browser still has to render the content somehow, and the user agent stylesheet just describes this.</h3></li>
                    <li><h2>From the spec:</h2>
<blockquote>A user agent's default style sheet should present the elements of the document language in ways that satisfy general presentation expectations for the document language.</blockquote>
</li>
                </ul>
                
            </section>
            `;
            break;
        case 4:
            content = `
            <section class="content">
            <div class="main-content">
                <h1>Reasoning for and against user agent stylesheet</h1>
                <h2>Pros</h2>
                <ul>
                    <li><h3>As well exemplified in <a target="_blank" href="https://motherfuckingwebsite.com/">motherfuckingwebsite.com</a>, a well semantically written html document, additional to it’s semantics, does provide some design and a smooth user experience.</h3></li>
                    <li><h3>"Good design is as little design as possible.”</h3></li>
                    <li><h3>Will essentially function the same across all browsers and devices.</h3></li>
                    <li><h3>Most easily overridden by our, self written - Author style sheets.</h3></li>
                </ul>
                <h2>Cons</h2>
                <ul>
                    <li><h3>As browsers aim to provide the best experience, and have a singular better look then others, they provide different base styles.</h3></li>
                    <li><h3>When defining our own styles to match our designs, we essentially want to have a unified look & feel for all browsers. We gain no benefit from different styles presented with different browsers.</h3></li>
                    <li><h3>We might encounter unexpected results when styles, not-defined in our own stylesheets are added to our design when rendered.</h3></li>
                </ul>
            </div>
            <div class="secondary-content">
                <h5 class="relevant-links-title">Relevant-links:</h5>
                <h6 class="relevant-links-links"><a target="_blank" href="https://motherfuckingwebsite.com/">motherfuckingwebsite</a></h6>
                <h6 class="relevant-links-links"><a target="_blank" href="https://brutalist-web.design/?mc_cid=5d7b376920&mc_eid=8d920332b5">brutalist-web</a></h6>
            </div>
            </section>
            `;
            break;
        case 5:
            content = `
            <section class="content">
            <div class="main-content">
                <h1>CSS reset</h1>
                <ul>
                    <li><h3>User agent stylesheets gave birth to reset / normalise stylesheets.</h3></li>
                    <li><h3>Aims at rendering elements in a consistent manner across different browsers.</h3></li>
                    <li><h3>To be linked to our documents or have individual declarations added to our stylesheets.</h3></li>
                    <li><h3>The idea of a CSS reset is to deal with styling inconsistencies across browsers. For example:</h3></li>
                    <li><h3><button> I am a button inserted into a page with no other styling whatsoever other to a reset. If i have not been reset- Chrome applies padding: 2px 6px 3px; - Firefox applies padding: 0 8px;. A CSS reset would apply new padding to that element, so that all browsers are consistent about what they apply.</button></h3></li>
                    <li><h3>Example ‘reset’ declaration:</h3></li>
                    <li><h3>html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt{
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}</h3></li>
                </ul>
            </div>
            <div class="secondary-content">
                <h5 class="relevant-links-title">Relevant-links:</h5>
                <h6 class="relevant-links-links"><a target="_blank" href="https://necolas.github.io/normalize.css/">normalize.css</a></h6>
                <h6 class="relevant-links-links"><a target="_blank" href="https://cssreset.com/scripts/eric-meyer-reset-css/">reset.css</a></h6>
            </div>
            </section>
            `;
            break;
        case 6:
            content = `
            <section class="content">
                <h1>Author stylesheets</h1>
                <ul>
                    <li><h3>The author is the person who develops the website - you!</h3></li>
                    <li><h3>Those are the styles we are adding and changing.</h3></li>
                    <li><h3>As soon as you apply a basic style sheet or an inline style to a page, you have added what is referred to as an "author style sheet". Everything you do, from choosing fonts, colors and laying out pages in CSS is done using author style sheets.</h3></li>
                    <li><h3>3 ways for document to consume our own written styles:</h3></li>
                    <ul class="inner-bulleted">
                        <li><h3>External style sheet (link tag)</h3></li>
                        <li><h3>Internal style sheet (style tag)</h3></li>
                        <li><h3>Inline style (style attribute)</h3></li>
                    </ul>
                    <li><h3>Inline styles are more specific than styles in style tags, <br/ >which are more specific than stuff in stylesheets.</h3></li>
                    <li><h3>Important note: Declarations (properties with values) which are more specific are the ones being applied. </h3></li>
                </ul>
                
            </section>
            `;
            break;
        case 7:
            content = `
            
            <section class="content">
            <div class="main-content">
                <h1>Specificity</h1>
                <ul>
                    <li><h3>Specificity is basically a measure of how specific a selector is — </h3></li>
                    <li><h3>Element selectors (Targeted by a tag name like ‘button’) have low specificity.</h3></li>
                    <li><h3>Class and attribute selectors (Targeted by a dot followed by a class like ‘.button’ or an attribute name inside square brackets like [button]) have a higher specificity.</h3></li>
                    <li><h3>ID selectors (Targeted by a hashtag followed by an id name like ‘#button’) have an even higher specificity.</h3></li>
                    <li><h2>Calculating a selector specificity</h2></li>
                    <li><h3>The amount of specificity a selector has is measured using three different values, <br/>which can be thought of as hundreds, tens and ones — three single digits in three columns.</h3></li>
                <li>
                    <table style="width:100%">
                    <tbody>
                      <tr>
                        <th>Selector</th>
                        <th>Calculation</th>
                        <th>Score</th>
                      </tr>
                      <tr>
                        <td>*</td>
                        <td>a=0 b=0 c=0 </td> 
                        <td>specificity = 000</td>
                      </tr>
                      <tr>
                        <td>LI</td>
                        <td>a=0 b=0 c=1</td> 
                        <td>specificity = 001</td>
                      </tr>
                      <tr>
                        <td>UL LI</td>
                        <td>a=0 b=0 c=2</td> 
                        <td>specificity = 002</td>
                      </tr>
                       <tr>
                        <td>UL OL+LI</td>
                        <td>a=0 b=0 c=3</td> 
                        <td>specificity = 003</td>
                      </tr>
                       <tr>
                        <td>UL LI</td>
                        <td>a=0 b=0 c=2</td> 
                        <td>specificity = 002</td>
                      </tr>
                       <tr>
                        <td>H1 + *[REL=up]</td>
                        <td>a=0 b=1 c=1</td> 
                        <td>specificity = 012</td>
                      </tr>
                       <tr>
                        <td>UL OL LI.red</td>
                        <td>a=0 b=1 c=3</td> 
                        <td>specificity = 013</td>
                      </tr>
                       <tr>
                        <td>LI.red.level</td>
                        <td>a=0 b=2 c=1</td> 
                        <td>specificity = 021</td>
                      </tr>
                       <tr>
                        <td>#x34y</td>
                        <td>a=1 b=0 c=0</td> 
                        <td>specificity = 100</td>
                      </tr>
                       <tr>
                        <td>#s12:not(FOO)</td>
                        <td>a=1 b=0 c=1</td> 
                        <td>specificity = 101</td>
                      </tr>
                      </tbody>
                    </table>
                    </li>
                </ul>
            </div>
             <div class="secondary-content">
                <h5 class="relevant-links-title">Relevant-links:</h5>
                <h6 class="relevant-links-links"><a target="_blank" href="https://specificity.keegan.st/">Specificity<br/>claculator</a></h6>
            </div>
            </section>
            `;
            break;
        case 8:
            content = `
            <section class="content">
                <h1>Order in specificity</h1>
                <h2>Question:</h2>
                <ul>
                    <li><h3>Given these classes:</h3></li>
                    <li><h3>.red {
                            color: red;
                            }
                            .blue {
                                color: blue;
                            }
                    </h3></li>
                    <li><h3>Which text-color would these following elements be?</h3></li>
                    <li><h3>element class="red blue" /element</h3></li>
                    <li><h3>element class="blue red" /element</h3></li>
                </ul>
            </section>
            `;
            break;
        case 9:
            content = `
            <section class="content">
                <h1>Order in specificity</h1>
                <h2>Answer:</h2>
                <ul>
                    <li><h3>Given these classes:</h3></li>
                    <li><h3>.red {
                            color: red;
                            }
                            .blue {
                                color: blue;
                            }
                    </h3></li>
                    <li><h3>All other things being equal, the last defined style is the one that’s used. (‘.blue’!)</h3></li>
                    <li><h3>The ‘red’ and ‘blue’ classes both have the same specificity, a value of 010.</h3></li>
                    <li><h3>The order of classes on an element doesn’t matter.</h3></li>
                </ul>
            </section>
            `;
            break;
        case 10:
            content = `
            <section class="content">
                <h1>Order in specificity</h1>
                <h2>Question:</h2>
                <ul>
                    <li><h3>Lets say these style declarations cannot change in order and we need to preserve line numbers as is, html markup cant change, we can only change first selector on line 1, and want all 'items' to have blue text-color.</h3></li>
                    <li><h3>element class="calm" /element</h3></li>
                    <li><h3>element class="red" /element</h3></li>
                    <li><h3>element class="calm red" /element</h3></li>

                    <li><h3>//line 1 <br/>
                            .calm {
                              color: blue;
                            }<br/>
                            //line 20 <br/>
                            .red {
                              color: red;
                            }
                    </h3></li>
                    <li><h3>How would you change the first selector?</h3></li>
                    <li><h3><iframe height='265' scrolling='no' title='Adding specificity' src='//codepen.io/nir83/embed/JmygQO/?height=265&theme-id=0&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/JmygQO/'>Adding specificity</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe></h3></li>
                </ul>
            </section>
            `;
            break;
            case 11:
            content = `
            <section class="content">
                <h1>Why to not use ‘!important’ ever (almost) ?</h1>
                <ul>
                    <li><h3>!important is a wildcard which wins specificity battles. Even against inline styles.</h3></li>
                    <li><h3>The only way to override is by using another !important rule, selected with higher specificity (or equal specificity later in the code).</h3></li>
                    <li><h3>This leads to endless use of the !important, to have changes in code, and is hard to remove as each instance of it’s use took care of a specificity problem (without solving it) and is… important.</h3></li>
                    <li><h3>The one exception where it might make sense to use !important:  on modifier classes that nudge and tweak style and might not always have the most specificity.</h3></li>
                    <li><h3><iframe height='248' scrolling='no' title='not bold: important!' src='//codepen.io/nir83/embed/JmygjX/?height=248&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/JmygjX/'>not bold: important!</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe></h3></li>
                </ul>
            </section>
            `;
            break;
        case 12:
            content = `
            <section class="content">
                <h1>To much specificity is bad by nature.</h1>
                <ul>
                    <li><h3>!important is considered a bad practice because it’s high specificity is hard to win over or to remove later from code.</h3></li>
                    <li><h3>This is true to high specificity in general.</h3></li>
                    <li><h3>ID’s have a high specificity value and should be avoided as well from selectors and are better to be kept for js use only.</h3></li>
                    <li><h3>Classnames and attributes are more ideal as they are specific enough to target all elements when used correctly.</h3></li>
                    <li><h3><iframe height='213' scrolling='no' title='not bold: important!' src='//codepen.io/nir83/embed/JmygjX/?height=213&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/JmygjX/'>not bold: important!</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe></h3></li>
                    <li><h3>Tags are too general, will target all elements and cause more overhead to the rendering engine.<br/> They can also be changed in markup with devastating effects to styling</h3></li>
                    <li><h3><iframe height='265' scrolling='no' title='changed markup missed the tag selector' src='//codepen.io/nir83/embed/MPvNZK/?height=265&theme-id=0&default-tab=css,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/MPvNZK/'>changed markup missed the tag selector</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe></h3></li>
                </ul>
            </section>
            `;
            break;
        case 13:
            content = `
            <section class="content">
                <h1>Inheritance</h1>
                <ul>
                    <li><h3>CSS inheritance works on a property by property basis.</h3></li>
                    <li><h3>When applied to an element in a document, a property with the value 'inherit' will use the same value as the parent element with that property.</h3></li>
                    <li><h3>Some properties are inherited by default and some are not.  the color property for instance is inherited by default. setting the color property value to initial will remove this behavior.</h3></li>
                    <li><h3><iframe height='265' scrolling='no' title='Inherit basics' src='//codepen.io/nir83/embed/XxROdY/?height=265&theme-id=0&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/XxROdY/'>Inherit basics</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.</iframe></h3></li>
                    <li><h3>You should check if a property is inherited by default or not. For instance the ‘display’ property: <a target="blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/display">mdn</a>  is not inherited (by default).</h3></li>
                    <li><h3>Using ‘inherit’ on a property is used to inherit it’s parent property value, not it’s parent actual value.</h3></li>
                    <li><h3>Inherited values can be misleading. Consider this example:</h3></li>
                    <li><h3><iframe height='265' scrolling='no' title='inherit pitfalls' src='//codepen.io/nir83/embed/JmNzRG/?height=265&theme-id=0&default-tab=html,result' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/nir83/pen/JmNzRG/'>inherit pitfalls</a> by nir.segev (<a href='https://codepen.io/nir83'>@nir83</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe></h3></li>
                </ul>
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
};


const renderSlideNum = (slideNum) => {
    return ReactHtmlParserfrom(contentSwitcher(slideNum));
};

const Slides = ({slideNum,parentTimer,preloaderMounted}) => {
    return (
      <div className="slides">
          {renderSlideNum(slideNum)}
          {preloaderMounted && <Preloader parentTimer={parentTimer} />}
      </div>
    );
};

export default Slides;
