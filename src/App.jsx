import { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('shopTheme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('shopTheme', theme);
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <h1>Simple things, well made</h1>
        
        <div className="cards-container">
          <Card 
            iconColor="purple" 
            title="Fast setup" 
            description="Everything you need is ready before you write a line of code." 
          />
          <Card 
            iconColor="green" 
            title="Reusable pieces" 
            description="Build once, use it everywhere across the page." 
          />
          <Card 
            iconColor="orange" 
            title="Clean by default" 
            description="No clutter — just a layout that gets out of the way." 
          />
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;