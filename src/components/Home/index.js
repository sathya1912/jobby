import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/jobs')
  }
  return (
    <>
      <Header />
      <div className="Home-container">
        <h1 className="title">Find the Job That Fits Your Life</h1>
        <p className="description">
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilites and potential
        </p>

        <Link to="/jobs">
          <button className="button" type="button" onClick={onRedirectToJobs}>
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}
export default Home
