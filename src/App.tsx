import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { useGetAuthTokenMutation } from './features/api/authApi'
import { Airports } from './pages/Airports'
import { Flights } from './pages/Flights'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

function App() {
  const [getToken, { data }] = useGetAuthTokenMutation()

  useEffect(() => {
    getToken()
      .unwrap()
      .then(({ access_token }) => {
        localStorage.setItem('accessToken', access_token)
      })
  }, [getToken])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/airports" element={<Airports />} />
        <Route path="/flights" element={<Flights />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
