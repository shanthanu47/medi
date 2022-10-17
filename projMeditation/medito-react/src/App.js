import logo from './logo.svg';
import './App.css';
import Home from './home/home';
import Layout from './Layout/Layout';
import {Routes , } from 'react-router-dom'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index  />
      </Route>
    </Routes>

      {/* <div>Shanthanu</div>
      <h1>Shanthanu</h1>
      <p>Shanthanu</p>
      <span>Shanthanu</span> */}
    </>
  );
}



export default App;
