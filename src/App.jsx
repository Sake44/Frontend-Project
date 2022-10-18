import Photo from "./Components/Photo"
import Title from "./Components/Title"
import Button from "./Components/Button"
import About from "./Components/About"
import Interest from "./Components/Interest"
import Footer from "./Components/Footer"



export default function App() {
    return (
       <div className="container">
            <Photo/>
            <Title/>
            <Button/>
            <About/>
            <Interest/>
            <Footer/>
       </div>
    )
}