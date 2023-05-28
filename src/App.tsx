//컴포넌트
import Header from './components/Header';
import MainPage from './components/MainPage';
//css
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
