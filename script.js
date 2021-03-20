   function upload(){ 
        var inputText=document.getElementById('container').value;
        let url1 = "https://api.textgears.com/spelling?key=1gVny1rfj02gy7kY&text="+inputText+"&language=en-GB";
        let req1 = new XMLHttpRequest();
        req1.open("GET",url1);
        req1.send();
        req1.onload = ()=>{
            let parsedResponse1 = JSON.parse(req1.response);
            console.log(parsedResponse1.response.errors);
        }
        console.log(inputText);
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
