function isEven(number) {
	if (Math.abs(number) - 2 == 2) 
	  return true;
	else if (Math.abs(number) - 2 == 1)
	  return false;
	else
	  return isEven(number -2);
	}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

