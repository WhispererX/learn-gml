import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Hero from './components/hero/hero';

import ComingSoon from './pages/coming-soon/ComingSoon';

function App() {
  document.title = 'LearnGML';
  return <ComingSoon />;

  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}

export default App;
