define(
    //The name of this module
    "one",

    //The array of dependencies
    // ["two", "three"],

    //The function to execute when all dependencies have loaded. The arguments
    //to this function are the array of dependencies mentioned above.	
	function(Three) {

		function One () {
		  this.stuff = [];
		}
		
		One.prototype = new Three();

		console.log("one.js");
		//return the One constructor function so it can be used by other modules.
		return One;	
    }
);