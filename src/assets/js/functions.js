function searchElement(element){
    return document.querySelector(element);
}

function searchAllElements(elements){
    return document.querySelectorAll(elements);
}

function changeToTab(idTab, obj){
    var tabNames = searchAllElements(".tab-name");

    for(var i = 0; i < tabNames.length; i++ ){ 
        var currentTab = tabNames[i];
        currentTab.classList.remove("active");
    }

    obj.parentElement.classList.add("active");

    var myTabs = searchAllElements(".tab-content");

    for(var a = 0; a < myTabs.length; a++){
        var currentContent = myTabs[a];
        if(idTab == currentContent.id ){
            for(var b = 0; b < myTabs.length; b++){
                var clear = myTabs[b];
                clear.classList.remove("active");
            }
            currentContent.classList.add("active");
        }
    }
}

var nextSlide = searchElement("#next-slide").addEventListener("click", function(){  
    var tabs = searchAllElements(".tab-name"),
        change = false;

    for(var i = 0; i < tabs.length; i++){
        var currentTab = tabs[i];
        if( currentTab.classList.contains("active")){
            if(i == tabs.length -1){
                console.log("a");
                var nextTab = tabs[0];                

                if ( change === false ){
                    console.log( change );
                    change = true;
                    console.log( change );
                    setTimeout( function(){change = false; console.log( change )}, 100);
                    return nextTab.firstChild.click();                    
                }
            }else{
                console.log("b");
                var nextTab = tabs[i + 1];

                if ( change === false ){
                    console.log( change );
                    change = true;
                    console.log( change );
                    setTimeout( function(){change = false; console.log( change )}, 100);
                    return nextTab.firstChild.click();                
                }
            }
        }
    }
});

var previousSlide = searchElement("#previous-slide").addEventListener("click", function(){
    var tabs = searchAllElements(".tab-name");
    for(var i = 0; i < tabs.length; i++){
        var currentTab = tabs[i];
        if(currentTab.classList.contains("active")){
            
            if(i == 0){
                var lastItem = tabs.length - 1;
                var previousTab = tabs[lastItem];
                previousTab.firstChild.click();
            }else{
                var previousTab = tabs[i - 1];
                previousTab.firstChild.click();
            }
            break;
        }
    }
});
