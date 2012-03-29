define(
    //The name of this module
    "three",

    //The array of dependencies
    // ["one", "two"],

    //The function to execute when all dependencies have loaded. The arguments
    //to this function are the array of dependencies mentioned above.
	function (Two) {
	        
		function Three () {
	      this.stuff = [];
	    }
	
		// console.log(Two);
	    //This will now work
	    Three.prototype = new Two();

		console.log("three.js");
	    //return the Two constructor function so it can be used by other modules.
	    return Three;
        
    }
);