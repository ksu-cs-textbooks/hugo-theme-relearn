/** Adds iframe embed code to clipboard on page load - By Josh Weese **/
/* [x] russfeld */

iframeString = (height, uri) => `<iframe style="width: 100%; height: ${height}px; border: none;" src="${uri}"></iframe>`


function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(function() {
    }, function() {
        alert("clipboard failed");
    });
  }	  

function onLoad() {
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
        let uri = window.location.href;
        let height = document.documentElement.scrollHeight;
        if (result.state == "granted" || result.state == "prompt") {
            updateClipboard(iframeString(height, uri));
        }
        else{
            navigator.permissions.query({name:'clipboard-write'}).then(function(result) {
                if (result.state == "granted" || result.state == "prompt") {
                    updateClipboard(iframeString(height, uri));
                }
              });
        }
      });
}

window.addEventListener('load', (event) => {
    onLoad();
});