//컴포넌트
import Header from './components/Header';
import MainPage from './components/MainPage';
import Sagongsa from './components/Sagongsa';
import LoginPage from './components/LoginPage';
import Post from './components/Post';
//css
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/post" element={<Post></Post>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="*" element={<Sagongsa></Sagongsa>}></Route>
      </Routes>
    </div>
  );
}

export default App;
