
import './App.css';
import Image1 from "./image1.jpg"

function App() {
  return (
    <div className="App">
      <h1>React JSX</h1>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 className="title red">Your name here</h1>

<br />
{/* imageInSrc */}
<img src={Image1} alt ='Image1' />

<br />
{/* imageInPublic */}
<img src="/image2.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
