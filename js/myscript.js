function reload(){
    var width = window.innerWidth;
    if (width > 800){
        document.getElementById("clickmenu").style.visibility = "visible";
        }else{
            document.getElementById("clickmenu").style.visibility = "hidden";
        }

}
var num = 0;
        function menu() {
            if (num == 0) {
                console.log(0);
                document.getElementById("clickmenu").style.visibility = "visible";
                num = 1;
            } else {
                document.getElementById("clickmenu").style.visibility = "hidden";
                num = 0;
            }
        }
    