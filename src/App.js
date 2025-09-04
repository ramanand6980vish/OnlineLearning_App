import { BrowserRouter } from 'react-router';
import { AuthProvider } from './Components/AuthContext';
import Router from './Components/Router';

function App() {
  return (
    <div >

      <AuthProvider>
          
        <Router />
          
      </AuthProvider>


    </div>
  );
}

export default App;
