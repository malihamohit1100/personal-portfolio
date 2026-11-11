
import Navbar from './components/layout/Navbar';

import Hero from './components/sections/Hero';
import About from './components/sections/About';

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

        {/* Skills and Projects */}
        {/* Contact */}
      </main>

      {/* Footer and ScrollToTop */}
    </>
  );
}

export default App;
