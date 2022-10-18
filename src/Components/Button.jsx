import "../CSS/main.css"
import LinkPhoto from "../Images/Linkedin-icon.png"
import EmailPhoto from "../Images/Mail-icon.png"
 

export default function Button() {
    return (
        <div className="">
            <a href="mailto:andrea.rollo95@gmail.com" className="button--mail"><i class="fa-regular fa-envelope"></i>Email</a>
            <a href="https://www.linkedin.com/in/andrea-rollo-profile/" className="button--link"><i class="fa-brands fa-linkedin"></i>Linkedin</a>
        </div>
        
    )
}