import '../components/reviews.css';
import { Link } from "react-router-dom"
import { ReactComponent as InstgramSvg } from '../assets/instagram-brands.svg';
import Logo from '../assets/lilys.jpg'
import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export default function Reviews() {

    const [number, setNumber] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleText = () => {
        switch (number || hoverStar) {
            case 0:
                return 'Rate me!';
            case 1:
                return 'I hated it! 😠';
            case 2:
                return 'I did not like it! 😞';
            case 3:
                return "It was alright! 👌";
            case 4:
                return "It was awesome! 😎";
            case 5:
                return "I loved it! 😍";
            default:
                return "Rate me!";
        }
    };

    const handlePlaceHolder = () => {
        switch (number || hoverStar) {
            case 0:
                return "Comment here...";
            case 1:
            case 2:
            case 3:
            case 4:
                return "What is your problem?";
            case 5:
                return "Why do you like the product?";
            default:
                return "Comment here...";
        }
    };

    return (
        <div className="App">
            <nav className="navbar">
                <div className="logo-lily">
                    <img src={Logo} alt="Girl in a jacket" height="45"></img>
                </div>
                <div className="Home-page">
                    <h1 className='home-font'><Link to='/home'>Home</Link></h1>
                </div>
                <div className="Reviews-page">
                    <h1 className='reviews-font'><Link to='/reviews'>Reviews</Link></h1>
                </div>
                <div className="Services-page">
                    <h1 className='services-font'><Link to='/services'>Services</Link></h1>
                </div>
                <div className="About-page">
                    <h1 className='cbout-font'><Link to='/about'>About</Link></h1>
                </div>
                <div className="Contact-page">
                    <h1 className='contact-font'><Link to='/contact'>Contact</Link></h1>
                </div>
            </nav>

            <main className="App-header">

                <div className="reviews-main">
                    <div className="widget">
                        <img src="https://media.baamboozle.com/uploads/images/59285/1607706108_132637" alt="banner" width="auto"></img>
                        <div>
                            <h1 className='placeholder-text'>{handleText()}</h1>
                            {Array(5)
                                .fill()
                                .map((_, index) =>
                                    number >= index + 1 || hoverStar >= index + 1 ? (
                                        <AiFillStar
                                            onMouseOver={() => !number && setHoverStar(index + 1)}
                                            onMouseLeave={() => setHoverStar(undefined)}
                                            style={{ color: "black" }}
                                            onClick={() => setNumber(index + 1)}
                                        />
                                    ) : (
                                        <AiOutlineStar
                                            onMouseOver={() => !number && setHoverStar(index + 1)}
                                            onMouseLeave={() => setHoverStar(undefined)}
                                            style={{ color: "black" }}
                                            onClick={() => setNumber(index + 1)}
                                        />
                                    )
                                )}
                        </div>
                        <textarea placeholder={handlePlaceHolder()}></textarea>
                        <button className={` ${!number && "disabled"} `}>Submit</button>
                    </div>

                    <div className="all-cards">
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">CBE Ogston:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"Exceptional service!"</span>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">Mr Uggla:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"Thank you for everything!"</span>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">Mrs Campbell:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"Thank you!"</span>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">Mrs Oxanna:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"Amazing cooking & cleaning"</span>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">Mr Yue:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"I am so happy with the work you have done!"</span>
                            </div>
                        </div>
                        <div className='review-card'>
                            <div className="review-name-box">
                                <h1 id="review-name">Mr Yue:</h1>
                            </div>
                            <div className='review-text-box'>
                                <span id="review-text">"I am so happy with the work you have done!"</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="App-footer">
                <h1>We make homes clean, safe, healthy.</h1>
                <h1 className='follow-us'>Follow us:  <a href="https://www.google.com/"><InstgramSvg /></a></h1>
            </footer>
        </div>
    );
}
