import HomeContent from '../../Components/HomeContent/HomeContent'
import HomeTop from '../../Components/HomeTop/HomeTop'
import Section from '../../Components/Section/Section'
import './Homes.scss'


const Homes = () =>{
    return(
        <div className="home">
            <HomeContent />
            <HomeTop />
            <Section />
        </div>
    )
}

export default Homes