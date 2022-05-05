import './App.scss';
import Header from './components/header.js';
import Banner from './components/banner.js';

// https://api.adviceslip.com/
// can give random one
// or can use user query for it

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
