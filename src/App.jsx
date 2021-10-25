import { Router } from './Router';

import {GlobalProvider} from './context/GlobalState';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <GlobalProvider>
      <div class="container">
        <Router />
        <Toaster />
      </div>
    </GlobalProvider>
  );
}

export default App;
