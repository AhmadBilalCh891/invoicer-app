import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavBar = () => {
	const location = useLocation();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('profile'))
	);

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	if (!user) return null;

	return (
		<div>
			<nav className='navbar'>
				<ul className='navbar-nav'>
					<li className='logo'>
						<a href='/dashboard' className='nav-link'>
							<span className='link-text logo-text'>
								<img
									style={{ width: '160px' }}
									src='https://i.postimg.cc/0QbRp47V/Arc-Invoice-Logo.png'
									alt='invoicer'
								/>
							</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-arrow-right'>
								<line x1='5' y1='12' x2='19' y2='12'></line>
								<polyline points='12 5 19 12 12 19'></polyline>
							</svg>
						</a>
					</li>
					<li className='nav-item'>
						<Link to='/dashboard' className='nav-link'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-pie-chart'>
								<path d='M21.21 15.89A10 10 0 1 1 8 2.83'></path>
								<path d='M22 12A10 10 0 0 0 12 2v10z'></path>
							</svg>
							<span className='link-text'>Dashboard</span>
						</Link>
					</li>

					<li className='nav-item'>
						<a href='/invoice' className='nav-link'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-plus'>
								<line x1='12' y1='5' x2='12' y2='19'></line>
								<line x1='5' y1='12' x2='19' y2='12'></line>
							</svg>
							<span className='link-text'>Create</span>
						</a>
					</li>
					<li className='nav-item'>
						<a href='/invoices' className='nav-link'>
							<svg
								version='1.0'
								xmlns='http://www.w3.org/2000/svg'
								width='32.000000pt'
								height='32.000000pt'
								viewBox='0 0 32.000000 32.000000'
								preserveAspectRatio='xMidYMid meet'>
								<g
									transform='translate(0.000000,32.000000) scale(0.100000,-0.100000)'
									fill='White'
									stroke='none'>
									<path
										d='M60 160 l0 -130 80 0 c47 0 80 4 80 10 0 6 -30 10 -70 10 l-70 0 0
                    110 0 110 50 0 c49 0 50 -1 50 -30 0 -27 3 -30 30 -30 17 0 30 -4 30 -10 0 -5
                    5 -10 10 -10 21 0 9 38 -23 68 -30 30 -38 32 -100 32 l-67 0 0 -130z m155 80
                    c3 -5 1 -10 -4 -10 -6 0 -11 5 -11 10 0 6 2 10 4 10 3 0 8 -4 11 -10z'
									/>
									<path
										d='M100 180 c0 -6 27 -10 60 -10 33 0 60 4 60 10 0 6 -27 10 -60 10 -33
                    0 -60 -4 -60 -10z'
									/>
									<path
										d='M256 143 c-22 -30 -13 -56 23 -61 30 -5 27 -32 -4 -32 -29 0 -31 -5
                    -10 -27 14 -13 17 -12 35 9 11 12 19 28 20 33 0 17 -22 35 -42 35 -10 0 -18 7
                    -18 15 0 9 9 15 25 15 29 0 31 6 11 26 -18 18 -18 18 -40 -13z'
									/>
									<path
										d='M100 130 c0 -5 16 -10 35 -10 19 0 35 5 35 10 0 6 -16 10 -35 10 -19
                    0 -35 -4 -35 -10z'
									/>
									<path
										d='M190 130 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
                    -15 -4 -15 -10z'
									/>
									<path
										d='M100 90 c0 -5 16 -10 35 -10 19 0 35 5 35 10 0 6 -16 10 -35 10 -19
                    0 -35 -4 -35 -10z'
									/>
									<path
										d='M190 90 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
                    -15 -4 -15 -10z'
									/>
								</g>
							</svg>
							<span className='link-text'>Invoices</span>
						</a>
					</li>
					<li className='nav-item'>
						<a href='/products' className='nav-link'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-layers'>
								<polygon points='12 2 2 7 12 12 22 7 12 2'></polygon>
								<polyline points='2 17 12 22 22 17'></polyline>
								<polyline points='2 12 12 17 22 12'></polyline>
							</svg>
							<span className='link-text'>Products</span>
						</a>
					</li>
					<li className='nav-item'>
						<a href='/customers' className='nav-link'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-users'>
								<path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
								<circle cx='9' cy='7' r='4'></circle>
								<path d='M23 21v-2a4 4 0 0 0-3-3.87'></path>
								<path d='M16 3.13a4 4 0 0 1 0 7.75'></path>
							</svg>
							<span className='link-text'>Customers</span>
						</a>
					</li>
					<li className='nav-item' id='themeButton'>
						<a href='/settings' className='nav-link'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-settings'>
								<circle cx='12' cy='12' r='3'></circle>
								<path
									d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 
                2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 
                2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 
                2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 
                0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 
                1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 
                1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 
                2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 
                2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 
                0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
							</svg>
							<span className='link-text'>Settings</span>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
