import { getUserProfile } from "../api/user"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default async function Profile() {
  let userHash = localStorage.getItem("TOKEN")
  const params = useParams()
  const [profile, setProfile] = useState({})
  
  useEffect(() => {
    getUserProfile(userHash).then(setProfile)
  }, [params.id])

  useEffect(() => {
    console.log(profile);
  }, [profile])

  return <span>hi</span>
}