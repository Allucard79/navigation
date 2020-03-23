sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter"
], function(Controller,Filter) {
	"use strict";

	return Controller.extend("navigation.controller.page1", {
		onInit: function() {
			var oTable = this.getView().byId("employees");
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/Object.json");
			oTable.setModel(oModel);
		},

     /* to Navigate with parameters */

		onPress: function(oEvent) {
			var oItem = oEvent.getSource();
			var sPath0 = oItem.getBindingContext().getPath("FirstName");
			var sPath1 = oItem.getBindingContext().getPath("LastName");
			var sPath2 = oItem.getBindingContext().getPath("Address");
			var sPath3 = oItem.getBindingContext().getPath("City", "Region");
			var sPath4 = oItem.getBindingContext().getPath("PostalCode");
			var sPath5 = oItem.getBindingContext().getPath("HomePhone");
			var sPath6 = oItem.getBindingContext().getPath("Country");
			var sPath7 = oItem.getBindingContext().getPath("EmployeeID");
		
			var oTable = this.getView().byId("employees");
			var modelData = oTable.getModel();
			var data0 = modelData.getProperty(sPath0);
			var data1 = modelData.getProperty(sPath1);
			var data2 = modelData.getProperty(sPath2);
			var data3 = modelData.getProperty(sPath3);
			var data4 = modelData.getProperty(sPath4);
			var data5 = modelData.getProperty(sPath5);
			var data6 = modelData.getProperty(sPath6);
			var data7 = modelData.getProperty(sPath7);
			

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("page2", {
				invoicePath0: data0,
				invoicePath1: data1,
				invoicePath2: data2,
				invoicePath3: data3,
				invoicePath4: data4,
				invoicePath5: data5,
				invoicePath6: data6,
				invoicePath7: data7
				
			});
		},

     onSearch: function(oEvt) {
        	var aFilters = [];
        	var sQuery = oEvt.getSource().getValue();
        	if(sQuery && sQuery.length > 0) {
        		var filter = new Filter("FirstName", sap.ui.model.FilterOperator.Contains, sQuery);
        		aFilters.push(filter);
        	}
        	
        	var list = this.getView().byId("employees");
        	var binding = list.getBinding("items");
        	binding.filter(aFilters, "Aplication");
        	
        }

	});
});