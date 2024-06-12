    
    
    
    //Carrier 1
    function carrier1() {
        
        var img1Id = document.getElementById("img1")
        
        var img2Id = document.getElementById("img2")
        
        var img3Id = document.getElementById("img3")
        
        var hiddenVal1Id = document.getElementById("hiddenVal1").value
            
        img1Id.style.bottom = "70%"
        img2Id.style.bottom = "60%"
        img3Id.style.bottom = "15%"
        
        img1Id.style.opacity = "1"
        img2Id.style.opacity = "1"
        img3Id.style.opacity = "1"
        
        
            RunImg1()
        
        
            
        
        
    }
    
    function Xcarrier1() {
        
        
        var img2Id = document.getElementById("img2")
        
        var img3Id = document.getElementById("img3")
        
        img2Id.style.bottom = "60%"
        img3Id.style.bottom = "15%"
        
        img2Id.style.opacity = "1"
        img3Id.style.opacity = "1"
        
        setTimeout(() => {
        
            RunImg1()
            
        }, 2000 )
        
    }
    
    let Numbering = 0
    
    function rightclick() {
        if(Numbering < 2) {
            Numbering++
        
            updateNumbering()
        }
        
       } 
    
    function leftclick() {
        if(Numbering > 0) {
            
        Numbering--
        
        updateBackNumbering()
            
        }
        
        
    }
    
    function updateNumbering() {
        
        if (Numbering === 1) {
            
            RunImg2()
            
        }
       
        if (Numbering === 2) {
            
            RunImg3()
            
        }
        
        }
        
    function updateBackNumbering() {
            
        if (Numbering === 0) {
            
           BackRunImg2()
           
        }
        if (Numbering === 1) {
            
           BackRunImg3()
            
        }   
        
        }
    
    function RunImg1() {
        
        //Function Id
        var img1Id = document.getElementById("img1")
        
        var tinyCircle1Id = document.getElementById("tinyCircle1")
       
        tinyCircle1Id.style.transform = "scale(1.3)"
        
        img1Id.style.width = "100%"
        img1Id.style.height = "100%"
        img1Id.style.border = "none"
        img1Id.style.borderRadius = "0"
        img1Id.style.boxShadow = "inset 0px 70px 80px #fff, inset 0px -70px 80px #fff"
        img1Id.style.left = "0"
        img1Id.style.bottom = "0"
        img1Id.style.opacity = "1"
        
        
        
        
        }
        
        function BackRunImg1() {
        
        //Function Id
        var img1Id = document.getElementById("img1")
        
        var img2Id = document.getElementById("img2")
        
        var img3Id = document.getElementById("img3")
        
        var tinyCircle1Id = document.getElementById("tinyCircle1")
       
        var tinyCircle2Id = document.getElementById("tinyCircle2")

        var tinyCircle3Id = document.getElementById("tinyCircle3")
        
        var hiddenVal1Id = document.getElementById("hiddenVal1")
        
        
        
        hiddenVal1Id.value = "setNone"

      
            
        tinyCircle1Id.style.transform = "scale(1.3)"

        tinyCircle2Id.style.transform = "scale(1)"

        tinyCircle3Id.style.transform = "scale(1)"
        
        img1Id.style.width = "160px"
        img1Id.style.height = "160px"
        img1Id.style.border = "5px solid #fff"
        img1Id.style.borderRadius = "1000vh"
        img1Id.style.boxShadow = "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff"
        img1Id.style.left = "40%"
        img1Id.style.bottom = "0"
        img1Id.style.opacity = "0"
        
        img2Id.style.width = "160px"
        img2Id.style.height = "160px"
        img2Id.style.border = "5px solid #fff"
        img2Id.style.borderRadius = "1000vh"
        img2Id.style.boxShadow = "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff"
        img2Id.style.bottom = "0"
        img2Id.style.opacity = "0"
        img2Id.style.right = "10%"

        img3Id.style.width = "160px"
        img3Id.style.height = "160px"
        img3Id.style.border = "5px solid #fff"
        img3Id.style.borderRadius = "1000vh"
        img3Id.style.boxShadow = "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff"
        img3Id.style.bottom = "0"
        img3Id.style.opacity = "0"
        img3Id.style.left = "10%"

        Numbering = 0
            
        

        
        
        }
        
        
        function RunImg2() {
        
        //Function Id
        var img2Id = document.getElementById("img2")
        
        var tinyCircle1Id = document.getElementById("tinyCircle1")
        
        var tinyCircle2Id = document.getElementById("tinyCircle2")
           
        tinyCircle1Id.style.transform = "scale(1)" 
        
        tinyCircle2Id.style.transform = "scale(1.3)"
             
           //For img 2
        img2Id.style.width = "100%"
        img2Id.style.height = "100%"
        img2Id.style.border = "none"
        img2Id.style.borderRadius = "0"
        img2Id.style.boxShadow = "inset 0px 70px 80px #fff, inset 0px -70px 80px #fff"
        img2Id.style.right = "0"
        img2Id.style.bottom = "0"
        img2Id.style.opacity = "1"
        
            
       
        
        
        }
        
        function BackRunImg2() {
        
        //Function Id
        var img2Id = document.getElementById("img2")
        
        var tinyCircle1Id = document.getElementById("tinyCircle1")
        
        var tinyCircle2Id = document.getElementById("tinyCircle2")
           
        tinyCircle1Id.style.transform = "scale(1.3)" 
        
        tinyCircle2Id.style.transform = "scale(1)" 
          
           
           //For img 2
        img2Id.style.width = "160px"
        img2Id.style.height = "160px"
        img2Id.style.border = "5px solid #fff"
        img2Id.style.borderRadius = "1000vh"
        img2Id.style.boxShadow = "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff"
        img2Id.style.right = "10%"
        img2Id.style.bottom = "60%"
        img2Id.style.opacity = "1"
        
            
       
        
        
        }
        
        
        function RunImg3() {
        
        //Function Id
        var img3Id = document.getElementById("img3")
        
        var tinyCircle2Id = document.getElementById("tinyCircle2")
        
        var tinyCircle3Id = document.getElementById("tinyCircle3")
           
        tinyCircle2Id.style.transform = "scale(1)" 
        
        tinyCircle3Id.style.transform = "scale(1.3)"
         
           //For img 2
        img3Id.style.width = "100%"
        img3Id.style.height = "100%"
        img3Id.style.border = "none"
        img3Id.style.borderRadius = "0"
        img3Id.style.boxShadow = "inset 0px 70px 80px #fff, inset 0px -70px 80px #fff"
        img3Id.style.left = "0"
        img3Id.style.bottom = "0"
        img3Id.style.opacity = "1"
      
            
              
        
        
        }
        
        function BackRunImg3() {
        
        //Function Id
        var img3Id = document.getElementById("img3")
         
        var tinyCircle2Id = document.getElementById("tinyCircle2")
        
        var tinyCircle3Id = document.getElementById("tinyCircle3")
           
        tinyCircle2Id.style.transform = "scale(1.3)" 
        
        tinyCircle3Id.style.transform = "scale(1)"
         
           //For img 2
        img3Id.style.width = "160px"
        img3Id.style.height = "160px"
        img3Id.style.border = "5px solid #fff"
        img3Id.style.borderRadius = "1000vh"
        img3Id.style.boxShadow = "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff"
        img3Id.style.left = "10%"
        img3Id.style.bottom = "15%"
        img3Id.style.opacity = "1"
        
            
              
        
        
        }
    
    
    
