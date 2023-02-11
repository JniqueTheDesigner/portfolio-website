console.log ("Hi I'm Jnique The Designer, Welcome to My Portfolio Site")
function menuToggle() {
    var x = document.getElementById( 'myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }

}
