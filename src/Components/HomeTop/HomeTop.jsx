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
        </div>
    )
}
export default HomeTop