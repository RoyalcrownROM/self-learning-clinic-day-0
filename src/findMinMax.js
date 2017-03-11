function findMinMax(numbers)
{
	var largestNum = 0;
	for(var i = 0; i <= numbers.length; i++)
	{
		if(i == 0)
		{
			var smallestNum = numbers[i];
			var largestNum = numbers[i];
		}
		if(numbers[i] > largestNum)
		{
			var largestNum = numbers[i];
		}
		if(numbers[i] < smallestNum)
		{
			var smallestNum = numbers[i];
		}
	}
	if(largestNum == smallestNum)
	{
		return [smallestNum];
	}
	else
	{
		return [smallestNum, largestNum];
	}
}