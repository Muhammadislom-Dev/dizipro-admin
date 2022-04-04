import './Aside.scss'

//Images
import Chair from '../../assets/img/chair.png';
import Table from '../../assets/img/table.png';
import City from '../../assets/img/city.png';

const Aside = () =>{
    return(
        <div className="aside">
            <p className="aside__back">
               Back
            </p>
            <div className="aside__list">
                <h2 className="aside__name">3D armchair  </h2>
                <button className="aside__btn">
                    Submit project
                </button>
            </div>
             
             <div className="aside-page">
                <div className="aside__page">
                    <p className="aside__back">
                        Project overview
                    </p>
                    <p className="aside__text">
                    Model contain 4 parts ready for print with keys and also a presupported <br /> version. This model on 100% scale is 16cm tall, but can be printed larger.
                    </p>
                    <p className="aside__back">
                        Photos
                    </p>
                    <ul className="aside__lists">
                        <li className="aside__item">
                            <img className='aside__img' src={Table} alt="" />
                        </li>
                        <li className="aside__item">
                            <img className='aside__img' src={Chair} alt="" />
                        </li>
                        <li className="aside__item">
                            <img className='aside__img' src={City} alt="" />
                        </li>
                    </ul>
                </div>

                <div className="aside__box">
                    <div className="aside__left">
                        <p className="aside__back">
                            3D skills
                        </p>
                        <ul className="aside-list">
                            <li className='aside-item'>
                                <p className="aside__texts">
                                3D modelling
                                </p>
                            </li>
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    3D Print modelling
                                </p>
                            </li>
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    3D scanning
                                </p>
                            </li>
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    Animating
                                </p>
                            </li>
                        </ul>  
                    </div>
                    <div className="aside__left">
                        <p className="aside__back">
                        3D software
                        </p>
                        <ul className="aside-list">
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    Autodesk 3D max
                                </p>
                            </li>
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    Lumion
                                </p>
                            </li>
                            <li className='aside-item'>
                                <p className="aside__texts">
                                    ZBrush
                                </p>
                            </li>
                        
                        </ul>  
                    </div>
                </div>
             </div>
        </div>
    )
}
export default Aside