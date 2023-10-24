import 'purecss/build/pure.css';
import styles from 'app/styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className="pure-menu pure-menu-horizontal">
      <ul className="pure-menu-list">
        <li className="pure-menu-item">
            <a href="/" className="pure-menu-link">Home</a>
        </li>
        <li className="pure-menu-item">
            <a href="about" className="pure-menu-link">About Me</a>
        </li>
        <li className="pure-menu-item">
            <a href="contact" className="pure-menu-link">Contact</a>
        </li>
      </ul>
    </div>
  )
}