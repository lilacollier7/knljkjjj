// Import Assets
import profile from '../assets/profile.webp';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Grant Cardone" />

            <div className='header__content'>
                <h1>Welcome to Grant Cardone</h1>
                <p>Gold | Silver | Stocks</p>
                <br></br>
                <a href="https://wa.link/lpo3cb" target="_blank" className="button">Whatsapp Now</a>
            </div>
        </section>
    );
}

export default Header;