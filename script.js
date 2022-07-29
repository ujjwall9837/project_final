const italic = document.querySelector('#italic')
const boldBtn = document.getElementById('bold-btn')
const textArea  =  document.querySelector("#str")
// const content = document.querySelector('#content')

function ConvertToItalic(){
    textArea.style.fontStyle = "Italic"
}
function ConvertToBold(){
    textArea.style.fontWeight= "900"
}
function makePDF(){
    // first create a tag the pass the textArea value as href 
    // then add download attribute
    var attribute = document.createElement('a');
    attribute.setAttribute('href', 
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(textArea.value));
    attribute.setAttribute('download', file);
    
    // then append child to document 
    document.body.appendChild(attribute);
    
    // auto click event
    attribute.click();
    
    // then remove child to document 
    document.body.removeChild(attribute);
    
}
onSelectFile(e) ;
{
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }