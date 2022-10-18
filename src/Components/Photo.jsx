import myPhoto from "../Images/fotoCV.jpg"
import "../CSS/main.css"

export default function PhotoMain() {
    return (
        
        <>
            <div className="">
                <img src={myPhoto} alt="My photo" className="main-photo"/>
            </div>
        </>
    )
}