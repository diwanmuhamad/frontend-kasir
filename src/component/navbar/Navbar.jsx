import {useState} from 'react'
import './navbar.css'
import logoalan from '../../assets/logoalan.png'

const Navbar = ({setPage}) => {
    const [active, setActive] = useState('transaksi')
 return (
    <div className='navbar'>
        <div className='firstNav'>
            <div className='contentFirstCont'>
                <div className='navFirstLogoDesc'>
                    <img src={logoalan}/>
                    <h2>Alan Resto</h2>
                </div>
            </div>
        </div>
        <div className='secondNav'>
            <div className='contentFirstCont'>
            {
                active == 'transaksi'?
                <div className='navSecondLogoDesc'
                >
                    <div className='borderNotActFood'
                        onClick={()=> {setActive('food'); setPage('food')}}
                    >
                        <h3>Food</h3>
                    </div>
                    <div className='borderAct'>
                        <h3 className="active">Transaksi</h3>
                    </div>
                </div>
                :
                <div className='navSecondLogoDesc'     
                >
                      <div className='borderActFood'
                      >
                        <h3 className="active">Food</h3>
                    </div>
                    <div className='borderNotAct'
                        onClick={()=> {setActive('transaksi'); setPage('transaksi')}}
                    >
                        <h3>Transaksi</h3>
                    </div>
                </div>

            }
               
            </div>
        </div>
    </div>
 )
}

export default Navbar