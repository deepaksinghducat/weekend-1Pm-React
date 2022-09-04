import { Fragment } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Cart from './components/Cart'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/cart' element={<Cart />} />
        </Routes>
     </div>
    </Fragment>
  );
}

export default App;
