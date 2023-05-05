import {useState} from 'react'
import './listmenu.css'

import MenuTable from '../menuTable/MenuTable';
import FormAdd from '../formAdd/FormAdd';

const ListMenu = () => {
   
    const [isAdd, setIsAdd] = useState(false)
   

    return (
        <div className='mainContList'>
            <div className='secondContList'>
                {
                    !isAdd?
                    <h4>Tambahkan menu makanan yang ada di resto</h4>
                    :
                    <h4></h4>
                }
                {
                    !isAdd?
                        <MenuTable setIsAdd={setIsAdd}/>
                        :
                        <FormAdd setIsAdd={setIsAdd}/>
                        
                }
 
            </div>
        </div>
    )
}

export default ListMenu