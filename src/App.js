import './App.scss';
import Header from './components/header';
import Banner from './components/banner';
import Testimonial from './components/testimonial';
import Footer from './components/footer';
import SectionLayout from './components/sectionLayout';
import AdviceRandom from './components/adviceRandom';
import AdviceSearch from './components/adviceSearch';
import Icon1 from './icons/profile1.svg';
import Icon2 from './icons/profile2.svg';
import Icon3 from './icons/profile3.svg';


function App() {
  const testimonialData = [
    {
      id: 1,
      icon: Icon1,
      name: "Alyssa",
      desc: 'When I needed advice, I knew where to go! Do feel I better no. But it was the thought that counts!',
      order: true
    },
    {
      id: 2,
      icon: Icon2,
      name: "Clark",
      desc: 'I needed advice on money. Who knew I actually should spend some on a better mattress!',
      order: false
    },
    {
      id: 3,
      icon: Icon3,
      name: "Saulo",
      desc: "Was looking for the best way to wash jeans. Turn them outside in! Who would've thought!",
      order: true
    }
  ];


  return (
    <div className="App">
      <Header />
      <Banner />
      <SectionLayout cmp1={<AdviceRandom />}  cmp2={<AdviceSearch />} />
      <Testimonial td={testimonialData[0]} />
      <Testimonial td={testimonialData[1]} />
      <Testimonial td={testimonialData[2]} />
      <Footer />
    </div>
  );
}

export default App;
