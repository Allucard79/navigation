sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("navigation.controller.page2", {
		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("page2").attachPatternMatched(this._onObjectMatched, this);
		},
		onNavBack: function() {
			history.go(-1);
		},
		_onObjectMatched: function(oEvent) {
			var cc0 = oEvent.getParameter("arguments").invoicePath0;
			var firstName = this.getView().byId("firstName");
			firstName.setText(cc0);
			var cc1 = oEvent.getParameter("arguments").invoicePath1;
			var lastName = this.getView().byId("lastName");
			lastName.setText(cc1);
			var cc2 = oEvent.getParameter("arguments").invoicePath2;
			var address = this.getView().byId("address");
			address.setText(cc2);
			var cc3 = oEvent.getParameter("arguments").invoicePath3;
			var city = this.getView().byId("city");
			city.setText(cc3);
			var cc4 = oEvent.getParameter("arguments").invoicePath4;
			var postalCode = this.getView().byId("postalCode");
			postalCode.setText(cc4);
			var cc5 = oEvent.getParameter("arguments").invoicePath5;
			var homePhone = this.getView().byId("homePhone");
			homePhone.setText(cc5);
			var cc6 = oEvent.getParameter("arguments").invoicePath6;
			var country = this.getView().byId("country");
			country.setText(cc6);
			var cc7 = oEvent.getParameter("arguments").invoicePath7;
			var employeeID = this.getView().byId("employeeID");
			employeeID.setText(cc7);
		}

	});
});