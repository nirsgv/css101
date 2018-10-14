import React, { Component } from 'react';
import Slides from './components/Slides';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slideNum: 1,
            numOfSlides: 17,
            preloaderMounted: true
        };
    }
    parentTimer = () => {
        this.setState({preloaderMounted:false});
    };
    setSlideNum(direction) {
        if (direction==='prev'){
            if(this.state.slideNum>1){
            this.state.preloaderMounted===false && this.setState({preloaderMounted:true});
            console.log('prev');
                this.setState({slideNum:this.state.slideNum-1})
            }
        }
        else if (direction==='next'){
            if(this.state.slideNum<this.state.numOfSlides){
            this.state.preloaderMounted===false && this.setState({preloaderMounted:true});
            console.log('next');
                this.setState({slideNum:this.state.slideNum+1})
            }
        };
    }
    presentPagination(){
        return `Slide: ${this.state.slideNum} / ${this.state.numOfSlides}`
    }
  render() {
    return (
      <div className="App">
        <header className="presentation-header hor-pad">
            css-101 selectors & specificity
        </header>
        <main className="main hor-pad">
            <Slides slideNum={this.state.slideNum} parentTimer={this.parentTimer} preloaderMounted={this.state.preloaderMounted}/>
        </main>
        <footer className="footer">
            <div className="pagination">
                {this.presentPagination()}
            </div>
            <nav>
                <button id="prev-slide" className="button prev" onClick={()=>{this.setSlideNum('prev')}}>prev</button>
                <button id="next-slide" className="button next" onClick={()=>{this.setSlideNum('next')}}>next</button>
            </nav>
        </footer>
      </div>
    );
  }
}

export default App;
