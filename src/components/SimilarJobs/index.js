import './index.css'

const SimilarJobs = props ={
    const {similarJobsData} = props
    const {
        companyLogoUrl,
        id,
        jobDescription,
        employmentType,
        location,
        rating,
        title,
    } = similarJobsData

    return (
        <li>
        <div>
        <img src={companyLogoUrl}
        alt ="similar job company logo"/>
        <div>
        <h1>{title}</h1>
        <div>
        <p>{rating}</p>
        </div>
        </div>
        </div>
        <div>
        <h1>
        Description</h1>
        <p>{jobDescription}</p>
        </div>
        <div>
        <div>
        <p>{location}</p></div>
        <div>
        <p>{employmentType}</p></div>
        </div>

        </li>
    )
}

export default SimilarJobs