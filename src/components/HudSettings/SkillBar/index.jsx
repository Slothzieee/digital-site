const SkillBar = ({stats, classNames=""}) => {
    return (
        <div className="skill-bar" data-augmented-ui="br-clip ">
            <div className="skill-bar__overlay"/>
            <div className="skill-bar__wrapper">
                <div className= {`skill-bar__image ${classNames}`} />
                <p>{stats}</p>
            </div>
          
        </div>
    )
}

export default SkillBar