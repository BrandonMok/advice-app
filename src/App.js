import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import Testimonials from './components/testimonials';

// https://api.adviceslip.com/
// can give random one
// or can use user query for it

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Testimonials />
    </div>
  );
}

export default App;
