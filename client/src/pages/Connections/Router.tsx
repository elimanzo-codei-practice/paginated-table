import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../../components/Common/PrivateRoute';
import ConnectionList from './ConnectionList';


export default function Router() {
  return (
    <Routes>
      <Route path='list' element={<PrivateRoute outlet={<ConnectionList />} />} />
    </Routes>
  );
}
