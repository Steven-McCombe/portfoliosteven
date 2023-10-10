
import { Link } from "react-scroll";

/*--------------------
* Footer Section
----------------------*/
function Footer() {
    return (
        <footer className="footer bg-slate-900 border-t border-white border-opacity-10 py-4">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
                        <div className="flex justify-center md:justify-start w-full">
                            <Link className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]" to="#https://www.facebook.com/steven.mccombe.96"><i className="fab fa-facebook-f"></i></Link>
                            <Link className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]" to="#https://twitter.com/St_McCombe"><i className="fab fa-twitter"></i></Link>
                            <Link className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]" to="#https://www.instagram.com/st_mccombe"><i className="fab fa-instagram"></i></Link>
                            <Link className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]" to="#https://www.linkedin.com/in/steven-mccombe/"><i className="fab fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 text-center md:text-right">
                        <p className="m-0 text-white text-opacity-75">© 2023 copyright all right reserved by Steven McCombe</p>
                    </div>
                </div>
            </div>
        </footer>
     );
}

export default Footer;