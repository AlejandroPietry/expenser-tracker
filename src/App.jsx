import { Router } from './Router';

import {GlobalProvider} from './context/GlobalState';
import { Toaster } from 'react-hot-toast';
import Preloader from './components/Loader/Preloader';

function App() {
  return (
    <GlobalProvider>
      
        <div class="container">
          <Router />
          <Toaster />
          <Preloader />
        </div>
    </GlobalProvider>
  );
}

export default App;
