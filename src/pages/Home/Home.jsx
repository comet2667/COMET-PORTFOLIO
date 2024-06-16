import About from "../../components/About";
import Career from "../../components/Career";
import Projects from "../../components/Projects/Projects";
import Skills from "../../components/Skills/Skills";

function Home({menuRef}) {
    return (
        <div>
            <div ref={e=>menuRef.current[0]=e}>
                <About menuRef={menuRef}/>
            </div>
            <div ref={e=>menuRef.current[2]=e}>
                <Skills />
            </div>
            <div ref={e=>menuRef.current[3]=e}>
                <Projects />
            </div>
            <div ref={e=>menuRef.current[4]=e}>
                <Career />
            </div>
        </div>
    );
}
export default Home;