import '../listmenu/listmenu.css'
import {useState, useEffect} from 'react';
import axios from 'axios';

const MenuTable = ({setIsAdd}) => {
    const [listData, setListData] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:5001/api/foods', {
            headers: {
                Accept: 'application/json',
              }
        }).then(res=> {
            setListData(res.data.data)
            // setIsAdd(false)
        }).catch(err=>console.log(err))
        
    }, [])
    return (
        <div className='cardFoodCont'>
            <div className='btnAddFoodCon'>
                <button 
                onClick={() => {setIsAdd(true);
                }}
                type='button'>+ Tambah Menu</button>
            </div>
            <table>
                <thead>
                    <tr id='titleTable'>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Foto</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listData.map((el, idx) => {
                            return (
                                <tr key={idx+el.nama}>
                                    <td>{idx+1}</td>
                                    <td>{el.nama}</td>
                                    <td><img src={el.foto} height={'70px'} width={'70px'}/></td>
                                    <td>{el.harga}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MenuTable