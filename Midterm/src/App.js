import NationsList from './components/nationsList';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';

function App() {

  return (
    <div className="AppBg">
        <div className="App">
      <Header />
      <main>
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Country Information</h1>
            </div>
            <NationsList />
            
            <br />
            <br />
            
          </div>
        </div>

      </main>
     <Footer />
    </div>
    </div>
  );
}

export default App;
