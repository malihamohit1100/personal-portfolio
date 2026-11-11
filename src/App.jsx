import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

import useTheme from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      
      {/* Contact */}
      {/* Footer and ScrollToTop */}
    </>
  );
}

export default App;
