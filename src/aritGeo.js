function aritGeo(numbers)
{
	var arithmetics = false;
	var geometry = false;
	if(numbers.length <= 0)
	{
		return 0;
	}
	else
	{
		for(var i = 0; i <= numbers.length; i++)
		{
			if(i < numbers.length - 2)
			{
				num1 = numbers[i + 1] / numbers[i];
				num2 = numbers[i + 2] / numbers[i + 1];
				if(num1 == num2)
				{
					var geometry = true;
				}
				else
				{
					var geometry =false;
				}
			}

			if(i == numbers.length - 2)
			{
				num1 = numbers[i + 1] / numbers[i];
				num2 = numbers[i] / numbers[i - 1];
				if(num1 == num2)
				{
					var geometry = true;
				}
				else
				{
					var geometry = false;
				}
			}
		}

		for(var i = 0; i <= numbers.length; i++)
		{
			if(i < numbers.length - 2)
			{
				num1 = numbers[i + 1] - numbers[i];
				num2 = numbers[i + 2] - numbers[i + 1];
				if(num1 == num2)
				{
					var arithmetics = true;
				}
				else
				{
					var arithmetics = false;
				}
			}

			if(i == numbers.length - 2)
			{
				num1 = numbers[i + 1] - numbers[i];
				num2 = numbers[i] - numbers[i - 1];
				if(num1 == num2)
				{
					var arithmetics = true;
				}
				else
				{
					var arithmetics = false;
				}
			}
		}

		if(arithmetics)
		{
			return "Arithmetic";
		}
		else if(geometry)
		{
			return "Geometric";
		}
		else
		{
			return -1;
		}
	}

}