import React, { useEffect, useState } from "react";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { BsDiscord } from 'react-icons/bs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { AiOutlineTwitter } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { SiRobloxstudio } from 'react-icons/si'


function Main() {

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Presale', 'Rewards', 'Team', 'Marketing'],
        datasets: [
            {
                label: '# of Tokens',
                data: [31, 49, 8, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
            },
        ],
    };


    const [date, setDate] = useState(new Date());
    const launchTime = new Date("2023-09-01T18:00:00");

    function countdown() {
        setDate(new Date());
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []);

    const timeDifference = Math.max(launchTime - date, 0);
    const days = String(Math.floor(timeDifference / (3600000 * 24))).padStart(2, '0');
    const hours = String(Math.floor((timeDifference % (3600000 * 24)) / 3600000)).padStart(2, '0');
    const minutes = String(Math.floor((timeDifference % 3600000) / 60000)).padStart(2, '0');
    const seconds = String(Math.floor((timeDifference % 60000) / 1000)).padStart(2, '0');



    const handleScroll = () => {
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <div className="back__galaxy">
                <main className="galaxy__clouds">
                    <Fade bottom distance="15%">
                        <div className="galaxy">
                            <div className="galaxy__main">
                                <h1 style={{ color: 'orange', fontSize: '80px' }}>$hitCoin<span className="moon">MOON</span></h1>
                                <h1>Elevate your <span style={{ color: 'orange' }}>crypto</span> game <span style={{ color: 'orange' }}>NOW</span></h1>
                                <div className="galaxy__time">
                                    <div style={{ textAlign: "center" }}>
                                        <div className="galaxy__date"><h1>{days}</h1></div>
                                        <h3>Days</h3>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div className="galaxy__date"><h1>{hours}</h1></div>
                                        <h3>Hours</h3>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div className="galaxy__date"><h1>{minutes}</h1></div>
                                        <h3>Minutes</h3>
                                    </div>
                                    <div style={{ textAlign: "center" }}>
                                        <div className="galaxy__date"><h1>{seconds}</h1></div>
                                        <h3>Seconds</h3>
                                    </div>
                                </div>
                                <div className="galaxy__actions">
                                    <button className="galaxy__btns">View Charts</button>
                                    <button className="galaxy__btns" style={{ backgroundColor: 'orange' }}>Buy More</button>
                                </div>
                            </div>
                            <div className="galaxy__duck">
                                <img src="./duck.png" className="duck spaceInDown" alt="" />
                            </div>
                        </div>
                    </Fade>
                    <div className="galaxy__godown" onClick={handleScroll}><div className="galaxy__arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24.012" height="26.021">
                        <g fill="none" data-name="Group 113">
                            <path stroke="#1F1E29" d="M12.506 0v24" data-name="Line 1"></path>
                            <path stroke="#1F1E29" d="m.354 13.661 11.653 11.653L23.66 13.661" data-name="Path 459"></path>
                        </g>
                    </svg></div></div>
                </main>
            </div>
            <hr className="line" />
            {/* end of galaxy */}
            <main className="moondiv__back">
                <div className="moondiv">
                    <div className="moondiv__main" id="moondiv">
                        <h1><span style={{ color: 'orange' }}>We</span> are going to the <span style={{ color: 'orange' }}>moon</span></h1>
                        <h2>Don't lose your ticket on our Rocket, which will get you directly there.</h2>
                        <div className="moondiv__btn">
                            <button className="moon__btns">Reserve your spot TODAY</button>
                        </div>
                    </div>
                    <Fade bottom distance="15%">
                        <div className="moondiv__duck">
                            <img className="moonduck" src="./duckR.png" alt="" />
                        </div>
                    </Fade>
                </div>
            </main>
            <hr className="line" />
            {/* end of moon */}
            <main className="freenft__back">
                <div className="freenft">
                    <div className="freenft__main">
                        <h1><span style={{ color: 'orange' }}>FREE</span> nft for <span style={{ color: 'orange' }}>everyone</span></h1>
                        <h2 style={{ lineHeight: '50px' }}>Every week we giveaway 3 free nfts to everyone that owns <span style={{ color: 'orange', fontSize: '30px' }}>$hitCoin<span className="moon">MOON</span></span>.</h2>
                        <h2><span style={{ color: 'orange' }}>follow</span> our discord for more info.</h2>
                        <Zoom><div className="freenft__dc"><div className="freenft__disc galaxy__date"><h1><BsDiscord /></h1></div></div></Zoom>
                    </div>
                    <div className="freenft__img">
                        <Zoom>
                            <div className="freenft__ball">
                                <img className="freenft_nfts" src="./nfts.webp" alt="" />
                            </div>
                        </Zoom>
                    </div>
                </div>
            </main>
            <hr className="line" />
            {/* end of freenft */}
            <main className="chart__back">
                <h1 style={{ marginBottom: '90px', maxWidth: '1000px', marginInline: 'auto', marginTop: '-75px' }}><span style={{ color: 'white', fontSize: '50px' }}>$hitCoin<span className="moon">MOON</span></span> is the main utility token in the ShitVerse with core values.</h1>
                <div className="chart">
                    <div className="chart__graph">
                        <h2><span style={{ color: 'white', fontSize: '30px' }}>$hitCoin<span className="moon">MOON</span></span> Allocation</h2>
                        <Fade bottom distance="15%"><Doughnut data={data} options={{ plugins: { legend: { display: false } } }} /></Fade>
                    </div>
                    <Fade bottom distance="15%" cascade>
                        <div className="chart__main">
                            <div className="chart__info border_red">
                                <h3>31% Rewards</h3>
                                <h4>Progressive over 36 months</h4>
                            </div>
                            <div className="chart__info border_blue">
                                <h3>49% Rewards</h3>
                                <h4>Progressive over 36 months</h4>
                            </div>
                            <div className="chart__info border_yel">
                                <h3>8% Rewards</h3>
                                <h4>Progressive over 36 months</h4>
                            </div>
                            <div className="chart__info border_cyan">
                                <h3>12% Rewards</h3>
                                <h4>Progressive over 36 months</h4>
                            </div>
                        </div>
                    </Fade>
                </div>
            </main>
            <hr className="line" />
            {/* end of alocation */}
            <main className="team__back">
                <h2 style={{ color: 'orange' }}>Building the <span style={{ color: 'orange' }}>$hitCoin<span className="moon">MOON</span></span></h2>
                <h1 style={{ marginBottom: '25px' }}>Meet our team</h1>
                <div className="team">
                    <Fade bottom distance="15%">
                        <div className="team__item">
                            <a href="https://twitter.com/DUALIPA" target="blank" className="team__tt">
                                <AiOutlineTwitter size={50} color="orange" />
                            </a>
                            <img className="team__img" src="./duasmoke.jpg" alt="" />
                            <h1>Dua Lipa</h1>
                            <h2>CEO</h2>
                        </div>
                        <div className="team__item">
                            <a href="https://twitter.com/jackharlow" target="blank" className="team__tt">
                                <AiOutlineTwitter size={50} color="orange" />
                            </a>
                            <img className="team__img" src="./asdasd.PNG" alt="" />
                            <h1>Jack</h1>
                            <h2>Coo</h2>
                        </div>
                        <div className="team__item">
                            <a href="https://twitter.com/drake" target="blank" className="team__tt">
                                <AiOutlineTwitter size={50} color="orange" />
                            </a>
                            <img className="team__img" src="./drake.jpg" alt="" />
                            <h1>Drake</h1>
                            <h2>GOAT</h2>
                        </div>
                        <div className="team__item">
                            <img className="team__img" src="./Capture.PNG" alt="" />
                            <h1>The Black</h1>
                            <h2>SLAVE</h2>
                        </div>
                    </Fade>
                </div>
            </main>
            {/* end of team */}
            <footer className="footer">
                <h1>Join our community</h1>
                <br />
                <h2>Our community is expanding rapidly. Please follow our social platforms to stay up-to-date,
                    connect with community members and be the first to hear the latest Shiba Saga, ShiaVerse and $SHIA scoops.</h2>
                <br /><br />
                <h2>Make a donation to Global Gift Foundation,
                    with your donation we can help millions of children around the world.</h2>
                <button className="galaxy__btns">Donate</button>
                <br /><br /><br />
                <div className="footer__socials">
                    <Fade bottom distance="15%" big>
                        <div className="freenft__disc "><h1><AiOutlineTwitter /></h1></div>
                        <div className="freenft__disc "><h1><BsDiscord /></h1></div>
                        <div className="freenft__disc "><h1><BsInstagram /></h1></div>
                        <div className="freenft__disc "><h1><SiRobloxstudio /></h1></div>
                    </Fade>
                </div>
                <a href="" className="footer__logo" style={{ marginTop: '100px' }}>
                    <div style={{ marginInline: 'auto', display: 'flex' }}>
                        <img className="LogoImg" src="./shitcoin.png" alt="" />
                        <h1>$hitCoin<span className="moon">MOON</span></h1>
                    </div>
                </a>
                <br />
                <h3>© 2023 <span>$hitCoin<span className="moon">MOON</span></span></h3>
            </footer>
        </>
    )
}

export default Main