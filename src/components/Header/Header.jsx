import './Header.scss';

function Header(){
    return(
        <div className='header__container'>
            <div>
                <h2>COMET PARK</h2>
            </div>
            <div className='header__menu'>
                <p>About</p>
                <p>Skills</p>
                <p>Projects</p>
                <p>Career</p>
            </div>
        </div>
    );
}
export default Header;