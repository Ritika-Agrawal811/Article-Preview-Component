
var shareButton = 0;

function countClick(n){
    shareButton +=n;
    if( shareButton %2==1){
        
           document.getElementById('shareButton').style.backgroundColor ="#6E8098";
           document.getElementById('icon').style.fill ="#fff"; 
           document.getElementById('shareBlock').style.display = "block";
        
    }
    
    else{
        document.getElementById('shareButton').style.backgroundColor ="hsl(210, 46%, 95%)";
        document.getElementById('icon').style.fill ="#6E8098"; 
        document.getElementById('shareBlock').style.display = "none";
    }
}

