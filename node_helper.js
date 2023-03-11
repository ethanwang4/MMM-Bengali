var NodeHelper = require("node_helper")

module.exports = NodeHelper.create({
	  
  socketNotificationReceived: function(notification, payload) {
    switch(notification) {
      case "1":
        const data1 = require('./one.json');
        var data2 = data1[Math.floor(data1.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data2['Bengali'] ,
         data2['Bengali_Pron'],
         data2['English']])
        break
        
      case "2":
        const data3 = require('./two.json');
        var data4 = data3[Math.floor(data3.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data4['Bengali'] ,
         data4['Bengali_Pron'],
         data4['English']])
        break
        
      case "3":
        const data5 = require('./three.json');
        var data6 = data5[Math.floor(data5.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data6['Bengali'] ,
         data6['Bengali_Pron'],
         data6['English']])
        break
        
      case "4":
        const data7 = require('./four.json');
        var data8 = data7[Math.floor(data7.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data8['Bengali'] ,
         data8['Bengali_Pron'],
         data8['English']])
        break
        
      case "5":
        const data9 = require('./five.json');
        var data10 = data9[Math.floor(data9.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data10['Bengali'] ,
         data10['Bengali_Pron'],
         data10['English']])
        break
        
      case "6":
        const data11 = require('./six.json');
        var data12 = data11[Math.floor(data11.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data12['Bengali'] ,
         data12['Bengali_Pron'],
         data12['English']])
        break
        
      case "7":
        const data13 = require('./seven.json');
        var data14 = data13[Math.floor(data13.length*Math.random())];
        this.sendSocketNotification("DONE", [
         data14['Bengali'],
         data14['Bengali_Pron'],
         data14['English']])
        break
    }
  },
})
