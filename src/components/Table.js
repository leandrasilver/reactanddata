import React from 'react';

class Table extends React.Component {

	render() {
		const { data } = this.props;
		console.log (data)
		const columnData = data.map((row,i)=> {
			return (
				<tr key={`row-${i+1}`}> 
					<td className="table__issuer">{row.securityName}</td>
					<td className="cell--spacer"></td>
					<td className="left--align">{row.description}</td>
					<td className="left--align">{row.currency}</td>
					<td>{row.yearsRemaining}</td>
					<td className="left--align">{row.benchmarkSecurityDescription}</td>
					<td>{row.bidSpreadVsBenchmark}</td>
					<td>{row.bidSpreadVsGocCurve}</td>
					<td>{row.bidSpreadVs3mCdor}</td>
					<td>{row.bidSpreadVs3mUsdl}</td>
					<td className="left--align">{row.readableTimestamp}</td>
					<td className="cell--spacer"></td>
					<td><i className="fa fa-signal" role="button"></i></td>
				</tr>
			);
		});

	    return (
	        <table>
	        	<thead>
	        		<tr>
	        			<th colSpan="6"></th>
		            	<th colSpan="4" className="table__spread">Spread vs.</th>
	        		</tr>
	        		<tr className="header__main">
	        			<th> Issuer <i className="fa fa-chevron-down"></i></th>
	        			<th className="cell--spacer"></th>
	        			<th> Issue Description </th>
	        			<th> Currency </th>
	        			<th> Years Remaining </th>
	        			<th> Benchmark </th>
	        			<th> Benchmark </th>
	        			<th> GoC Curve </th>
	        			<th> 3M CDOR </th>
	        			<th> 3M USDL </th>
	        			<th> Updated </th>
	        			<th className="cell--spacer"></th>
	        			<th></th>
	        		</tr>
	        	</thead>
	        	<tbody>
	        		{columnData}
	        	</tbody>
	        </table>
	    );
	}
}

Table.propTypes = {
  data: React.PropTypes.array
};

export default Table;