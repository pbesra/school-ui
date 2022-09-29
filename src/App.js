import logo from './logo.svg';
import './App.css';
import './v2/public/styles/main.css';
import Home from './v2/components/Home/Home';
import ErrorBoundary from './v2/components/ErrorBoundary/ErrorBoundary';


function App() {
  return (
    <div className="App">
      <div className='home-cls'>
        <ErrorBoundary>
          <Home />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
