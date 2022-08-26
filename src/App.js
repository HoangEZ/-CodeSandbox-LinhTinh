import { Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import ImageToChar from './components/ImageToChar';
import Perspective from './components/Perspective';
import Box from './components/box';
import T3DMenu from './components/3DMenu';
import T3DMenuHorizon from './components/3DMenuHorizon';
import Playpause from './components/Playpause';
import MagicNav from './components/MagicNav';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ImageToChar" element={<ImageToChar />} />
      <Route path="/perspective" element={<Perspective />} />
      <Route path="/box" element={<Box />} />
      <Route path="/3dmenu" element={<T3DMenu />} />
      <Route path="/3dmenuhorizon" element={<T3DMenuHorizon />} />
      <Route path="/playpause" element={<Playpause />} />
      <Route path="/magic-nav" element={<MagicNav />} />
    </Routes>
  );
}
