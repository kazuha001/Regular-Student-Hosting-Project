
function enter() {
    
    window.addEventListener('scroll', function()  {

    let scrollAct = window.scrollY
    let scaleMode = 1 + scrollAct / window.innerHeight
    
    var entransId = document.getElementById("entrans")
    
    entransId.style.transform = `scale(${scaleMode})`
    
   var countId = document.getElementById("count")
   
   countId.innerText = scrollAct
    
    if(scrollAct >= 4400 && scrollAct <= 4500) {
        
        entransId.style.display = "block"
        
        BackRunImg1()
        
    }else if(scrollAct >= 4600 && scrollAct <= 4900) {
        
        entransId.style.display = "none"
        
        carrier1()
      
    }
    
    
})
}

function withlimiter() {
    
    var limiterWidth = window.innerWidth
    
    const limit = 1025
    
    if(limiterWidth <= limit) {
        
        carrier1()
        
    }else {
        
        enter()
        
    }
    
}

    window.addEventListener('load', function() {
        
        var  burgerMenu = document.getElementById('menu');
        
        burgerMenu.style.right = "-100%"
        
        
    })
    
    function openMenu() {
         
         // Get the burger menu and button elements
    var  burgerMenu = document.getElementById('menu');
    
    var menuClickEvId = document.getElementById("menuClickEv")
         
         if (burgerMenu.style.right === "-100%" ) {
             
             burgerMenu.style.right = "0"
             
             menuClickEvId.src = "css/images/Vector/Exit.png"
             
         }else {
             
             menuClickEvId.src = "css/images/Vector/burgerMenu.png"
             
             burgerMenu.style.right = "-100%"
             
         }
         
         const defaultHeight = window.innerHeight
        
        burgerMenu.style.height = `${defaultHeight}px`
        
         
     }

    // Event listener to hide the menu when clicking outside the menu
    document.addEventListener('click', function (event) {
    
        var  burgerMenu = document.getElementById('menu');
        
        var  menuClickEvId = document.getElementById("menuClickEv")
    
        var  isClickmenuClickEvId = menuClickEvId.contains(event.target)
        
        var  isClickInsideMenu = burgerMenu.contains(event.target);
        
        const defaultHeight = window.innerHeight
        
        burgerMenu.style.height = `${defaultHeight}px`
        
        if (!isClickInsideMenu && !isClickmenuClickEvId) {
        
            burgerMenu.style.right = "-100%";
            
            menuClickEvId.src = "css/images/Vector/burgerMenu.png"
        }
     
    })

withlimiter()
    
