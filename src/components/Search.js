import React from 'react';
//stateless functional component until function is added

const Search = () => { 
	return (
		<div className="search__container">
			<h2>Secondary Levels</h2>
			<div className="search__bar">
				<input type="text" placeholder="Select Issuer"/>
				<button>Filter</button>
			</div>
			<div className="updown">
				<button className="upload"> <i className="fa fa-upload" aria-hidden="true"></i>Upload</button>
				<button className="download"><i className="fa fa-download" aria-hidden="true"></i>Download</button>
			</div>
		</div>
	);
}

export default Search;