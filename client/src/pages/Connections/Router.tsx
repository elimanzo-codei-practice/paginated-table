import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/Common/PrivateRoute';
import GameList from './GameList';


export default function Router() {
  return (
    <Routes>
      <Route path='games' element={<PrivateRoute outlet={<GameList />} />} />
    </Routes>
  );
}
