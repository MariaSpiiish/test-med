import { Outlet, Route, Routes } from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Contacts from "./components/Contacts/Contacts"
import Profile from "./components/Profile/Profile"
import Popup from "./components/Popup/Popup.jsx"

function App() {
  const [isOpen, setIsOpen] = useState(false);
  function Layout() {
    return (
      <>
        <Header setIsOpen={setIsOpen}/>
        <Outlet />
      </>
    )
  }

  return (
    <div className='page-container'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main setIsOpen={setIsOpen}/>}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
      </Routes>

      <Popup setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  )
}

export default App
