//auto llenado de logins

document.getElementById('autofillbutton').addEventListener('click', function(){

    var user = "hola@hotmail.com"
    chrome.tabs.executeScript({
        code: `var value = ${user}`
    }, function() {
        chrome.tabs.executeScript({
            file: './js/injector.js'
        });
    });
});

/*document.getElementById('autofillbutton').addEventListener('click', () => {
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            user: document.getElementById('username').value
        }, function (response) {
            console.log(response);
        })

    })
})*/

/*document.getElementById('autofillbutton').addEventListener('click', () => {

    var savedpass = "bruh123bruh";
    var savedemail = "bruh";

    document.getElementById("email").value = savedemail;
    document.getElementById("pass").value = savedpass;

}*/

/*document.getElementById('autofillbutton').addEventListener('click', () => {
    getCurrentTabUrl(function(err, url) {
      if(err || !url) return;
      
      var domain = extractDomainName(url);
  
      loadSession(function(err, session) {
      
        vaultFilter(domain, session.hash,  function(err, data) {
          
          renderDocumentList(data, domain);
          for(var i in data) {
            if (data[i].username.length > 12 && data[i].password.length > 20 && data[i].iuser.length > 12 && data[i].ipass.length > 12) {
              data[i].User = data[i].username.substring(0,15) + "...";
              data[i].Pass = data[i].password.substring(0,15) + "...";
              data[i].Iuser = data[i].iuser.substring(0,15) + "...";
              data[i].Ipass = data[i].ipass.substring(0,15) + "...";
            } else {
              data[i].User = data[i].username;
              data[i].Pass = data[i].password;
              data[i].Iuser = data[i].iuser;
              data[i].Ipass = data[i].ipass;
            }
          }
          chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            if (!chrome.runtime.lastError){
                chrome.tabs.sendMessage(tabs[0].id, {
                user: data[i].User,
                pass: data[i].Pass,
                iuser: data[i].Iuser,
                ipass: data[i].Ipass
                }, function(response) {
                console.log(response);
                })
            }else{
                console.log('ERROR');
            }
          })
      })
      
    })
    })
    
})*/

/*chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        try{
            let nuser = request.iuser;
            let npass = request.ipass;
            document.querySelector(`input[name="${nuser}"]`).value = request.user,
            document.querySelector(`input[name="${npass}"]`).value = request.pass
            console.log(request, sender, sendResponse);
            sendResponse('All good' + JSON.stringify("request"));
        }catch(error){
            console.log(error);
            sendResponse({status: "Error..."});
        }
    }
)*/