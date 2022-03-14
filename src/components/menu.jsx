import { NavLink } from 'react-router-dom';
import MobileLogo from './mobile_logo';
import Logo from './logo';
import Logout from '../components/logout';
import home from '../icons/home.png';
import send from '../icons/send.png';
import invest from '../icons/invest.png';
import loan from '../icons/loan.png';
import cards from '../icons/cards.png';
import trans from '../icons/trans.png';
import market from '../icons/market.png';
import settings from '../icons/settings.png';
import '../styles/menu.css';
import { useMediaQuery } from 'react-responsive'


function Menu() {
  const laptopView = useMediaQuery({
    query: '(min-width: 999px)'
  })

	return (
		<>
			<div className='menu-body'>
				<div style={{marginBottom:'30px'}} className='logo'>
          {laptopView && <Logo/>}
				</div>

				<NavLink
					to='/'
					className='navlink'>
					{' '}
					<img src={home} alt='home' id='menu_icon' /> Home
				</NavLink> 
        

				<NavLink to='/' className='navlink'>
					{' '}
					<img src={send} alt='send_money' id='menu_icon' /> Send Money
				</NavLink>

				<NavLink to='/' className='navlink'>
					{' '}
					<img src={invest} alt='investment' id='menu_icon' /> Investment
				</NavLink>

				<NavLink
					to='/'
					className='navlink'
					style={({ isActive }) =>
						isActive
							? {
									color: '#489494',
									background: '#D7ECEC',
							  }
							: { color: '#489494' }
					}
				>
					{' '}
					<img src={loan} alt='loan' id='menu_icon' /> Loan
				</NavLink>

        {laptopView && 
				<NavLink to='/' className='navlink'>
					{' '}
					<img src={cards} alt='cards' id='menu_icon' /> Cards
				</NavLink>}

        {laptopView && 
				<NavLink to='/' className='navlink'>
					{' '}
					<img src={trans} alt='trans' id='menu_icon' /> Transactions
				</NavLink>}

				<NavLink to='/' className='navlink'>
					{' '}
					<img src={market} alt='marketplace' id='menu_icon' /> Marketplace
				</NavLink>

				<NavLink to='/' className='navlink'>
					{' '}
					<img src={settings} alt='settings' id='menu_icon' />
					Settings
				</NavLink>
        

				<div style={{ marginTop: '' }}>
					<Logout />
				</div>
			</div>
		</>
	);
}

export default Menu;
