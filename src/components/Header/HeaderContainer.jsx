
import Header from './Header'
import { logout } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { getIsAuth, getLogin } from '../../redux/Header-selector';


const mapStateToProps = (state) => ({
  isAuth: getIsAuth(state),
  login: getLogin(state),
});



export default connect( mapStateToProps, { logout } )(Header);