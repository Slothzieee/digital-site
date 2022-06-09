import {ReactComponent as Gear} from '../../assets/img/gear.svg'
import {ReactComponent as Battery} from '../../assets/img/battery.svg'
import {ReactComponent as Wifi} from '../../assets/img/wifi.svg'

import SkillBar from './SkillBar'

const HudSettings = () => {
    return (
        <div className="hud-settings">
            <SkillBar classNames='skill-bar__image--js' stats="900/900"/>
            <SkillBar classNames='skill-bar__image--node' stats="900/900"/>
            <SkillBar classNames='skill-bar__image--solidity' stats="900/900"/>
            <Wifi className='wifi-icon'/>
            <Battery className='battery-icon' />
            <Gear className='gear-icon' />
        </div>
    )
}

export default HudSettings