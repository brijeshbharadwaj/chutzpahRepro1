pavlov.specify("sometestModule", function(){
    "use strict";
	// In a test without code coverage, the below line will execute correctly.
	var theObject = new myClasses.myClass();
	
	describe("someTest", function () {
	    it("is set correctly", function () {
            assert(theObject.boom).isEqualTo(5);
        });
    });
	
});