import gif from './../images/call-me.gif';
import './../css/App.css';

export default function Contact() {
  return (
    <div className="App contact">
      <header className="App-header">
        <img src={gif} className="Call-gif" alt="gif" />
        <p>
          <strong>My phone:</strong> (555) 555 555 <span id="bull">&bull;</span> <strong>My email:</strong> best@designer.ca
        </p>
      </header>
    </div>

  );
}
