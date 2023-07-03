import '../Nav/Nav.css';
import Button from "../../Shared/Button/button"
import { Link } from 'react-router-dom';
import logoImage from '../../../Assets/LOGOTIPOlogo.svg';
import accountIcon from '../../../Assets/codicon_accounticon.png';
import basketIcon from '../../../Assets/la_shopping-basketicon.png';
import lineImage from '../../../Assets/Line 2.png';


const Nav = () => {
    return (
      <nav>   
        <ul className="div-nav">
          <li className="logo-div">
            <Link to="/">
              <img src={logoImage} alt="logo-asgaya" className="logo-img"/>
            </Link>
          </li>
          <li>Apadrina</li>
          <li>Suscripciones</li>
          <li>
            <Link to="/list">Productos</Link>
          </li>
          <li>Quienes Somos</li>
          <li>FAQ</li>
          <li>Blog</li>
          <li><img src={accountIcon} alt="account" /></li>
          <li><img src={basketIcon} alt="basket" /></li>
          <Button text="Suscribirse" />
        </ul>
        <div className="line-div">
          <img src={lineImage} alt="line-nav" className="line-nav" />
        </div>
      </nav>
    );
  };
  
  export default Nav;
  