import DigitalButton from '../DigitalButton'
import sideMenuData from '../../data/sideMenuData'

const SideMenu = () => {

    return (
        <div className="side-menu">
            {
                sideMenuData.map(({text, image, right}) => {
                    const classNames = right ? 'digital-button--right' : ""

                    return <DigitalButton image={image} classNames={classNames} text={text}/>
                })
            }
        </div>
    )
}

export default SideMenu