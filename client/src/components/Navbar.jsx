import Nav from './Nav';
import { TbLayoutDashboard } from 'react-icons/tb';
import { TbTransactionRupee } from 'react-icons/tb';
import { TbReportSearch } from "react-icons/tb";

const Navbar = ({ activePage, setActivePage }) => {
	return (
		<div className='bg-primary h-full w-full rounded-lg p-1 drop-shadow-2xl'>
			<Nav
				label={'Dashboard'}
				icon={TbLayoutDashboard}
                isActive={activePage === 'dashboard'}
				onClick={() => setActivePage('dashboard')}
                />
			<Nav
				label={'Transactions'}
				icon={TbTransactionRupee}
                isActive={activePage === 'transaction'}
				onClick={() => setActivePage('transaction')}
			/>
			<Nav
				label={'Reports'}
				icon={TbReportSearch}
                isActive={activePage === 'report'}
				onClick={() => setActivePage('report')}
			/>
		</div>
	);
};

export default Navbar;
