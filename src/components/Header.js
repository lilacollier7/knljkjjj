// Import Assets
import profile from '../assets/profile.gif';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Rons Basement" />

            <div className='header__content'>
                <h1>Welcome to Grant Cardone</h1>
                <p>Gold | Silver | Stocks</p>
                <br></br>
                <a href="mailto:silverseeker.online@gmail.com" target="_blank" className="button">Email Now</a>
            </div>
        </section>
    );
}

export default Header;