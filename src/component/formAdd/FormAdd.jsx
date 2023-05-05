import '../listmenu/listmenu.css'
import {useState, useRef} from 'react'
import axios from 'axios';
import logoupload from '../../assets/logoupload.png'

const FormAdd = ({setIsAdd}) => {
    const [dragActive, setDragActive] = useState(false)
    const [imageName, setImageName] = useState("")
    const [dataMenu, setDataMenu] = useState({
        nama: "",
        foto: "",
        harga: "",
    })

    const inputRef = useRef(null);

    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
          // handleFiles(e.target.files);
          setImageName(e.target.files[0].name)
          const base64 = convertToBase64(e.target.files[0])
          base64.then((res) => {setDataMenu({...dataMenu, foto: res})}).catch((err) => console.log(err))
        }
      };
      
    // triggers the input when the button is clicked
      const onButtonClick = () => {
        inputRef.current.click();
      };

    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
          setDragActive(true);
        } else if (e.type === "dragleave") {
          setDragActive(false);
        }
      };
      
      // triggers when file is dropped
      const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          // handleFiles(e.dataTransfer.files);
          setImageName(e.dataTransfer.files[0].name)
          const base64 = convertToBase64(e.dataTransfer.files[0])
          base64.then((res) => {setDataMenu({...dataMenu, foto: res})}).catch((err) => console.log(err))
         
        }
      };


      const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file);
          fileReader.onload = () => {
            resolve(fileReader.result);
          };
          fileReader.onerror = (error) => {
            reject(error);
          };
        });
      };

      const handleSimpan = () => {
        // console.log(dataMenu)
        axios.post('http://localhost:5001/api/foods/add',
        dataMenu
        ,{
            headers: {
                Accept: 'application/json',
              },
        }).then((res) => console.log(res))
        .catch((err)=> console.log(err))

        setIsAdd(false)
      }
    return (
        <div className='cardFoodCont'>
            <h4>Tambahkan Menu</h4>
            <div className='inputCon'>
                <p>Nama Menu</p>
                <input id='namaInput' type="text"
                    value={dataMenu.nama}
                    onChange={(e)=>setDataMenu({...dataMenu, nama: e.target.value})}
                ></input>
            </div>
            <div className='inputCon'>
                <p>Foto Menu</p>
                <div className={dragActive? 'divActDrag' : 'divUpload'}
                    onClick={onButtonClick}
                    onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                >
                    <div className='centerCon'>
                        <img src={logoupload}/>
                        <p>drag and drop a file here or click</p>
                    </div>
                </div>
                <p className='successNameUpload'>{imageName}</p>
                <input 
                    ref={inputRef}
                    onChange={handleChange}
                type='file' hidden></input>
            </div>
            <div className='inputCon'>
                <p>Harga Menu</p>
                <div className='hargaInputCon'>
                    <div>Rp.</div>
                    <input 
                    value={dataMenu.harga}
                    onChange={(e)=>setDataMenu({...dataMenu, harga: e.target.value})}
                    type='number'></input>

                </div>
            </div>
            <div className='btnSimpanCon'>
                <button 
                onClick={handleSimpan}
                type='button'>Simpan</button>
            </div>
        </div>
    )
}


export default FormAdd