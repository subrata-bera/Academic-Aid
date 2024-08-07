// access navigation items
let sgpa_calculate = document.querySelector(".sgpa_calculate");
let cgpa_calculate = document.querySelector(".cgpa_calculate");
let content = document.querySelector(".content");
let sgpatopercentage = document.querySelector(".sgpatopercentage");
let cgpacalculator = document.querySelector(".cgpacalculator");
let home = document.querySelector(".home");

// access text boxes and buttons for calculation SGPA to percentage 
let sgpatext = document.querySelector("#sgpatext");
let sgpacalbtn = document.querySelector(".sgpacalbtn");
let percentageResult = document.querySelector(".percentageResult");

// access text boxes and buttons for calculation cgpa
let semtext = document.querySelector("#semtext");
let sem_1 = document.querySelector("#sem1");
let sem_2 = document.querySelector("#sem2");
let sem_3 = document.querySelector("#sem3");
let sem_4 = document.querySelector("#sem4");
let sem_5 = document.querySelector("#sem5");
let sem_6 = document.querySelector("#sem6");
let sem_7 = document.querySelector("#sem7");
let sem_8 = document.querySelector("#sem8");
let cgpacalbtn = document.querySelector(".cgpacalbtn");
let cgpaResult = document.querySelector(".cgpaResult");
let sem1 = document.querySelector(".sem1");
let sem2 = document.querySelector(".sem2");
let sem3 = document.querySelector(".sem3");
let sem4 = document.querySelector(".sem4");
let sem5 = document.querySelector(".sem5");
let sem6 = document.querySelector(".sem6");
let sem7 = document.querySelector(".sem7");
let sem8 = document.querySelector(".sem8");

//Access scholarship section elements
let scholarship_btn = document.querySelector(".scholarship_btn");
let scholarship_sub_content = document.querySelector(".scholarship-sub-content");
let scholarship_list = document.querySelector(".scholarship-list");
let list_cut = document.querySelector("#list-cut");
let scholarship_content_main = document.querySelector(".scholarship-content-main");

//Access online_courses elements
let online_courses_btn = document.querySelector(".online-courses-btn");
let online_courses_list = document.querySelector(".online-courses-list");
let list_cut_course = document.querySelector("#list-cut-course");

//For hide and show sections on the click of navigation buttons
home.addEventListener("click", () => {
    sgpatopercentage.style.height = "0vh";
    cgpacalculator.style.height = "0vh";
    content.style.display = "flex"
});
sgpa_calculate.addEventListener("click", () => {
    content.style.display = "none";
    cgpacalculator.style.height = "0vh";
    sgpatopercentage.style.height = "70vh";
});
cgpa_calculate.addEventListener("click", () => {
    content.style.display = "none";
    sgpatopercentage.style.height = "0vh";
    cgpacalculator.style.height = "70vh";
});

//  SGPA to percentage
sgpacalbtn.addEventListener("click", () => {
    if (!isNaN(parseFloat(sgpatext.value))) {
        let percentage = (parseFloat(sgpatext.value) - 0.75) * 10;
        percentageResult.innerHTML = `You scored ${percentage}%`
    }
    else {
        alert("Please enter correct format of SGPA!")
    }
});

//CGPA calculation
semtext.addEventListener("input", () => {
    let value = semtext.value;
    if (/^\d$/.test(value)) {
        semtext.value = value;
    } else if (/^\d+$/.test(value)) {
        semtext.value = value.slice(-1);
    } else {
        semtext.value = "";
    }

    switch (semtext.value) {
        case "2":
            sem1.style.display = "block";
            sem2.style.display = "block";
            sem3.style.display = "none";
            sem4.style.display = "none";
            sem5.style.display = "none";
            sem6.style.display = "none";
            sem7.style.display = "none";
            sem8.style.display = "none";
            break;
        case "4":
            sem1.style.display = "block";
            sem2.style.display = "block";
            sem3.style.display = "block";
            sem4.style.display = "block";
            sem5.style.display = "none";
            sem6.style.display = "none";
            sem7.style.display = "none";
            sem8.style.display = "none";
            break;
        case "6":
            sem1.style.display = "block";
            sem2.style.display = "block";
            sem3.style.display = "block";
            sem4.style.display = "block";
            sem5.style.display = "block";
            sem6.style.display = "block";
            sem7.style.display = "none";
            sem8.style.display = "none";
            break;
        case "8":
            sem1.style.display = "block";
            sem2.style.display = "block";
            sem3.style.display = "block";
            sem4.style.display = "block";
            sem5.style.display = "block";
            sem6.style.display = "block";
            sem7.style.display = "block";
            sem8.style.display = "block";
            break;
    }
});
cgpacalbtn.addEventListener("click", () => {
    let cgpa;
    switch (semtext.value) {
        case "2":
            if (sem_1.value != "" && sem_2.value != "") {
                cgpa = (parseFloat(sem_1.value) + parseFloat(sem_2.value)) / 2;
                cgpaResult.innerHTML = `Your CGPA is ${cgpa.toFixed(2)}`;
            }
            else {
                alert("Please fill all details.")
            }
            break;
        case "4":
            if (sem_1.value != "" && sem_2.value != "" && sem_3.value != "" && sem_4.value != "") {
                cgpa = (parseFloat(sem_1.value) + parseFloat(sem_2.value) + parseFloat(sem_3.value) + parseFloat(sem_4.value)) / 4;
                cgpaResult.innerHTML = `Your CGPA is ${cgpa.toFixed(2)}`;
            }
            else {
                alert("Please fill all details.")
            }
            break;
        case "6":
            if (sem_1.value != "" && sem_2.value != "" && sem_3.value != "" && sem_4.value != "" && sem_5.value != "" && sem_6.value != "") {
                cgpa = (parseFloat(sem_1.value) + parseFloat(sem_2.value) + parseFloat(sem_3.value) + parseFloat(sem_4.value) + parseFloat(sem_5.value) + parseFloat(sem_6.value)) / 6;
                cgpaResult.innerHTML = `Your CGPA is ${cgpa.toFixed(2)}`;
            }
            else {
                alert("Please fill all details.")
            }
            break;
        case "8":
            if (sem_1.value != "" && sem_2.value != "" && sem_3.value != "" && sem_4.value != "" && sem_5.value != "" && sem_6.value != "" && sem_7.value != "" && sem_8.value != "") {
                cgpa = (parseFloat(sem_1.value) + parseFloat(sem_2.value) + parseFloat(sem_3.value) + parseFloat(sem_4.value) + parseFloat(sem_5.value) + parseFloat(sem_6.value) + parseFloat(sem_7.value) + parseFloat(sem_8.value)) / 8;
                cgpaResult.innerHTML = `Your CGPA is ${cgpa.toFixed(2)}`;
            }
            else {
                alert("Please fill all details.")
            }
            break;
        default:
            alert("Invalid number of semesters");
            break;
    }
});

//Scholarship Section
scholarship_btn.addEventListener("click", () => {
    scholarship_list.style.width = "50%";
});
list_cut.addEventListener("click", () => {
    scholarship_list.style.width = "0%";
});

//Online courses section
online_courses_btn.addEventListener("click", () => {
    online_courses_list.style.width = "50%";
});
list_cut_course.addEventListener("click", () => {
    online_courses_list.style.width = "0%";
});