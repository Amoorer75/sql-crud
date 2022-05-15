import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './componets/routes/Home';
import ListItems from './componets/routes/ListItems';
import ListItem from './componets/routes/ListItem';
import ItemCreate from './componets/routes/ItemCreate';
import ItemEdit from './componets/routes/ItemEdit';

function App() {
  const location = useLocation();


  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>

      <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/mobile-games' element={<ListItems />} />
    <Route path='/add-game' element={<ItemCreate />} />
    <Route path='/mobile-games/:id' element={<ListItem />} />
    <Route path='/mobile-games/:id/edit' element={<ItemEdit />} />

      </Routes>


     
    </div>
  );
}

export default App;
