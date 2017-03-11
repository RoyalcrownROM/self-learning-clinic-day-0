(function() {  
	'use strict';  

	describe('Min-Max Numbers in a List: ', function () {
		describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {
			it('should return [1,4] for [1, 2, 3 , 4]', function () {        
				expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);      
			});

			it('should return [4, 6] for [6, 4]', function () {        
				expect(findMinMax([6, 4])).toEqual([4, 6]);      
			});

			it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {        
				expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);      
			});

			it('should return [8, 78] for [45, 67,78,19,8]', function(){
				expect(findMinMax([45, 67,78,19,8])).toEqual([8, 78]);
			})  

			it('should return [12, 90] for [90, 76, 12, 56, 68]', function(){
				expect(findMinMax([90, 76, 12, 56, 68])).toEqual([12, 90]);
			}) 

			it('should return [23, 28] for [23, 24, 25, 26, 27, 28]', function(){
				expect(findMinMax([23, 24, 25, 26, 27, 28])).toEqual([23, 28]);
			}) 

			it('should return [100, 600] for [400, 200, 600, 100]', function(){
				expect(findMinMax([400, 200, 600, 100])).toEqual([100, 600]);
			})
		});

		describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () 
		{
			it('should return [4] for [4, 4, 4, 4]', function () {        
				expect(findMinMax([4, 4, 4, 4])).toEqual([4]);      
			});

			it('should return [5] for [5, 5, 5, 5, 5] ', function(){
				expect(findMinMax([5, 5, 5, 5, 5])).toEqual([5]);
			})

			it('should return [17] for [17, 17, 17, 17]', function(){
				expect(findMinMax([17, 17, 17, 17])).toEqual([17]);
			})

			});  
	}); 
})();