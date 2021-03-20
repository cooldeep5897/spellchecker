function readfun(){
    document.getElementById('myFile') 
            .addEventListener('change', function() { 
              
            var fr=new FileReader(); 
            fr.onload=function(){ 
                document.getElementById('area1') 
                        .textContent=fr.result; 
            } 
              
            fr.readAsText(this.files[0]); 
        })
}