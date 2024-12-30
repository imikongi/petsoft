import React from 'react';
import BackgroundPattern from '@/components/BackgroundPattern';
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';

const Layout = ({children}: {children: React.ReactNode}) => {
	return (
		<>
			<BackgroundPattern/>
			<div className={'max-w-[1050px] mx-auto'}>
				<AppHeader/>
				{children}
				<AppFooter/>
			</div>
		</>
	);
};

export default Layout;