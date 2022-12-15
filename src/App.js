import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import CommunitySection from './components/CommunitySection';
import SuccessSection from './components/SuccessSection';
import EmailSection from './components/EmailSection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';

function App() {
  return (
    <div className='relative'>
      <Header />
      <Hero />
      <CommunitySection />
      <SuccessSection />
      <BlogSection />
      <EmailSection />
      <Footer />
    </div>
  );
}

export default App;
