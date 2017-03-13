
/*
    http://stackoverflow.com/questions/37398695/cors-cordova-issues-with-access-control-allow-origin
    http://stackoverflow.com/questions/28547288/no-access-control-allow-origin-header-is-present-on-the-requested-resource-err

    https://www.google.fr/webhp?sourceid=chrome-instant&rlz=1C1ASUC_enFR601FR601&ion=1&espv=2&ie=UTF-8#q=ajax+get+http+server+simplehttprequesthandler&*
*/

//    header("content-type: application/data; charset=utf-8");
//    header("access-control-allow-origin: *");


/*
    Requete serveur
*/
function xml_http_post(url, data, callback) {
    var req = false;
    try {
        // Firefox, Opera 8.0+, Safari
        req = new XMLHttpRequest();
    }
    catch (e) {
        // Internet Explorer
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("Your browser does not support AJAX!");
                return false;
            }
        }
    }

    url = url+"?"+data;
    console.log(url);
    req.open("GET", url, true);
    req.onreadystatechange = function() {
        if (req.readyState == 4) {
            callback(req);
        }
    }
    req.send(data);
}

function alertItsWorking(req){
    console.log(req);
    var pseudo = $('#pseudo').val();
    var team = $('input[name=team]:checked').val();
  document.location.href="main.php?name="+pseudo+"&team="+team
}