const getTheMostFrequentChar = (str: string) => {

	const map = new Map();

	for(let i =0;i<str.length;i++)
	{
		if(!isChar(str[i]))
		{
			continue;
		}

		if(map.has(str[i]))
		{
			const nextValue = map.get(str[i]) + 1;
			map.set(str[i], nextValue);
		}
		else{
			map.set(str[i], 1);
		}
	}

	let theMostFrequentChar = Array.from(map.keys())[0];
	let maxFrequency = 0;

	map.forEach((value, key) => {
		if(value > maxFrequency)
		{
			maxFrequency = value;
			theMostFrequentChar = key;
		}
	});

	console.log(`Char ${theMostFrequentChar} number: ${maxFrequency}`);

}

const isChar = (char: string) => {
	const charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

	if(charArray.includes(char.toLowerCase()))
	{
		return true;
	}

	return false;
}

getTheMostFrequentChar("aaavvvBBBBBBBBBBBBBBBBBBBBBBBB55555555555bbbbfffffgggggggasdfgsdwert3tdfgdfgdfg454567567r44444444444444444444444444");