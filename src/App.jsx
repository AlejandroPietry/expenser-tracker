import { Router } from './Router';

import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div class="container">
        <Router />
      </div>
    </GlobalProvider>
  );
}

export default App;
