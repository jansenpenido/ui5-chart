	sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
], function (Controller, MessageBox) {
	"use strict";

	return Controller.extend("com.jp.chart.ui5-chart.controller.ViewMain", {

		onInit: function(){
			this.loadModel();
		},
		
		loadModel: function(){
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("model/data.json");
			this.getView().setModel(oModel, "chartData");
			
			/// Debug
			// oModel.attachRequestCompleted(function() {
			// 	 console.log(oModel.getJSON());
			// });
		}

	});
});