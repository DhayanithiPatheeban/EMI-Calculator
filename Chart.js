import React from 'react'

import { PieChart } from '@rsuite/charts';

export default function Chart(props) {



const sampleData = [
	['Total Amount]', 20] ,
	['Interest %' , 50],
	
];

return (
	<div style={{
	display: 'block', width: 300, paddingLeft: 30
	}}>
	<center><h4>EMI Chart</h4></center>
	<PieChart name="" data={sampleData} />
	</div >
);
}
