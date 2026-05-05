let input = document.getElementById('input');
let btn = document.querySelectorAll('button');

let string = "";
arr = Array.from(btn);

arr.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            try {
                string = eval(string);
                input.value = string;
                input.scrollLeft = input.scrollWidth;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
            input.scrollLeft = input.scrollWidth;
        }
        else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
            input.scrollLeft = input.scrollWidth;
        }
        else if (e.target.innerHTML == "%") {
            string += "/100";
            input.value = string;
            input.scrollLeft = input.scrollWidth;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
            input.scrollLeft = input.scrollWidth;
        }
    })
});

