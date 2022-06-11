import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import First from './pages/First';
import NotFound from './pages/NotFound';

function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Navigate to="/first" replace />} />
        <Route index path="first" element={<First />} ></Route>
        <Route index path="*" element={<NotFound />} ></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
