// import 'bootstrap/dist/css/bootstrap.css'
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from './components/GlobalStyle';
import Nav from './components/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import profile from './images/profile.png';
import one from './images/1.webp';
import two from './images/2.webp';
import three from './images/3.webp';
import four from './images/4.webp';
import five from './images/5.webp';
import six from './images/6.webp';
function App() {
  let proImage = profile;

  const theme = {
    colors: {
      bg: '#20232D',
      mainBlue: '#15FFFD',
      bgLight: '#323743',
      smallText: '#C6CBD7',
      heading: '#fff',
      cards: '#323743',
    }
  }

  const handleMode = (dl) => {
    if(dl === false){
      theme.colors.bg='#20232D'
      theme.colors.mainBlue='#15FFFD'
      theme.colors.bgLight='#323743'
      theme.colors.smallText='#C6CBD7'
      theme.colors.heading='#fff'
      theme.colors.cards= '#323743'
    }
    else{
      theme.colors.bg="#fff";
      theme.colors.bgLight="#white";
      theme.colors.smallText="grey";
      theme.colors.heading="black";
      theme.colors.cards= '#ddd'
    }
  }

  return (

    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Nav onSelect={handleMode} />
        <Routes>
          <Route path="/" element={<Home profile={proImage} />} />
          <Route path="/about" element={<About profile={proImage} />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio one={one}
                                                        two={two}
                                                        three={three}
                                                        four={four}
                                                        five={five}
                                                        six={six}
                                                          />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );

};
export default App;
