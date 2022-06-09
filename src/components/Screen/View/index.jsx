import Career from "./Career"
import Instructions from "./Instructions"

const View = ({viewName}) => {
    switch(viewName){
        case('CAREER'):
            return <Career />
        default: 
            return <Instructions />
    }
}

export default View