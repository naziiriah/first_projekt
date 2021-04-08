// For displaying functions on the main page
/* Set the width of the side navigation to 250px */
// for also making the display dim during open slide
// 
function  openSlide() {
    document.getElementById('side-nav').style.width = '250px'
    document.getElementById('main').style.marginLeft = "250px"
    document.getElementById('main').style.backgroundColor = "rgb()"
  }
  
  /* Set the width of the side navigation to 0 */
  function closeSlide() {
    document.getElementById('side-nav').style.width = '0px'
    document.getElementById('main').style.marginLeft = "0px"
  }

  function Disable(e){
        if(e.target == close){
            open.style.width = "0px"
        }
  }
  
// for display to dim during