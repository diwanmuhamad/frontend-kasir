import './paymodal.css'
import react, { useState } from 'react'
// import '../listmenu/listmenu.css'
import {changeRupiah} from '../../utlis/priceRupiah'

const PayModal = ({buyData, totalPrice, setIsPayOpen}) => {
    const [returnPrice, setReturnPrice] = useState("")
    const [cash, setCash] = useState("")
    const handlePay = () => {
        let returnCash = cash - totalPrice
        setReturnPrice(returnCash)
    }

    return (
        <div className='mainBackAll'>
            <div className='modalCon'>
                <div className='modalSecCon'>
                    <h3>Detail Pesanan</h3>
                    <div className='contentModalCon'>
                        <table id='tableModal'>
                            <thead>
                                <tr id='titleTableModal'>
                                    <th>#</th>
                                    <th>Nama</th>
                                    <th>Foto</th>
                                    <th>Harga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    buyData.map((el, idx) => {
                                        return (
                                            <tr key={idx+el.nama}>
                                                <td>{idx+1}</td>
                                                <td>{el.nama} x{el.count}</td>
                                                <td><img src={el.foto} height={'50px'} width={'50px'}/></td>
                                                <td>{changeRupiah(el.harga*el.count)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        {/* <div className='grayLine'></div> */}
                        <div
                         className='payInputCon'
                        >
                            <h4>Uang Pembeli (RP)</h4>
                            <div className='paymentInput'>
                                <input 
                                value={cash}
                                onChange={(e)=>setCash(e.target.value)}
                                type='number'></input>
                            </div>
                            <div className='btnDuoConModal'>
                                <button 
                                onClick={()=>setIsPayOpen(false)}
                                id="closeBtn"
                                type="button">Close</button>
                                <button 
                                onClick={handlePay}
                                id="payBtn"
                                type="button">Pay!</button>
                            </div>
                            <div className='priceText'>
                                <h4>Kembalian :</h4>
                                <h3>{changeRupiah(returnPrice)}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PayModal