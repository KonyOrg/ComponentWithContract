define(function() {

	return {
		constructor: function(baseConfig, layoutConfig, pspConfig) {
          kony.print ("*** Entering into constructor ***");          
          //_feedback="";          
          kony.print ("*** Exiting out of constructor ***");       
		},
      
		//Logic for getters/setters of custom properties
		initGettersSetters: function() {
          defineGetter(this, "feedback", function() {            
            kony.print ("*** Entering into getFeedback ***");            
            kony.print ("*** Exiting out of getFeedback ***");            
            return this._feedback;          
          });          
          defineSetter(this, "feedback", function(feedback) {            
            kony.print ("*** Entering into setFeedback "+feedback+" ");            
            this._feedback = feedback;            
            kony.print ("*** Exiting out of setFeedback ***");          
          });
        },
      
      /*
      _submitFeedback: function () {
        kony.print ("*** Entering into _submitFeedback ***"); 
        if (null !== this.submitFeedback && undefined !== this.submitFeedback) {
          this.submitFeedback();
        } else {
          alert ("You have not defined any function aganist submitFeedback action. \n" +
                "\n The default implementation of this component is to display the feedback. \n" +
                "\n Feedback: "+this._feedback);
        }
        kony.print ("*** Exiting out of _submitFeedback ***");            
      }
      */
      
      myManageMethod : function (param1) {
        alert("In myManageMethod: "+param1);
      }
      
	};
});