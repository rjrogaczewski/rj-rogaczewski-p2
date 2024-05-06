Correct1.onclick = function() {
    Correct1.style.backgroundColor = 'green';
    decision1.innerHTML = "Correct Answer"
};
for (let i = 0; i < Incorrect1.length; i++) {
    Incorrect1[i].onclick = function() {
        Incorrect1[i].style.backgroundColor = 'red';
        decision1.innerHTML = "Incorrect Answer"
    };
}

Correct2.onclick = function() {
    Correct2.style.backgroundColor = 'green';
    decision2.innerHTML = "Correct Answer"
};
for (let j = 0; j < Incorrect2.length; j++) {
    Incorrect2[j].onclick = function() {
        Incorrect2[j].style.backgroundColor = 'red';
        decision2.innerHTML = "Incorrect Answer"
    };
}

Correct3.onclick = function() {
    Correct3.style.backgroundColor = 'green';
    decision3.innerHTML = "Correct Answer"
};
for (let f = 0; f < Incorrect3.length; f++) {
    Incorrect3[f].onclick = function() {
        Incorrect3[f].style.backgroundColor = 'red';
        decision3.innerHTML = "Incorrect Answer"
    };
}

