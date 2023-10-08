// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Videos</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>How The Peebles Corp Built A $4 Billion Real Estate Empire | Don Peebles & Grant Cardone</h3>
                    <img src={uniswap} alt="youtube video" />
                    <p>Real Estate Power Player Don Peebles is one badass guy. He’s one of the most POWERFUL African Americans in business. 

I’ve been watching this guy make moves for years. If you don’t know his story then you’re about to hear it. He started his real estate company with $600 and today he has over 4 billion dollars worth in real estate. 

Secure your seat for my ALL-VIRTUAL INTERACTIVE event on October 21 & 22: https://grantcardone.com/10xnow</p>
                    <a href="https://www.youtube.com/watch?v=Jtk-6qEcpLA" target="_blank" className="button">Watch</a>
                </div>

                <div className="projects__card">
                    <h3>The ROI on Books | Laura Morton & Grant Cardone</h3>
                    <img src={compound} alt="Youtube Video" />
                    <p>Books. Does it really pay off to publish one today? 

I sat down with Laura Morton for this episode of Power Players. She’s the author of over 40 books and 19 New York Times Bestsellers. The list of celebrities she's written for includes Susan Lucci, Jennifer Hudson, Al Roker, Justin Beiber, Joan Lunden, Kathy Ireland, the Jonas Brothers, and a whole lot more.

Watch what she had to say on writing, marketing, and releasing a book to your advantage.</p>
                    <a href="https://www.youtube.com/watch?v=ZTCemrnbiIE" target="_blank" className="button">Watch</a>
                </div>

                <div className="projects__card">
                    <h3>Numbers Don't Lie in Business | Tommy Mello & Grant Cardone</h3>
                    <img src={aave} alt="youtube video" />
                    <p>On today’s episode of Power Players, I'm interviewing Home Service Expert, Tommy Mello. He is the founder of a $200 Million Home Service Business called A1 Garage. I asked him how he stands out from his competitors and how he built his company into what it is today.</p>
                    <a href="https://www.youtube.com/watch?v=ZTCemrnbiIE" target="_blank" className="button">Watch</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;