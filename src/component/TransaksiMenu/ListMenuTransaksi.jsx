import './listtransaksimenu.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {changeRupiah} from '../../utlis/priceRupiah'

const ListMenuTransaksi = ({handleAddMenu}) => {
    const [listData, setListData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5001/api/foods', {
            headers: {
                Accept: 'application/json',
              }
        }).then(res=> {
            setListData(res.data.data)
            // if (res.data.data.length > 4) {
            //     document.getElementById('conFood').style.height = '100%';
            // }
            // else {
            //     document.getElementById('conFood').style.height = '100vh';
            // }
           
        }).catch(err=>console.log(err))
        
    }, [])
    return (
        <div className='menuCon'>
            {
                listData.map((el, idx) => {
                    return (
                        <div 
                        onClick={() => handleAddMenu(el)}
                        key={idx+el.nama} className='cardMenuTrans'>
                            <div className='imgConTrans'>
                                <img src={el.foto}/>
                            </div>
                            <div className='footerConTrans'>
                                <h4>{el.nama}</h4>
                                <p>{changeRupiah(el.harga)}</p>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default ListMenuTransaksi