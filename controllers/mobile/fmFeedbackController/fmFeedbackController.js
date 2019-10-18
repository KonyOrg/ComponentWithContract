define({ 

  //Type your controller code here 
  showFeedback : function () {
    if ("" === this.view.feedback.feedbackText ||
        undefined === this.view.feedback.feedbackText){
      alert ("Please enter feedback before submitting");
    } else {
      alert("Feedback suibmitted is: "+this.view.feedback.feedbackText);
    }
  },

  callMyManageMethodOfComponent : function () {
    this.view.feedback.myManageMethod(this.view.feedback.feedbackText);
  }

});