import './Header.scss';

function Header({menuRef}){

    const onClickMenu = (idx)=>{
        menuRef.current[idx].scrollIntoView({ behavior: "smooth" });
    }

    return(
        <div className='header__container'>
            <div>
                <h2 onClick={()=>onClickMenu(0)}>COMET PARK</h2>
            </div>
            <div className='header__menu'>
                <p onClick={()=>onClickMenu(1)}>About</p>
                <p onClick={()=>onClickMenu(2)}>Skills</p>
                <p onClick={()=>onClickMenu(3)}>Projects</p>
                <p onClick={()=>onClickMenu(4)}>Career</p>
            </div>
        </div>
    );
}
export default Header;