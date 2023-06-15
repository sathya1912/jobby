import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogoUrl = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="header-container">
        <img src={websiteLogoUrl} alt="logo" className="image" />
        <div>
          <Link to="/">
            <h1 className="heading">Home</h1>
          </Link>
          <Link to="/jobs">
            <h1 className="heading">Jobs</h1>
          </Link>
        </div>
        <div>
          <button className="button" type="button" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
