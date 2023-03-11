Module.register("MMM-Bengali",{
	
//todo - make pretty
//add display settings
//make initialize on startup (if possible)

defaults: {
	updateFreq: 10000,
	level: 1
},

getDom: function() {
  const element = document.createElement("div");
  const subElement = document.createElement("p");
  subElement.id = "Word";
  subElement.style.color = 'red';
  subElement.style.width = '300px';
  subElement.style.height = '20px';
  subElement.innerHTML = 'Bengali'
  subElement.style.fontSize = '25px';
  subElement.style.paddingTop = '4px';
  subElement.style.paddingBottom = '4px';
  element.appendChild(subElement);
  const subElement2 = document.createElement("p");
  subElement2.id = "Word2";
  subElement2.style.color = '#006400';
  subElement2.style.width = '300px';
  subElement2.style.height = '20px';  
  subElement2.innerHTML = 'Bengali Pronunciation'
  subElement2.style.fontSize = '25px';
  subElement2.style.paddingTop = '4px';
  subElement2.style.paddingBottom = '4px';
  element.appendChild(subElement2);
  const subElement3 = document.createElement("p");
  subElement3.id = "Word3";
  subElement3.style.color = '#808080';
  subElement3.style.width = '300px';
  subElement3.style.height = '20px';
  subElement3.style.fontSize = '25px';
  subElement3.innerHTML = 'English'
  subElement3.style.paddingTop = '4px';
  subElement3.style.paddingBottom = '4px';
  element.appendChild(subElement3);
  



  return element
},

notificationReceived: function(notification, payload, sender) {
  switch(notification) {
    case "ALL_MODULES_STARTED":
      var timer = setInterval(()=>{
		const level = this.config.level;
		switch(level) {
		  case 1:
		    this.sendSocketNotification("1");
		  case 2:
		    this.sendSocketNotification("2");
		  case 3:
		    this.sendSocketNotification("3");
		  case 4:
		    this.sendSocketNotification("4");
		  case 5:
		    this.sendSocketNotification("5");
		  case 6:
		    this.sendSocketNotification("6");
		  case 7:
		    this.sendSocketNotification("7");
		}
      }, this.config.updateFreq)
      break
  }
},

socketNotificationReceived: function(notification, payload) {
  switch(notification) {
    case "DONE":
      var elem = document.getElementById("Word");
      elem.innerHTML = payload[0];
      var elem2 = document.getElementById("Word2");
      elem2.innerHTML = payload[1];
      var elem3 = document.getElementById("Word3");
      elem3.innerHTML = payload[2];
      break
  }
},

});
