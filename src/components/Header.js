import { FiSearch, FiShoppingCart, FiBell } from 'react-icons/fi';

function Header() {
    return (
        <header className='flex justify-between align-center full-width'>
            <a href="/" className="logo">
                <h3>ARTSY.</h3>
            </a>
            <nav>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href=''>Marketplace</a></li>
                    <li><a href=''>Auctions</a></li>
                    <li><a href=''>Drop</a></li>
                </ul>
            </nav>
            <div className="icons flex justify-between align-center">
                <FiSearch />
                <FiShoppingCart />
                <FiBell />
            </div>
        </header>
    )
}

export default Header