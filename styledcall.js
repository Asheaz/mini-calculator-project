<script>
        const addToDisplay(value) {
            document.getElementById("display").value += value;
        }

        const clearDisplay() {
            document.getElementById("display").value = "";
        }

        const calculate() {
            let result = eval(document.getElementById("display").value);
            document.getElementById("display").value = result;
         }
    </script>