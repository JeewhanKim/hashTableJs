

function removeDuplicateUsingHashTable(string)
{
	// Time Complexity O(n)

	var hashTable = new Object();
	var stringSplit = string.split("");
	var result = "";

	for(var i=0; i<stringSplit.length; i++) {
		if(!hashTable.hasOwnProperty(stringSplit[i])) {
			hashTable.push(stringSplit[i]);
			result += stringSplit[i];
		}
	}

	return result;
}

function removeDuplicate(string)
{
	// ttee3443s -> te34s
	// Time Complexity On(n2) n - Squared

	var result = string.charAt(0);
	var check = false;

	for(var i=0; i<string.length; i++)
	{
		for(var j=0; j<result.length; j++)
		{
			if(result.charAt(j) == string.charAt(i)) {
				check = true;
			}
		}
		if (!check) result += string.charAt(i);
		check = false; 
	}

	return result;
}

// Object Oriented in JS
var rabbit = {};

rabbit.speak = function(line) {
	console.log("The rabbit is ~", line, "!");
};

rabbit.speak("SPEAKING");

