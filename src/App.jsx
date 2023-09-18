import './App.css'
import HomeContent from './components/HomeContent/HomeContent';

function App() {
  // first step start
  let darkMode;

  if (localStorage.getItem('dark-mode')) {
    // if dark mode is in storage, set variable with that value
    darkMode = localStorage.getItem('dark-mode');
  } else {
    // if dark mode is not in storage, set variable to 'light'
    darkMode = 'light';
  }

  // set new localStorage value
  localStorage.setItem('dark-mode', darkMode);

  // first step end

  // second step start
  const element = document.querySelector("html")

  if (localStorage.getItem('dark-mode') == 'dark') {
    // if the above is 'dark' then apply .dark to the body
    element.classList.add('dark');
  }

  if (localStorage.getItem('dark-mode') == 'light') {
    // if the above is 'dark' then apply .dark to the body
    element.classList.add('light');
  }

  // second step end

  // third step start
  // Toggle dark UI

  const toggle = () => {
    if (localStorage.getItem('dark-mode') == 'dark') {
      element.classList.remove('dark');
      element.classList.add('light');
      localStorage.setItem('dark-mode', 'light');
    }
    else {
      element.classList.remove('light');
      element.classList.add('dark');
      // set stored value to 'dark'
      localStorage.setItem('dark-mode', 'dark');
    }
  }
  // third step end


  return (
    <div>

      <button onClick={toggle}>Toggle Mode</button>
      {/* <button id='getDarkButton' onClick={setDarkmode}>Dark</button>
      <button id='getLightButton' onClick={setLightmode}>Light</button> */}
      <p>check</p>
     
      <HomeContent />

    </div>
  )
}

export default App
