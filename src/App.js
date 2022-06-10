import './Style.css';
import './App.css';
import imageInSrc from './imageInSrc.jpg';


function App() {
  return (
    <>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">CHITO'S CHECKPOINT</h1>
        <br />
        <img src={imageInSrc} alt="bag" />
        <br />
        <img src="imageInPublic.jpg" alt="cup" />
      </div>
        <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4"/> 
        </video>
    </>
  );
}

export default App;
