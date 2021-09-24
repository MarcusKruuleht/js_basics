const firstname = 'Kadi';
const surname = 'Tamm';
const age = '20';
const tags = 'arendus,veeb';

let val;
//concatenation


// templating - es6
val = `
	<ul>
		<li>Eesnimi: ${firstname}</li>
		<li>Perenimi: ${surname}</li>
		<li>Vanus: ${age}</li>
		<li>Alad: ${tags}</li>
	</ul>
`;
console.log(val);
document.body.innerHTML = val;