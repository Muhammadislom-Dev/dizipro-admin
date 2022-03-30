import './HomeTop.scss'
import { Link } from 'react-router-dom'

const HomeTop = () => {
    return(
        <div className="hometop">
            <div className="hometop-page">
                <ul className="hometop-list">
                    <li className="hometop-item">
                        <Link className="hometop-link" to="/all">
                            All
                        </Link>
                    </li>
                    <li className="hometop-item">
                        <Link className="hometop-link" to="/all">
                            Not Seen
                        </Link>
                    </li>
                    <li className="hometop-item">
                        <Link className="hometop-link" to="/all">
                            Saved
                        </Link>
                    </li>
                    <li className="hometop-item">
                        <Link className="hometop-link" to="/all">
                            Blocked
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="hometop-bloc">
                <ul className="hometop__list">
                    <li className="hometop__item">
                        <div className="hometop-box">
                            <input type="text" placeholder='Name or ID' className="hometop-input" />
                            <button className="hometop-btn">Search</button>
                        </div>
                    </li>
                    <li className="hometop__items">
                        <Link className='hometop__link'>Filters</Link>
                    </li>
                    <li className="hometop__itemes">
                        <Link className='hometop__links'>Only Women</Link>
                    </li>
                    <li className="hometop__itemes">
                        <Link className='hometop__links'>Only men</Link>
                    </li>
                    <li className="hometop__itemes">
                        <Link className='hometop__links'>A-Z</Link>
                    </li>
                    <li className="hometop__itemes">
                        <Link className='hometop__links'>Oldest</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default HomeTop