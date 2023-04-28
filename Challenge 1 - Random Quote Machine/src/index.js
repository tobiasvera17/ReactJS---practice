import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const phrases = ["It is never too late to be what you might have been.","You can never cross the ocean until you have the courage to lose sight of the shore.", 
    "Strive not to be a success, but rather to be of value.", "You can’t use up creativity. The more you use, the more you have.", 
    "It does not matter how slowly you go as long as you do not stop.", "Happiness is not something readymade. It comes from your own actions.", 
    "Two roads diverged in a wood, and I-I took the one less traveled by, And that has made all the difference.", 
    "We become what we think about.", "If you do what you’ve always done, you’ll get what you’ve always gotten.", 
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you."
    ]
    
const authors = ["George Eliot", "Christopher Columbus", "Albert Einstein", "Maya Angelou", "Confucius", "Dalai Lama", 
    "Robert Frost", "Earl Nightingale", "Tony Robbins", "Jesus"]

const colors = ['#B2D3DB', '#A19DC4', "#E8B5D6", '#FFCCCC', '#FFE7CF', '#B6C7A7', '#FDE3FC', '#B4D4EC', '#F7EAE0', '#F3C0A1', 
'#F5D4E9','#D6D0F5', '#F8E3D4', '#BDD0EB', '#F9F4CF', '#B3DFB5', '#BAC3FE', '#F2CFFF', '#FCF2FD', '#FFFAF0']
  
    // https://www.schemecolor.com/soft-pastels-from-nature.php
    // https://www.schemecolor.com/moral-values.php
    // https://www.schemecolor.com/pastels-are-pretty.php
    // https://www.schemecolor.com/pastel-pink-baby-shower.php

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      phraseIndex:Math.floor(Math.random() * phrases.length),
      colorIndex: Math.floor(Math.random() * colors.length),
    }
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote() {
    const randomQuoute = Math.floor(Math.random() * phrases.length);
    const randomColor = Math.floor(Math.random() * colors.length); 
    this.setState({
      textStyle: 0
    })
    setTimeout(() =>{ this.setState({
      phraseIndex: randomQuoute,
      colorIndex: randomColor})
    }, 500);
    setTimeout(() =>{ 
      this.setState({textStyle:1})
    }, 1000);
  }

  render(){
    const bgStyle = {
      backgroundColor: colors[this.state.colorIndex],
      color: colors[this.state.colorIndex]
    };
    
    const buttonStyle = {
      backgroundColor: colors[this.state.colorIndex],
    };

    let tweet = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(phrases[this.state.phraseIndex]);

    return (
      <div>
        <div id="container" style={bgStyle}>
            <div id="quote-box">
                <div id="text">
                    <p style={{opacity:this.state.textStyle}}>{phrases[this.state.phraseIndex]}</p>
                </div>
                <div id="author">
                  <p style={{opacity:this.state.textStyle}}>{authors[this.state.phraseIndex]}</p>
                </div>
                <div id="buttons">
                    <a  id="tweet-quote" href={tweet} target='_blank'><button style={buttonStyle}><i className="fa-brands fa-twitter"></i></button></a>
                    <button id="new-quote" style={buttonStyle} onClick={this.newQuote}>New Quote</button>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
