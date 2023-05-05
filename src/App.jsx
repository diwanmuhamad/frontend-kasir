import { useState, useEffect } from 'react'
import './App.css'
import ax from './utlis/axios'
import axios from 'axios'
import { Navbar, Transaksi, ListMenu } from './component'

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
    </div>
  )
}

export default App
