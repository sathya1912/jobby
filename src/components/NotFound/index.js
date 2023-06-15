import Header from '../Header'
import './index.css'

const notFoundImage =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <Header />
    <div>
      <div>
        <img src={notFoundImage} alt="notfound" />
      </div>
      <h1>Page Not Found</h1>
      <p>We are Sorry, the page you requested could not be found</p>
    </div>
  </>
)

export default NotFound
