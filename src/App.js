import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />

      <div className="flex">
        {/* <Sidebar /> */}
        <Sidebar />
        <div  className='flex-6'></div>
        <div className='flex-2'></div>
      </div>
      {/* App body */}
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
