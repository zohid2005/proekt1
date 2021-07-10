import logo from './logo.png';
import './App.css';

import Card from "./Card"

const data = [
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpv-magazine-usa.com%2F2020%2F05%2F19%2Fthe-future-of-cars-is-electric-but-how-soon-is-this-future%2F&psig=AOvVaw1MGF10vjc-BB2BpasAfeNk&ust=1626005519048000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOC40-G82PECFQAAAAAdAAAAABAD",
    title: "The future of cars is electric",
    subtitle: "but how soon is this future? – pv magazine  USA"
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.racv.com.au%2Froyalauto%2Fmoving%2Fcars%2Faustralias-best-cars%2Fsmall-cars-over-35k.html&psig=AOvVaw1MGF10vjc-BB2BpasAfeNk&ust=1626005519048000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOC40-G82PECFQAAAAAdAAAAABAL",
    title: "Best small cars over $35k",
    subtitle: "Australia's Best Cars 2019 | RoyalAuto | RACV"
  },
  {
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.press.rolls-roycemotorcars.com%2Frolls-royce-motor-cars-pressclub%2Farticle%2Fdetail%2FT0330111EN%2Fcollective-of-three-motor-cars-celebrate-the-breadth-of-contemporary-bespoke-craftsmanship-at-auto-china-shanghai%3Flanguage%3Den&psig=AOvVaw1MGF10vjc-BB2BpasAfeNk&ust=1626005519048000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOC40-G82PECFQAAAAAdAAAAABAR",
    title: "COLLECTIVE OF THREE MOTOR CARS",
    subtitle: "CELEBRATE THE BREADTH OF CONTEMPORARY  BESPOKE CRAFTSMANSHIP AT AUTO CHINA, SHANGHAI"
  }

]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4">
            <Card
              img={data[0].img}
              title={data[0].title}
              subtitle={data[0].subtitle}
            />
          </div>
          <div className="col-md-4">
            <Card
              img={data[1].img}
              title={data[1].title}
              subtitle={data[1].subtitle}
            />
          </div>
          <div className="col-md-4">
            <Card
              img={data[2].img}
              title={data[2].title}
              subtitle={data[2].subtitle}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
