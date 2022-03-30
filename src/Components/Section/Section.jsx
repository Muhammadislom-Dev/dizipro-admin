import { useEffect, useState } from 'react'
import './Section.scss'

const Section = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    })

    return(
        <div className="section">
            <div className="section-page">
                <ul className="section-list">
                    <li className="section-item">
                        <p className="section-name">Name or ID</p>
                    </li>
                    <li className="section-item">
                        <p className="section-name">Email</p>
                    </li>
                    <li className="section-item">
                        <p className="section-name">Username</p>
                    </li>
                    <li className="section-item">
                        <p className="section-name">Company</p>
                    </li>
                    <li className="section-item">
                        <p className="section-name">Country</p>
                    </li>
                </ul>


                <ul className='section__list'>
                    {
                        data && data.map(e =>(
                            <li className='section-title'>
                                <p className='section-names'>{e.name}</p>
                                <p className="section-username">{e.username}</p>
                                <p className='section-suite'>{e.address.suite}</p>
                                <p className="section-city">{e.address.city}</p>
                                <p className="section-company">{e.company.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export default Section