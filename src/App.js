
import Header from '../src/components/Header'
import Sidebar from './components/Sidebar';
import SubHeader from './components/SubHeader';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar_wrapper'>
      <Sidebar />
      </div>
     <div className='main_content_wrapper'>
     <Header />
     <SubHeader/>
    
     </div>
     

    </div>
  );
}

export default App;
