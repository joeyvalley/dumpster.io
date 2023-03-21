import React from 'react'
import Header from '../Header/Header'
import Filter from '../Filter/Filter'
import { useEffect, useState } from "react";
import { getItem } from '../../api/items';
import { Params, useParams } from 'react-router-dom';
import { ShowpageCard } from '../Cards/ShowpageCard';

export default function Showpage() {
  const [searchResults, setSearchResults] = useState(null)
  const params = useParams()

  useEffect(() => {
    const workAround = async () => {
      const results = await getItem(params.id)
      setSearchResults(results)
    };
    workAround();
  }, [])


  const [auth, setAuth] = useState()

  useEffect(() => {
    localStorage.getItem("TOKEN") ? setAuth(true) : setAuth(false)
  }, [])

  const [selectedFilter, setSelectedFilter] = useState(0);

  return (
    <>
      <Header auth={auth} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <ShowpageCard props={searchResults} />
    </>
  )
}