import { Link } from 'react-router-dom';
import menu from './3DMenu.module.css';

export default () => (
  <div className={menu.nav}>
    <ul>
      <li data-text="Home">
        <Link to="#">Home</Link>
      </li>
      <li data-text="Product">
        <Link to="#">Product</Link>
      </li>
      <li data-text="Contact">
        <Link to="#">Contact</Link>
      </li>
    </ul>
  </div>
);
