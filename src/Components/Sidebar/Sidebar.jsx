import './Sidebar.css'
import { Link } from 'react-router-dom'

//Images
import Dizipro from '../../assets/img/dd.png'

const Sidebar = () =>{
    return(
        <div className="sidebar">
            <div className="sidebar-home">
                <Link to="/">
                   <img src={Dizipro} alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Sidebar