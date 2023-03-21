import React from 'react'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import { useEffect, useState } from "react";


export default function Showpage() {

    const [auth, setAuth] = useState()
  
    useEffect(() => {
      localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
    }, [])
  
    const [selectedFilter, setSelectedFilter] = useState(0);
  
    return (
      <>
        <Header auth={auth} />
        <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      </>
    )
  }