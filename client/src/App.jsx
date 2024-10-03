import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Transaction from './pages/Transaction';
import Reports from './pages/Reports';

const App = () => {
	const [activePage, setActivePage] = useState('dashboard');

	return (
		<div className='h-[100vh] bg-secondary flex justify-evenly items-center'>
			<div className='w-1/6 h-[96vh] m-2'>
				<Navbar activePage={activePage} setActivePage={setActivePage} />
			</div>
			<div className='h-[96vh] w-full m-2'>
				{activePage === 'dashboard' && <Dashboard />}
				{activePage === 'transaction' && <Transaction />}
				{activePage === 'report' && <Reports />}
			</div>
		</div>
	);
};

export default App;
