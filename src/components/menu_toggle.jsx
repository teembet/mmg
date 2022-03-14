import {useState} from 'react'
import MobileLogo from './mobile_logo'
import Menu from './menu'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons'
import { useMediaQuery } from 'react-responsive'
import '../styles/toggle.css'


function MenuToggle() {
  const tabletOrMobileView = useMediaQuery({ query: '(max-width: 900px)' })

    const [navbarOpen, setNavbarOpen] = useState(false)
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
      }

  return (
      <>

    <div>
        <nav className="navBar">
        <button onClick={handleToggle}>{navbarOpen ? <CloseOutlined /> : <MenuOutlined/>}</button>
        <ul className={`menuNav ${navbarOpen ? " showMenu" : "noMenu"}`}><Menu/></ul>
        </nav>
    </div>
          {tabletOrMobileView && <MobileLogo/>}
      </>
  )
}

export default MenuToggle