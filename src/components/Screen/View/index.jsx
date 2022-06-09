import Career from "./Career"
import Stack from "./Stack"
import Socials from "./Socials"
import Contact from "./Contact"
import Instructions from "./Instructions"

const View = ({viewName}) => {
    switch(viewName){
        case('CAREER'):
            return <Career />
        case('STACK'):
            return <Stack />;
        case('SOCIALS'):
            return <Socials />;
        case('CONTACT'):
            return <Contact />
        default: 
            return <Instructions />
    }
}

export default View