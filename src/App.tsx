
import { useState } from 'react'
import './App.css'

import { Menu } from './Menu/Menu'
import { Modal } from './Modal/Modal'

function App() {

 const itemsmenu = [
  {value:"Главная", href:"/main", icon:"anchor"},
  {value:"Услуги", href:"/service", icon:"api"},
  {value:"Магазин", href:"/shop", icon:"android"},
  {value:"О нас", href:"/about", icon:"label"}
] 

  const [visible, setVisibleSidebar] = useState(false)
  const [open, setOpenModal] = useState(false)

  return (
    <div className='app'> 
      <nav>
        <div className="btn-burger" onClick={()=>setVisibleSidebar(!visible)}>
          <span />
        </div>
        <span onClick={()=>setOpenModal(true)}>
          Вызвать авторизацию
        </span>
      </nav>
      <main >
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos maxime nihil officiis nobis error quo reiciendis fuga dolorem corrupti voluptatum optio dolorum mollitia ipsam quaerat similique sit voluptatem, ratione et?</p>
      </main>
      {visible && <Menu  active={visible} itemsprops={itemsmenu} onClose={()=>setVisibleSidebar(false)}/>}
      {open && <Modal closeModal={()=>setOpenModal(false)}/>} 
    </div>
  )

}

export default App;
