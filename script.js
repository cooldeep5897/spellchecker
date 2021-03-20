
 
   function upload(){ 
    try{ let inputText= document.getElementById('container').textContent;
        console.log(inputText);
        let url = "https://api.textgears.com/spelling?key=1gVny1rfj02gy7kY&text="+inputText+"&language=en-GB";
        let req = new XMLHttpRequest();
        req.open("POST",url);
        req.send();
        req.onload = ()=>{
            let obj= JSON.parse(req.response);
            console.log(req.response);
            console.log(obj['errors']);
        }
    }catch(err){
        console.error(err);
    }
    }

function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
        let ele = document.getElementById('container');
        ele.innerHTML = reader.result;
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
   
  }
