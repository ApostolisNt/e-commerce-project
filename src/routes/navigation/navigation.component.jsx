import { Fragment } from 'react';
import { Outlet , Link } from 'react-router-dom';
import './navigation.style.scss';
import crown from '../../assets/crown.svg';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <img src={crown} />
                </Link>
                <Link className='nav-links-container' to='/shop'>
                    <div>Shop</div>
                </Link>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;