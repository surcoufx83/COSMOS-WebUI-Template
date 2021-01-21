sap.ui.define([
	"jquery.sap.global",
	"sap/m/MessageToast",
	"sap/m/MessageBox",
	"sap/ui/core/format/NumberFormat",
	"sap/ui/core/mvc/Controller"],

	function(jQuery, MessageToast, MessageBox, NumberFormat, Controller) {
	"use strict";

	var debug = true;

	return Controller.extend("demoprojekt.controller.Home", {

		onInit: function() {
      console.log("onInit")


		}, // onInit

		onAfterRendering: function() {
      console.log("onAfterRendering")


		}, // onAfterRendering

		showMessage: function(msg) {
			MessageToast.show(msg, {
				my: 'center center',
				at: 'center center'
			})
		}

	}); // Controller.extend

}); // sap.ui.define
