import './Sublime.scss'

const Sublime = () =>{
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
        </div>
    )
}
export default Sublime