import HPBar from "../HPBar"
import HudSettings from '../HudSettings'

const Header = () => {
    return (
        <div className="header">
            <HPBar />
            <HudSettings />
        </div>
    )
}

export default Header