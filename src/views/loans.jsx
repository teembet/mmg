import React from 'react';
import ShowDate from '../components/date';
import Menu from '../components/menu';
import img1 from '../images/loans/one_month.png';
import img2 from '../images/loans/wc_overdraft.png';
import img3 from '../images/loans/op_overdraft.png';
import img4 from '../images/loans/tnt.png';
import img5 from '../images/loans/infrastructure.png';
import img6 from '../images/loans/personal.png';
import img7 from '../images/loans/pawn.png';
import img8 from '../images/loans/fx.png';
import '../styles/loans.css';
import { useMediaQuery } from 'react-responsive';
import MenuToggle from '../components/menu_toggle';

function Loans() {
	const laptopView = useMediaQuery({
		query: '(min-width: 999px)',
	});
	const tabletOrMobileView = useMediaQuery({ query: '(max-width: 900px)' });
	return (
		<>
			{laptopView && <Menu />}
			<div className='loans_view'>

        {/* MENU TOGGLE FOR MOBILE */}
				<div className='menu_and_logo'>
					{tabletOrMobileView && <MenuToggle />}
				</div>

        <div className='loans_body'>
        <div>
				<h1 style={{ marginBottom: '0' }}>Loans</h1>
				<ShowDate />
        </div>

				<div className='loan_types'>
					<div className='loan_types_row'>
							<div className='loan_type_card'>
									<img
										src={img1}
										alt=''
										style={{ height: '150px',margin: '37px 0 12px 0' }}
									/>{' '}
									<br />
									<span id='card_title'>One Month Loan</span>
									<p id='class_p'>
										Access funds for personal upkeep for 30 days only
									</p>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '' }}>
                  <div className='block-card'>

									<img src={img2} alt='' style={{ marginBottom: '10px' }} />{' '}
									<br />
									<span id='card_title'>Working Capital Overdraft</span>
									<p id='class_p'>
										Access continuous funds to grow your business stocks and
										inventory
									</p>
                  </div>
								</div>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '12px' }}>
									<img src={img3} alt='' style={{ marginBottom: '8px' }} />{' '}
									<br />
									<span id='card_title'>Operation Overdraft</span>
									<p id='class_p'>Financing for your business operations</p>
								</div>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '45px' }}>
									<img src={img4} alt='' style={{ marginBottom: '15px' }} />{' '}
									<br />
									<span id='card_title'>T and T Spread Loan</span>
									<p id='class_p'>
										Purchase phones, generators and vehicles on a reasonable
										payment plan from T and T Deals Market
									</p>
								</div>
							</div>
						</div>

						<div className='loan_types_row'>
							<div className='loan_type_card'>
								<div style={{ marginTop: '40px' }}>
									<img src={img5} alt='' style={{ marginBottom: '10px' }} />{' '}
									<br />
									<span id='card_title'>Infrastructure Loan</span>
									<p id='class_p'>
										Facility for your business to purchase vehicles, assets, and
										building upgrades.
									</p>
								</div>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '45px' }}>
									<img src={img6} alt='' style={{ marginBottom: '15px' }} />{' '}
									<br />
									<span id='card_title'>Personal Loan</span>
									<p id='class_p'>Instant funds for your personal expenses.</p>
								</div>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '8px' }}>
									<img src={img7} alt='' /> <br />
									<span id='card_title'>Pawn Loan</span>
									<p id='class_p'>
										Get cash value on temporary sale of your items within
										72hours.
									</p>
								</div>
							</div>

							<div className='loan_type_card'>
								<div style={{ marginTop: '15px' }}>
									<img src={img8} alt='' /> <br />
									<span id='card_title'>FX Line</span>
									<p id='class_p'>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
									</p>
								</div>
							</div>
					</div>
				</div>
			</div>
      </div>

		</>
	);
}

export default Loans;
