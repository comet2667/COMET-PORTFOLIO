import About from "../../components/About";
import Career from "../../components/Career";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

function Home(){
    return(
        <div>
            <About/>
            <Skills/>
            <Projects/>
            <Career/>
        </div>
    );
}
export default Home;