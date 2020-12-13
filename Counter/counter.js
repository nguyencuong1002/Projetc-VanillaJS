var count = 0;

const countVariable = document.querySelector("#countVariable");
const btns = document.querySelectorAll(".btn");


btns.forEach(btn => {
    btn.addEventListener('click', e => {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            countVariable.style.color = "green";
        }
        if (count < 0) {
            countVariable.style.color = "red";
        }
        if (count === 0) {
            countVariable.style.color = "#222";
        }
        countVariable.textContent = count;
    });
});