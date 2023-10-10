
import Header from "../Header/header"
import Banner from "../Banner/banner"
import BrandSlider from "../Brand/brand"
import About from "../About/about"
import SkillList from "../Skills/skill"
import Work from "../Work/work"
import Contact from "../Contact/contact"
import Footer from "../Footer/footer"
import Intrested from "../Intrested/intrested"

/*--------------------
* Building Krinky
----------------------*/
export default function Krinky() {
    return (
        <>
            <Header/>
                <main className="wrapper">
                    <Banner/>
                    <BrandSlider/>
                    <About/>
                    <SkillList/>
                    <Intrested />
                    <Work/>
                    <Contact/>
                </main>
            <Footer/>
        </>
    )
}
