var openBlipChat;
let tooltipInstances;

window.onload = function () {
		
	const appkey = "dGVzdGVncHQxODphZjA5ZDYyNy05MjcxLTRhYTgtYjM3Ny05NDRhNTM2NzQ5YTk=";

	var client = new BlipChat()
	.withAppKey(appkey)
	.withEventHandler(BlipChat.LOAD_EVENT, function(){
		var iframe = document.getElementById("blip-chat-iframe");
		iframe.contentWindow.postMessage({ code: "ShowCloseButton", showCloseButton: true }, iframe.src);	
	});
		
	client.build();

	openBlipChat = function() {
		client.widget._openChat();
	}
	
	M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
  tooltipInstances = M.Tooltip.init(document.querySelectorAll('.tooltipped'));
  
  window.addEventListener('scroll', () => {
    for(let i = 0; i < tooltipInstances.length; ++i) {
      tooltipInstances[i]._positionTooltip();
    }
  });

}