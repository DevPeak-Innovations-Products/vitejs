import { Outlet } from 'react-router-dom';
import { Menubar } from '../../components';
import './HomeContainer.scss';

function HomeContainer() {
  return (
    <div className='home-container'>
      <Menubar />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeContainer