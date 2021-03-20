function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      document.getElementById('area1').value=reader.result;
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }
