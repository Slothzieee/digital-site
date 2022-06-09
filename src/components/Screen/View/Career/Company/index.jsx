import { useState } from "react"
import workExperienceData from "../../../../../data/workExperienceData"

const Company = ({id, isSelected}) => {
    const [page, setPage] = useState(0)
    const experience = workExperienceData[id]

    const handlePageChangeOnClick = () => {
        if (experience.projects.length - 1 <= page) {
            setPage(0)
        } else {
            setPage(prev => prev + 1)
        }
    }

    return (
        <div className="company" key={id}>
            <h2 className="company__title">{experience.company}</h2>
            <h3 className="company__job-title">{experience["job-title"]}</h3>
            <h3>{experience.from} - {experience.to}</h3>
            <h4>{experience.projects[page].name}:</h4>
                <ul>
                    {experience.projects[page].description.map(({para}) => (
                        <li>{para}</li>   
                    ))}
                </ul>
            <p onClick={handlePageChangeOnClick}>{page + 1} / {experience.projects.length} </p>
        </div>
    )
    
}

export default Company