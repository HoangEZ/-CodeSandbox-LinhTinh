import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div>
        <Link to="/">Index</Link>
      </div>
      <div>
        <Link to="/ImageToChar">Convert Image To Character</Link>
      </div>
      <div>
        <Link to="/perspective">Persepctive</Link>
      </div>
      <div>
        <Link to="/box">Box</Link>
      </div>
      <div>
        <Link to="/3dmenu">3D Menu</Link>
      </div>
      <div>
        <Link to="/3dmenuhorizon">3D Menu Horizon</Link>
      </div>
    </>
  );
};
