

    function calculate(){

        const displayScreen = document.getElementById("display")

        let result = eval(document.getElementById("display").value);
            document.getElementById("display").value = result;
        console.log(displayScreen.value)
        
    }

    function addtoplay(value)
    {
        const displayScreen = document.getElementById("display")

        displayScreen.value += value
    }

    function clearDisplay()
    {
        const displayScreen = document.getElementById("display")
        displayScreen.value = "" 
        
    }



       