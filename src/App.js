import logo from './logo.svg';
import './App.css';
import './v2/public/styles/main.css';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './v2/components/Home/Home';
import ErrorBoundary from './v2/components/ErrorBoundary/ErrorBoundary';


function App() {
  return (
    <div className="App">
      {/* <RegistrationForm/> */}


      {/* <StudentRegistrationForm /> */}

      <div
        style={{
          height: '100vh',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex'
        }}>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>

      </div>

    </div>
  );
}

export default App;
