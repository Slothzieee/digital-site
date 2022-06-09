import {ReactComponent as TwitterIcon} from '../../../../assets/img/twitter.svg'
import {ReactComponent as InstagramIcon} from '../../../../assets/img/instagram.svg'
import {ReactComponent as FacebookIcon} from '../../../../assets/img/facebook.svg'
import {ReactComponent as GithubIcon} from '../../../../assets/img/github.svg'

const Socials = () => {
    return (
        <div className='socials'>
            <h1>MY SOCIALS</h1>
            <div className='socials__container'>
                <a target="_blank" rel="noreferrer" href='https://twitter-silvio'>
                    <div className='socials__single'>
                        <p>Twitter</p>
                        <TwitterIcon />
                    </div>
                </a>

                <a target="_blank" rel="noreferrer" href='https://twitter-silvio'>
                    <div className='socials__single'>
                        <p>Instagram</p>
                        <InstagramIcon />
                    </div>
                </a>

                <a target="_blank" rel="noreferrer" href='https://twitter-silvio'>
                    <div className='socials__single'>
                        <p>Facebook</p>
                        <FacebookIcon />
                    </div>
                </a>

                <a target="_blank" rel="noreferrer" href='https://github.com/Slothzieee'>
                    <div className='socials__single'>
                        <p>Github</p>
                        <GithubIcon />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Socials