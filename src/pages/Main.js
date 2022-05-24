import react from "react";
import HomeBanner from "./Blocks/HomeBanner";
import About from "./Blocks/About";
import Services from "./Blocks/Services";
import Blogs from "./Blocks/Blogs";
import Contact from "./Blocks/Contact";

const Main = () => {
    return(
        <>
            <HomeBanner />
            <About />
            <Services />
            <Blogs />
            <Contact />
        </>
    )
}

export default Main