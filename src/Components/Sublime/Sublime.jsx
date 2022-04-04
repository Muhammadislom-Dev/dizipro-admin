import { useEffect, useState } from 'react'
import './Sublime.scss'

import Card from '../../assets/img/card.png'
const Sublime = () =>{
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setData(data))
    })
    return(
        <div className="sublime">
            <h2 className="sublime-name">Payments</h2>
             <table className='sublime-list'>
                <tr className='sublime-item'>
                    <td className='sublime-names'>Sender</td>
                </tr>
                <tr className='sublime-item'>
                    <td className='sublime-names'>Card number</td>
                </tr>
                <tr className='sublime-item'>
                    <td className='sublime-names'>Credit card</td>
                </tr>
                <tr className='sublime-item'>
                    <td className='sublime-names'>Project</td>
                </tr>
                <tr className='sublime-item'>
                    <td className='sublime-names'>Date</td>
                </tr>
             </table>

                <table className='sublime__list'>
                    {
                        data && data.map(e =>(
                            <tr className='sublime-title'>
                                <td className='sublime-full'>
                                    {e.name}
                                </td>
                                <td className='sublime-suite'>****{e.address.zipcode}</td>
                                <td className="sublime-city">
                                    <img src={Card} alt="" />
                                </td>
                                <td className="sublime-company">{e.website}</td>
                                <td className='sublime-number'>06.01.2022</td>
                            </tr>
                        ))
                    }
                </table>
        </div>
    )
}
export default Sublime