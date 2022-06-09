import View from "../Screen/View"
import useScreenViewStore from '../../store/screen' 

const DialogBox = () => {
    const { screenView} = useScreenViewStore()

    return (
        <div className="dialog-box" data-augmented-ui="tl-clip br-2-clip-x border">
            <div className="dialog-box__overlay"/>
            <div className="dialog-box__wrapper">
               <View viewName={screenView}/>
            </div>
        </div>
    )
}

export default DialogBox
