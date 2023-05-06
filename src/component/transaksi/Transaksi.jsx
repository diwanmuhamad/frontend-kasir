import './transaksi.css'
import ListMenuTransaksi from '../TransaksiMenu/ListMenuTransaksi'
import personIcon from '../../assets/personIcon.png'
import {useState, useEffect} from 'react'
import { changeRupiah } from '../../utlis/priceRupiah'
import { toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PayModal from '../PayModal/PayModal'

const Transaksi = () => {
    const [buyData, setBuyData] = useState([])
    const [totalPrice, setTotalPrice] = useState("")
    const [isPayOpen, setIsPayOpen] = useState(false)
    const handleClearCart = () => {
        setBuyData([])
        setTotalPrice("")
        localStorage.removeItem("buyData");
        localStorage.removeItem("price");
    }

    const handlePrint = () => {
        window.print()
    }

    const handleSave = () => {
        localStorage.setItem("buyData", JSON.stringify(buyData));
        localStorage.setItem('price', totalPrice)
        toast.success("Bill Saved Successfully", {
            position: toast.POSITION.TOP_CENTER
          });
    }

    const handleAddMenu = (menu) => {
        let tempArr = [...buyData]
        let idx = tempArr.findIndex((el)=> {
            return el._id == menu._id
        })
        // console.log(idx)
        if (idx !== -1) {
            tempArr[idx].count += 1
        }
        else {
            let obj = {...menu}
            obj.count = 1
            tempArr.push(obj)
        }

        setBuyData(tempArr)
        let total = 0
        tempArr.forEach((item) => {
            total += item.count * item.harga
        })
        setTotalPrice(total)
        // console.log(tempArr)
    }

    useEffect(()=> {
        let menuData = JSON.parse(localStorage.getItem("buyData"));
        let price = localStorage.getItem("price")
        if (menuData) {
            setBuyData(menuData)
        }

        if (price) {
            setTotalPrice(price)
        }
    }, [])
    return (
        <div className='mainTransCon' id='transConFood'>
            <div className='secTransCon'>
                <ListMenuTransaksi handleAddMenu={handleAddMenu}/>
                <div className='payMainCon'>
                    <div className='cardPayCon'>
                        <div className='headerIcon'>
                            <img src={personIcon}/>
                            <h4>Pesanan</h4>
                        </div>
                        <div className='MenuCart'>
                            {
                                buyData.map((el,idx) => {
                                 return(
                                    <div className="menuListPay" key={idx+el.nama}>
                                        <img src={el.foto}/>
                                        <p>{el.nama}</p>
                                        <p>x {el.count}</p>
                                        <h4>{changeRupiah(el.count*el.harga)}</h4>
                                    </div>
                                 )   
                                })
                            }
                        </div>
                        <div className='btnActionCon'>
                            <button id="clearBtn" type="button"
                            onClick={handleClearCart}
                            >Clear Cart</button>
                            <div className='btnDuoCon'>
                                <button 
                                    onClick={handleSave}
                                type="button">Save Bill</button>
                             
                                <button 
                                    onClick={handlePrint}
                                type="button">Print Bill</button>
                            </div>
                            <button 
                            onClick={()=>setIsPayOpen(true)}
                            id='chargeBtn' type="button">Charge {changeRupiah(totalPrice)}</button>
                        </div>
                    </div>
                </div>

            </div>
            {
                isPayOpen && <PayModal buyData={buyData} totalPrice={totalPrice} setIsPayOpen={setIsPayOpen}/>
            }
        </div>
    )
}

export default Transaksi