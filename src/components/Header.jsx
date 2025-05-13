import {Link} from 'react-router-dom';

const Header = () => {
  return (
      <nav className="head">
        <Link to={'/'}><h1>BooleanStore</h1></Link>
        <ul>
           <Link to={'/favorite'}><li className='li'>WishList ♡</li></Link>
           <Link to={'/comparison'}><li className='li'>Camprison</li></Link>
        </ul>
      </nav>
  )
}

export default Header;
