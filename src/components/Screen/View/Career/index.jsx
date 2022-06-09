import { useState } from 'react'

import workExperienceData from '../../../../data/workExperienceData'
import Company from './Company'

const Career = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedCompany, setSelectedCompany] = useState(null)

    const handleCompanyOnClick = (i) => {
        setIsSelected(true)
        setSelectedCompany(i)
    }

    return (
        <div className="career">
            <h1>MY EXPERIENCE</h1>
            {isSelected && <span onClick={() => setIsSelected(false)}>Back</span>}
            <div className='career__companies'>
            {
                workExperienceData.map((experience, i) => {
 
                    return (
                        <> 
                        {
                            !isSelected && 
                            <div className='career__company__wrapper' onClick={() => {handleCompanyOnClick(i)}}>
                                <h2 className="career__company">{experience.company}</h2>
                                <h3 className="career__job-title">{experience["job-title"]}</h3>
                                <h3>{experience.from} - {experience.to}</h3>
                            </div>
                        }
                        </>
                    )
                })
            }
            </div>
            {isSelected && <Company id={selectedCompany} />}
        </div>
    )
}

export default Career