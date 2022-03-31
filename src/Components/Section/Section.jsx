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
                <table className="section-list">
                    <tr className="section-item">
                        <td className="section-name">Name or ID</td>
                    </tr>
                    <tr className="section-item">
                        <td className="section-name">Email</td>
                    </tr>
                    <tr className="section-item">
                        <td className="section-name">Username</td>
                    </tr>
                    <tr className="section-item">
                        <td className="section-name">Company</td>
                    </tr>
                    <tr className="section-item">
                        <td className="section-name">Country</td>
                    </tr>
                </table>


                <table className='section__list'>
                    {
                        data && data.map(e =>(
                            <tr className='section-title'>
                                <td className='section-names'>
                                    {e.name}
                                </td>
                                <td className="section-username">{e.username}</td>
                                <td className='section-suite'>{e.address.suite}</td>
                                <td className="section-city">{e.address.city}</td>
                                <td className="section-company">{e.company.name}</td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}
export default Section