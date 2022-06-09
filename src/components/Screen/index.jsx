import DialogBox from "../DialogBox"
import Header from "../Header"
import SideMenu from "../SideMenu"

const Screen = () => {
    return (
        <main className="screen">
            <div className="screen-overlay" />
            <Header />
            <div className="screen__main">
                <SideMenu />
                <DialogBox />
            </div>
        </main>
    )
}

export default Screen