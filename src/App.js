import React from 'react';
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="card">
      <div className="top">
        <h1>Join our community</h1>
        <h3>30-day, hassle-free money back guarantee</h3>
        <p>
          Gain access to out full library of tutorials along with 
          expert code reviews. <br/> Perfect for any developers who are serious
          about honing their skills.
        </p>
        </div>

        <div className="bottom">
          <div className='left'>
            <h3>Monthly Subscription</h3>
            <h1> 
              $29 <span>per month</span>
            </h1>
            <p>
              Full access for less thean $1 a day
            </p>
            <button>Sign up</button>
          </div>

          <div className='right'> 
            <h3>Why us</h3> 
            <ul>
              <li>Tutorials by industry experts</li>
              <li>Peer & expert code review</li>
              <li>Coding exercises</li>
              <li>Access to our GitHub repos</li>
              <li>Community forum</li>
              <li>Flashcard Decks</li>
              <li>New videos every week</li>
            </ul> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
