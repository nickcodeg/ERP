const Nav = ({ label, icon: Icon, onClick, isActive }) => {
	return (
		<div
			className={`p-2 m-4 rounded-md drop-shadow-xl hover:scale-105 flex items-center justify-between ${
				isActive ? 'bg-heavy text-secondary' : 'bg-secondary text-heavy'
			}
           } font-bold cursor-pointer`}
			onClick={onClick}
		>
			<Icon />
			<h2>{label}</h2>
		</div>
	);
};

export default Nav;
