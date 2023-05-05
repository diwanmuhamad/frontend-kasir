import { useState, useEffect } from 'react'
import './App.css'
import ax from './utlis/axios'
import axios from 'axios'
import { Navbar, Transaksi, ListMenu } from './component'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [page, setPage] = useState("transaksi")
  return (
    <div className='app'>
      <Navbar setPage={setPage}/>
      {
        page == 'transaksi'?
        <Transaksi/>
        :
        <ListMenu/>
      }
      <ToastContainer/>
    </div>
  )
}

export default App
