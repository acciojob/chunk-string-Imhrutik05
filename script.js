function stringChop(str, size) {
  // your code here
	let result = [];
	let curr = '';
	for (let i = 0; i < str.length; i++){
		let char = str[i];
		if (i === str.length % size){
			result.push(curr);
		}
		if (curr.length < size){
			curr += char;
		} else {
			result.push(curr);
			curr = char;
		}
	}	
}

// Do not change the code below

