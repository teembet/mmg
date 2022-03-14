import { useNavigate } from 'react-router-dom'
import {
    PoweroffOutlined
  } from '@ant-design/icons';

function Logout() {
    const navigate = useNavigate();
	const handleClick = () => {
		navigate('/');
	}

  return (
    <>
    <div onClick={handleClick} style={{color:'#DB261B', fontSize:'18px', cursor:'pointer', paddingTop:'80px'}}>
        <PoweroffOutlined style={{paddingRight:'10px'}}/>
        <span>Logout</span>
    </div>
    </>
  )
}

export default Logout