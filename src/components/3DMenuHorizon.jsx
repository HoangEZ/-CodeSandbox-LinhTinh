import { Link } from 'react-router-dom';
import menu from './3DMenuHorizon.module.css';
export default () => (
  <div className={menu.nav}>
    <ul>
      <li>
        <Link to="#" data-text="Home">
          Home
        </Link>
      </li>
      <li>
        <Link to="#" data-text="Introduction">
          Introduction
        </Link>
      </li>
      <li>
        <Link to="#" data-text="Contact">
          Contact
        </Link>
      </li>
    </ul>
  </div>
);
