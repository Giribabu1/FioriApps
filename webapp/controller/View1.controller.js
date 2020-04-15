sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function(Controller,message,mbox) {
	"use strict";
	
	return Controller.extend("oft.formFirstSimpleForm.controller.View1", {
 
        returnIdListOfRequiredFields: function()
        {
            var requiredInputs;
            return requiredInputs = ['Name1', 'Age'];
        },

        validateEventFeedbackForm: function(requiredInputs) {
                var _self = this;
                var valid = true;
                requiredInputs.forEach(function (input) {
                    var sInput = _self.getView().byId(input);
                    if (sInput.getValue() === "" || sInput.getValue() === undefined) {
                        valid = false;
                        sInput.setValueState("Error");
                    }
                    else {
                        sInput.setValueState("None");
                    }
                });
                return valid;
        },
 
     onpress:function()
     {
     	var requiredInputs = this.returnIdListOfRequiredFields();
            var passedValidation = this.validateEventFeedbackForm(requiredInputs);
            if(passedValidation === false)
            {
                //show an error message, rest of code will not execute.
                mbox.error("Please Enter Mandatory  Input Fields ");
		
                return false;
            }
            //Maybe show a success message, rest of function will execute.
     	var message1 = "Name:" + this.getView().byId("Name1").getValue()
     	               + "," + "Age:" + this.getView().byId("Age").getValue() 
     	                + "," + "HouseNo:" + this.getView().byId("HouseNo").getValue() 
     	                + "," + "StreetNo:" + this.getView().byId("StreetNo").getValue() 
     	                + "," + "ZipCode:" + this.getView().byId("ZipCode").getValue();
	mbox.information("Information", {
				title: "Information",
				id: "messageBoxId1",
				details:message1,
				// styleClass: sResponsivePaddingClasses,
				contentWidth: "100px"
			});
     }
	});
});