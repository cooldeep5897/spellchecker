
    function upload(){ 
    try{ 
        let inputText= document.getElementById('container').textContent;
        console.log(inputText);
        
        let url = "https://api.textgears.com/spelling?key=1gVny1rfj02gy7kY&text="+inputText+"&language=en-GB";
        let req = new XMLHttpRequest();
        req.open("POST",url);
        req.send();
        req.onload = ()=>{
            let obj= JSON.parse(req.response);
            console.log(req.response);
            for(let i of obj.response.errors){
                let l1=i.length;
            }
            let sizeadd=0;
            const num=31;
            let l2;
            let j=0;
            for(let i of obj.response.errors){
                let l1=i.offset;
                 l2=i.length;
                l1=l1+sizeadd;
                inputText= insert(inputText,l1,l2);
                j=j+1;
                sizeadd=num*j;
            }
        let ele = document.getElementById('container');
        ele.innerHTML=inputText;
        }
    }catch(err){
        console.error();
    }
    }
    
    function insert(str, index, length){
        return (str.substr( 0,index) +"<span style='color:Red'>"+ str.substr(index,length)+"</span>"+str.substr(index+length)); 
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
