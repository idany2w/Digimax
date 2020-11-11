
    var b = bowser.parse(window.navigator.userAgent);

    var name = b.browser.name
    var version = b.browser.version
    var currentVersion;

    if(name == "Chrome"){
        currentVersion = 85;
    }

    if(name == "Internet Explorer"){
        currentVersion = 10;
    }

    if(name == "Safari"){
        currentVersion = 13;
    }

    if(name == "Opera"){
        currentVersion = 71
    }

    if(name == "Firefox"){
        currentVersion = 60
    }

    if(name == "Microsoft Edge"){
        currentVersion = 85
    }

    if(currentVersion > version.split('.')[0]){
        alert('Ваш браузер устарел. Используйте другой!')
    }