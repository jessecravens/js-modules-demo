define(
    //The name of this module
    "two",

    //The array of dependencies
    // ["one", "three"],

    //The function to execute when all dependencies have loaded. The arguments
    //to this function are the array of dependencies mentioned above.
	function (One) {
	        
		function Two () {
	      this.stuff = [];
	    }

	    //This will now work
		// console.log(One);
	    Two.prototype = new One();

		console.log("two.js");
	    //return the Two constructor function so it can be used by other modules.
	    return Two;
        
    }
);