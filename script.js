
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
                let invalidWords = obj.response.errors;
                for(let i of obj.response.errors){
                    inputText=inputText.replace(i.bad,`<span class="invalid-word">${i.bad}</span>`);
                    document.getElementById('container').innerHTML=inputText;
                }   
                    var v1=document.querySelectorAll("span.invalid-word");
                    for(let k=0;k<v1.length;k++){
                        $(v1[k]).contextmenu((event)=>{
                            event.preventDefault();
                            $("#custommenu > ul").empty();
                            for (let j = 0; j < invalidWords[k].better.length; j++) {
                                $("#custommenu > ul").append(
                                  `<li wordtoreplace="${invalidWords[k].bad}" class="suggestion-list">${invalidWords[k].better[j]} </li>`
                                );
                            }
                            $(".suggestion-list").mouseover((event) => {
                                event.target.style.backgroundColor = "grey";
                            });
                            $(".suggestion-list").mouseout((event) => {
                                event.target.style.backgroundColor = "";
                            });
                            $(".suggestion-list").click((event) => {
                                let wrongWords = document.getElementsByClassName( "invalid-word");
                                for (let z = 0; z < wrongWords.length; z++) {
                                  if (wrongWords[z].innerHTML == $(event.target).attr("wordtoreplace")) {
                                    wrongWords[z].innerHTML = event.target.innerHTML;
                                    wrongWords[z].classList.replace("invalid-word","word");  
                                    var cnt = $(".word").contents();
                                      $(".word").replaceWith(cnt);
                                    $("#custommenu").css("display", "none");
                                  }
                                }
                              });
                              $("#custommenu").css("display", "block");
                              $("#custommenu").css({
                                top: event.clientY ,
                                left: event.clientX,
                                position: "absolute",
                              });
                        });
                    }     
            }
    
        }catch(err){
            console.error();
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
    
