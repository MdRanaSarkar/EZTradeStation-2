import React from 'react'
import './widgetlg.css'
// import userimage from '../imgs/easycselearn.png'
function Widgetlg() {

    const Button=({type})=>{
        return <button className={"widgetlgButton "+ type}>{type}</button>;
    };
    return (
        <div className="Widgetlg">
            <h3 className="widgetlgtitle">Latest transactions</h3>
            <table className="widgetlgTable">
                <tr className="widgetlgTr">
                    <th className="widgetlgTrTh">
                        Customer
                    </th>
                    <th className="widgetlgTrTh">
                        Date
                    </th>
                    <th className="widgetlgTrTh">
                        Amount
                    </th>
                    <th className="widgetlgTrTh">
                        Status
                    </th>

                </tr>
                <tr className="widgetlgTr">
                    <td className="widgetlgUser">
                       {/* <img src={userimage} alt="easycselearn" className="widgetlgimg"></img> */}
                       <span className="widgetlgName">EasyCSELearn</span>
                    </td>
                    <td className="widgetlgTrdate">
                        25-07-2021
                    </td>
                    <td className="widgetlgTrAmount">
                        $1000
                    </td>
                    <td className="widgetlgTrStatus">
                       <Button type="Approaved"/>
                    </td>

                </tr>
                <tr className="widgetlgTr">
                    <td className="widgetlgUser">
                       {/* <img src={userimage} alt="easycselearn" className="widgetlgimg"></img> */}
                       <span className="widgetlgName">RanaSarkar</span>
                    </td>
                    <td className="widgetlgTrdate">
                        25-07-2021
                    </td>
                    <td className="widgetlgTrAmount">
                        $1000
                    </td>
                    <td className="widgetlgTrStatus">
                       <Button type="Declined"/>
                    </td>

                </tr>
                <tr className="widgetlgTr">
                    <td className="widgetlgUser">
                       {/* <img src={userimage} alt="easycselearn" className="widgetlgimg"></img> */}
                       <span className="widgetlgName">RanaSarkar</span>
                    </td>
                    <td className="widgetlgTrdate">
                        25-07-2021
                    </td>
                    <td className="widgetlgTrAmount">
                        $1000
                    </td>
                    <td className="widgetlgTrStatus">
                       <Button type="Pending"/>
                    </td>

                </tr>
            </table>
        </div>
    )
}

export default Widgetlg
