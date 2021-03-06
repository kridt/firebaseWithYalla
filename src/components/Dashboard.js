import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const admin = false;
  console.log(admin);
  

  
    
      /* function displayNotification() {
        if (Notification.permission === 'granted') {
          navigator.serviceWorker.getRegistration().then(function(reg) {
            reg.showNotification('Suuup, just an notification', {
              vibrate: [200, 100, 200, 100, 200]
            });
          });
        }
      } */
    
  

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
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
         <div><strong>Email:</strong> {currentUser.email}</div>
          <strong>User ID:</strong> {currentUser.uid}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Opdater Profil
          </Link>
        </Card.Body> 
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Ud
        </Button>
      </div>
    </>
  )
}
