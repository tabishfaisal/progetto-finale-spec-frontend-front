import {Outlet} from 'react-router-dom';
import Header from './Header';
const DefaultLayout = () => {
  return (
    <div className='body'>
      <Header />
      <div className="main">
        <Outlet />
      </div>
    </div>
  )
}

export default DefaultLayout;
