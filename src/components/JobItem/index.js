import {Loader} from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
 
class JobItem extends Component {
    state ={
        jobsDataDetails: [],
        similarJobsData: [],
        apiStatus: apiStatusConstants.initial,
    }

    componentDidMount() {
        this.getJobData()
    }

    getJobData = async props => {
        const {match}  =this.props
        const {params} = match 
        const {id} = params 
        this.setState({
            apiStatus:apiStatusConstants.inProgress,
        })
        const jwtToken = Cookies.get('jwt_token')
        const jobDetailsApiUrl = `https://apis.ccbp.in/jobs/${id}`
        const optionsJobData = {
            header: {Authorization : `Bearer ${jwtToken}`},
            method: 'GET',
        }
        const responseData = await fetch(jobDetailsApiUrl, optionsJobData)
        if(responseJobsData.ok === true){
            const fetchedJobData = await responseJobsData.json()
            const updatedJobDetailsData = [fetchedJobData.job_details].map(
                eachItem => ({
                    companyLogoUrl:eachItem.company_logo_url,
                    companyWebsiteUrl:eachItem.company_website_url,
                    employmentType:eachItem.employment_type,
                    id:eachItem.id,
                    jobDescription:eachItem.job_description,
                    lifeAtCompany:{
                        description:eachItem.life_at_company.description,
                        imageUrl:eachItem.life_at_company.image_url,
                    },
                    location:eachItem.location,
                    packagePerAnnum:eachItem.package_per_annum,
                    rating:eachItem.rating,
                    skills:eachItem.skills.map(eachSkill => ({
                        imageUrl:eachSkill.image_url,
                        name:eachSkill.name,
                    })),
                    title:eachItem.title,
                }),
                
                const updatedSimilarJobDetails = fetchedDetails.similar_jobs.map(
                    eachItem => ({
                        companyLogoUrl:eachItem.company_logo_url,
                        id:eachItem.id,
                        jobDescription:eachItem.job_description,
                        employmentType:eachItem.employment_type,
                        location:eachItem.location,
                        rating:eachItem.rating,
                        title:eachItem.title,
                    }),
                )
                this.setState({
                    jobsDataDetails:updatedJobDetailsData,
                    similarJobsData:updatedSimilarJobDetails,
                    apiStatus:apiStatusConstants.success,
                })
            } else{
                this.setState({
                    apiStatus:apiStatusConstants.failure,
                })
            }
        }

renderJobDetailsSuccessView =() => {
    const {jobsDataDetails, similarJobsData} =this.state
  if (jobsDataDetails.length >= 1) {
  const {
    companyLogoUrl,
    companyWebsiteUrl,
    employmentType,
    id,
    jobDescription,
    lifeAtCompany,
    location,
    packagePerAnnum,
    rating,
    skills,
    title,
  } = jobsDataDetails[0]

  return (
    <>
      
        <div>
          <div>
          <div>
            <img src={companyLogoUrl} alt="job details company logo" />
            <div>
              <h1>{title}</h1>
              <div>
                <p>{rating}</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>{location}</p>
              </div>
              <div>
                <p>{employmentType}</p>
              </div>
              <div>
                <p>{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <h1>Description</h1>
            <a href ={companyWebsiteUrl}>visit </a>
            <p>{jobDescription}</p>
          </div>
          <h1>Skills</h1>
          <ul>
              {skills.map(eachItem => (
                  <li key ={eachItem.name}>
                      <img
                          src={eachItem.imageUrl}
                          alt ={eachItem.name}
                      />
                      <p>{eachItem.name}</p>
                  </li>
              ))}
          </ul>
          <div>
              <div>
                  <h1>life at Company</h1>
                  <p>{lifeAtCompany.description}</p>
              </div>
              <img 
                  src ={lifeAtCompany.imageUrl} alt ="life at company"
              />
          </div>
        </div>
        <h1>Similar Jobs</h1>
        <ul>
            {similarJobsData.map(eachItem =>(
                <SimilarJobs key ={eachItem.id}
                similarJobData ={eachItem}
                employmentType = {employmentType}/>
            ))}
        </ul>
        </>
       )
       }
       return null 
       }
       onRetryJobDetailsAgain = () => {
           this.getJobData()
       } 

       renderJobFailureView =() => (
           <div>
               <img
                   src='https:assets.ccbp.in/frontend/react-js/failure-img.png'
                   alt ="failure-view"
               />
               <h1>Oops! Something went wrong</h1>
               <p>we cannot seem to find the page new you are looking for</p>
               <div>
                   <button 
                   type ="button"
                       onClick ={this.onRetryJobDetailsAgain}
                  >retry
                        </button>
               </div>
           </div>
       )

       renderJobLoadingView = () => (
           <div data-testid ="loader">
               <Loader type="ThreeDots" color="#0b69ff" height="50" width="50"/>

           </div>
       )

       renderJobDetails = () => {
           const {apiStatus} = this.state 
           switch(apiStatus){
               case apiStatusConstants.success:
               return this.renderJobDetailsSuccessView()
               case apiStatusConstants.failure:
               return this.renderJobFailureView()
               case apiStatusConstants.inProgress:
               return this.renderJobLoadingView()
               default:
               return null
           }
       }

       render() {
            return (
               <>
               <Header/>
               <div>
                   {this.renderJobDetails()}
               </div>
           )
    
             }

    
       
    }
export default JobItem
