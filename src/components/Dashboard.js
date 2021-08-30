import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import axios from "axios"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [personalData, setPersonalData] = useState({})

  
  
    function test() {
      axios.get("https://yalla-auth-production-default-rtdb.europe-west1.firebasedatabase.app/")
      .then((response)=> setPersonalData(response))
    }
  

  console.log(personalData);

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }
  



  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profil</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Opdater Profil
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button onClick={test}>Test</Button>
        <Button variant="link" onClick={handleLogout}>
          Log Ud
        </Button>
      </div>
    </>
  )
}
