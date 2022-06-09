import useScreenViewStore from '../../store/screen'

const DigitalButton = ({classNames, image, text, clickHandler}) => {

    const {setScreenView, screenView} = useScreenViewStore()

    const handleOnClick = () => {
        setScreenView(text)
        console.log(screenView)
    }

    return(
        <div className="digital-button__wraper" onClick={handleOnClick}>
            <div className={`digital-button ${classNames}`} style={{backgroundImage: `url(${image})`}} data-augmented-ui="all-hex border" />
            <h2>{text}</h2>
        </div>
    )
}

export default DigitalButton