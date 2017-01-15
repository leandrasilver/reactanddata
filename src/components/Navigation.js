import React from 'react';
//stateless functional component until function is added

const Navigation = () => { 
	return (
		<ul className="nav__main">
			<li className="is--selected"><a href="">Secondary Levels</a></li>
			<li><a href="">New Issue Pricing Benchmarks- CAN</a></li>
			<li><a href="">New Issue Pricing Benchmarks- USD</a></li>
			<li><a href="">Swap Rates- CAD</a></li>
			<li><a href="">Swap Rates- USD</a></li>
		</ul>
	);
}

export default Navigation;