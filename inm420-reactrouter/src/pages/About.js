import photo from './../images/me-photo.jpg';
import './../css/App.css';

export default function About() {
  return (
    <div className="App about">
      <header className="App-header">
        <img src={photo} className="Chris-photo" alt="photo" />
        <p>
          I love concept and narrative. The projects I create are always based on fundamental concepts elaborated through a process composed of research, analysis and creation of ideas. Conceptualization gives content to the projects making them stronger and more likely to be successful.
        </p>
      </header>
    </div>

  );
}
