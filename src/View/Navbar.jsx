import { Link } from "react-router-dom"

function Navbar() {
    function moon(){
        window.scrollTo({
            top: 900,
            behavior: 'smooth'
        });
    }

    function freenft(){
        window.scrollTo({
            top: 1600,
            behavior: 'smooth'
        });
    }

    function tokenAllocation(){
        window.scrollTo({
            top: 2450,
            behavior: 'smooth'
        });
    }

    function team(){
        window.scrollTo({
            top: 3350,
            behavior: 'smooth'
        });
    }



    return (
        <nav>
            <Link to='' className="Logo">
                <img className="LogoImg" src="./shitcoin.png" alt="" />
                <h1>$hitCoin<span className="moon">MOON</span></h1>
            </Link>
            <ul className="navbar-menu">
                <li className="navbar-item">
                    <Link onClick={moon} >Go to the MOON</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={freenft} >Get Free NFTs</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={tokenAllocation} >Token Allocation</Link>
                </li>
                <li className="navbar-item">
                    <Link onClick={team} >Team</Link>
                </li>
                    <button className="navbar-buy">Buy HERE</button>
            </ul>
        </nav>
    )
}

export default Navbar