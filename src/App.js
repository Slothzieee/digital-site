import './styles/main.scss'
import 'tailwindcss/tailwind.css'
import 'augmented-ui/augmented-ui.min.css'

import Screen from './components/Screen'
import Head from './components/Head'

const App = () =>  {
  return (
    <div className="App">
      <Head />
      <Screen />
    </div>
  );
}

export default App;
