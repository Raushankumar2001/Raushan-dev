import Layout from './components/Layout';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import CaseStudy from './sections/CaseStudy';
import About from './sections/About';
import Contact from './sections/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Portfolio />
      <CaseStudy />
      <About />
      <Contact />
      <ChatWidget />
    </Layout>
  );
}

export default App;
