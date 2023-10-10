
import { Link } from "react-scroll";

/*--------------------
* About Section
----------------------*/
export default function About() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
                        <div className="lg:col-span-6 text-center mb-[50px] lg:mb-0">
                            <img className="mx-auto" src="img/aboutme-banner.png" title="Banner" alt="Banner" />
                        </div>
                        <div className="lg:col-span-6 lg:pl-12">
                            <h3 className="font-[600] text-[26px] md:text-[40px] leading-[1.2] text-black mb-[25px]">I'm a Full-Stack Developer.</h3>
                            <p className="text-[16px] md:text-[18px]">I am a Full-Stack Developer in the process of obtaining a degree in Computer Science. Originally from Ireland, I am now based in New York City. My interest in technology drives me to continually hone my skills, particularly in the realm of AI and machine learning. I firmly believe in the transformative power of computing and am excited about contributing to its future.</p>
                            <div className="grid grid-cols-12 pt-5">
                                {/* <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">285+</h5>
                                    <span>Projet Completed</span>
                                </div>
                                <div className="col-span-6 sm:col-span-4">
                                    <h5 className="text-[26px] text-orange-600 font-[600]">190+</h5>
                                    <span>Happy Clients</span>
                                </div> */}
                            </div>
                            <div className="pt-6">
                                <Link className="px-btn px-btn-theme mr-4 mt-2" to="contactus">Contact Me</Link>
                                <Link className="px-btn px-btn-dark mr-4 mt-2" to="portfolio">Portfolio</Link>
                                <Link className="px-btn px-btn-theme mt-2" to="Resume">Resume</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
