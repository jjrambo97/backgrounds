function addGlobalStyle(css){
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if(!head){
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
//changes the background
addGlobalStyle('body, body {background: #080c0f url(http://dl.dropbox.com/u/61594284/Plug.Pony%20Backgrounds/Derpy.png) no-repeat;}');
addGlobalStyle('#room-wheel, #room-wheel {height: 0;}');
