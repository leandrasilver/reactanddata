import React from 'react';
//stateless functional component until function is added

const TableButtons= () => { 
	return (
		<ul className="nav__table">
			<li><button role="button">1</button></li>
			<li><button role="button">2</button></li>
			<li><button role="button">3</button></li>
			<li><button role="button">4</button></li>
			<li><button role="button">5</button></li>
			<li><button role="button">...</button></li>
			<li><button role="button"> Next <i className="fa fa-chevron-right" aria-hidden="true"></i></button></li>
			<li><button role="button"> Last <i className="fa fa-chevron-right" aria-hidden="true"></i> <i className="fa fa-chevron-right" aria-hidden="true"></i></button></li>
		</ul>
	);
}

export default TableButtons;