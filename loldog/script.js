$(document).ready(function(){
     var isPartyTime = false;
var messageText;
var image;

	var time = new Date().getHours();
	var eventForTime = document.getElementById("timeEvent");
	var loldog = document.getElementById("loldog");
var dogsLife = function()
{
	if (time < 12) 
	{
   		messageText = "BONJOUR";
    		image="bonjour.png";
	}
	else if (time < 16) 
	{
    		messageText = "BONNE APRES-MIDI";
     		image = "letsplay.png";
	}
	else if (time < 23)
	{
     		messageText = "BON SOIR";
     		image = "naptime.png";
	}
	else
	{
      		messageText = "SSHHH! MINUIT";
      		image = "twosnuggling.png";
	}
};
dogsLife();
	var partyEvent = function()
	{
     		if ( isPartyTime == false)
     		{
               		isPartyTime = true;
               		messageText = " ";
               		image = "xmas.png";
			var partyButton = document.getElementById("partyTimeButton").style.color = "red";
        	}
     		else 
        	{
               		isPartyTime = false;
               		time = new Date().getHours();
        		updateClock();
			dogsLife();
			var partyButton = document.getElementById("partyTimeButton").style.color = "white";
		}
		
		eventForTime.innerText = messageText;
		loldog.src = image;
	};
	//var partyButton = document.getElementById("partyTimeButton");
$("#partyTimeButton").click(partyEvent);
	//partyButton.addEventListener("click", partyEvent);
	eventForTime.innerText = messageText;
	loldog.src = image;
var updateClock = function()
{	
	var showCurrentTime = function()
	{
	    // display the string on the webpage
    		var clock = document.getElementById("clock");
 		var currentTime = new Date();
    		var hours = currentTime.getHours();
    		var minutes = currentTime.getMinutes();
    		var seconds = currentTime.getSeconds();
    		var meridian = "AM";
	    // Set hours 
    		if (hours >= 12) 
    		{ 
        		meridian = "PM"; 
    		}  
    		if (hours > 12) 
    		{ 
        		hours = hours - 12; 
    		}
	    // Set Minutes
    		if (minutes < 10)
    		{
        		minutes = "0" + minutes;
    		}
	    // Set Seconds
    		if (seconds < 10)
    		{
        	seconds = "0" + seconds;
    		}
	    // put together the string that displays the time
    		var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
		clock.innerText = clockTime;
	};
	showCurrentTime();
};
updateClock();
var oneSecond = 1000;
//setInterval( updateClock, oneSecond);
//setInterval( dogsLife, 3600000);
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function()
{
	wakeUpTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
});

