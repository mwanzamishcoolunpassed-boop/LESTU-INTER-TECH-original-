window.onload = function () {  
    document.getElementById("mishcool").style.display = "none";  
};  
  
  const API = window.location.origin;
  
function signup() {  
    document.getElementById("buttons").style.display = "none";  
    document.getElementById("signup").style.display = "grid";  
}  

function goo() {  
    document.getElementById("name").style.display = "none";  
    document.getElementById("mishcool").style.display = "block";  
}  

function black() {  
    document.getElementById("name").style.display = "flex";  
    document.getElementById("mishcool").style.display = "none";  
}  
  
function openSignIn() {  
    document.getElementById("studentPortal").style.display = "none";  
    document.getElementById("loginPortal").style.display = "grid";  
}  
  
function lectureslogin() {  
  
    const password = document.getElementById("lecturesPassword").value;  
  fetch(`${API}/lectures/login`, {
    
  
        method: "POST",  
  
        headers: {  
            "Content-Type": "application/json"  
        },  
  
        body: JSON.stringify({  
            password  
        })  
  
    })  
  
    .then(response => response.json())  
  
    .then(data => {  
  
        if (data.success) {  
  
            document.getElementById("mishcool").style.display = "none";  
  
            document.getElementById("buttons").style.display = "grid";  
  
            document.getElementById("note").textContent =  
                "Welcome! Please sign in or log in.";  
  
        } else {  
  
            alert(data.message);  
  
        }  
  
    });  
  
}  
  
function studentsLogin() {  
  
    const password = document.getElementById("studentsPassword").value;  
  
    fetch(`${API}/students/login`, {
        method: "POST",  
  
        headers: {  
            "Content-Type": "application/json"  
        },  
  
        body: JSON.stringify({  
            password  
        })  
  
    })  
  
    .then(response => response.json())  
  
    .then(data => {  
  
        if (data.success) {  
  
            alert("Access granted");  
  
            document.getElementById("mishcool").style.display = "none";  
  
            document.getElementById("studentPortal").style.display = "block";  
  
        } else {  
  
            alert(data.message);  
  
        }  
  
    });  
  
}  
  
function openSignUp() {  
  
    document.getElementById("sup").style.display = "block";  
    document.getElementById("studentPortal").style.display = "none";  
  
}  
  
function submit() {  
  
    const firstName = document.getElementById("firstName").value;  
    const lastName = document.getElementById("lastName").value;  
    const password = document.getElementById("password").value;  
  
    const course1 = document.getElementById("course1").value;  
    const course2 = document.getElementById("course2").value;  
    const course3 = document.getElementById("course3").value;  
  
    fetch(`${API}/lectures/signup`, {
        method: "POST",  
  
        headers: {  
            "Content-Type": "application/json"  
        },  
  
        body: JSON.stringify({  
            firstName,  
            lastName,  
            password,  
            course1,  
            course2,  
            course3  
        })  
  
    })  
  
    .then(res => res.json())  
  
    .then(data => {  
  
        if (data.success) {  
  
            localStorage.setItem("lecturerFirstName", firstName);  
            localStorage.setItem("lecturerLastName", lastName);  
  
            document.getElementById("signup").style.display = "none";  
            document.getElementById("lecture").style.display = "grid";  
  
            document.getElementById("lecfullname").textContent =  
                firstName + " " + lastName;  
  
        } else {  
  
            alert(data.message);  
  
        }  
  
    });  
  
}  

function regStu() {  
  
    const firstName = document.getElementById("fn").value;  
    const lastName = document.getElementById("ln").value;  
    const password = document.getElementById("pw").value;  
  
    const course1 = document.getElementById("c1").value;  
    const course2 = document.getElementById("c2").value;  
    const course3 = document.getElementById("c3").value;  
    const course4 = document.getElementById("c4").value;  
    const course5 = document.getElementById("c5").value;  
  
    fetch(`${API}/students/signup`, {
        method:"POST",  
  
        headers:{  
            "Content-Type":"application/json"  
        },  
  
        body:JSON.stringify({  
            firstName: firstName,  
            lastName: lastName,  
            password: password,  
            course1: course1,  
            course2: course2,  
            course3: course3,  
            course4: course4,  
            course5: course5  
        })  
  
    })  
  
    .then(response => response.json())  
  
    .then(data => {  
  
        if (!data.success) return;  
  
        document.getElementById("sup").style.display = "none";  
        document.getElementById("stuName").style.display = "block";  
  
        document.getElementById("stN").textContent =  
            "NAME: " + data.fullName;  
  
        const work = document.getElementById("wrk");  
        work.innerHTML = "";  
  
        data.courses.forEach(course => {  
  
            let lecturer = "Not Assigned";  
  
            data.lecturers.forEach(l => {  
  
                if (l.courses.includes(course)) {  
  
                    lecturer = l.firstName + " " + l.lastName;  
  
                }  
  
            });  
  
            work.innerHTML += `  
                <div class="courseCard">  
                    <h3 class="course">${course}</h3>  
                    <h5 class="incharge">(${lecturer})</h5>  
                    <div class="marks"></div>  
                    <h4>ANNOUNCEMENTS</h4>  
                </div>  
            `;  
  
        });  
  
    });  
  
}  


function login() {  
  
    document.getElementById("buttons").style.display = "none";  
    document.getElementById("loggin").style.display = "block";  
  
}  


function enter() {  
  
    const firstName = document.getElementById("first").value;  
    const lastName = document.getElementById("last").value;  
    const password = document.getElementById("pass").value;  
  
    fetch(`${API}/lectures/enter`, {
        method:"POST",  
  
        headers:{  
            "Content-Type":"application/json"  
        },  
  
        body:JSON.stringify({  
            firstName,  
            lastName,  
            password  
        })  
  
    })  
  
    .then(res => res.json())  
  
    .then(data => {  
  
        if(data.success){  
  
            localStorage.setItem("lecturerFirstName", data.firstName);  
            localStorage.setItem("lecturerLastName", data.lastName);  
  
            document.getElementById("loggin").style.display = "none";  
            document.getElementById("lecture").style.display = "grid";  
  
            document.getElementById("lecfullname").textContent =  
                data.firstName + " " + data.lastName;  
  
        } else {  
  
            alert(data.message);  
  
        }  
  
    });  
  
}  


function awardMarks() {  
  
    const firstName = localStorage.getItem("lecturerFirstName");  
    const lastName = localStorage.getItem("lecturerLastName");  
  
    console.log(firstName, lastName);  
  
    fetch(`${API}/lectures/courses/${firstName}/${lastName}`)
  
    .then(res => res.json())  
  
    .then(data => {  
  
        document.getElementById("lecture").style.display = "none";  
  
        const cards = document.getElementById("courseCards");  
  
        cards.style.display = "grid";  
  
        cards.innerHTML = `  
            <button class="backBtn" onclick="logmenu()">  
                ← ← BACK  
            </button>  
        `;  
  
        [data.course1, data.course2, data.course3]  
        .filter(Boolean)  
        .forEach(course => {  
  
            cards.innerHTML += `  
                <div class="courseCard" onclick="openCourse('${course}')">  
                    <h3>${course}</h3>  
                </div>  
            `;  
  
        });  
  
    })  
  
    .catch(err => {  
        console.error(err);  
        console.error(err.message);  
        console.error(err.stack);  
    });  
  
}  

function openCourse(course) {  
  
    fetch(`${API}/course/${encodeURIComponent(course)}/students`) 
  
    .then(res => res.json())  
  
    .then(data => {  
  
        document.getElementById("courseCards").style.display = "none";  
        document.getElementById("courseavai").style.display = "block";  
  
        document.getElementById("coursename").textContent = course;  
  
        const container = document.getElementById("stulearn");  
        container.innerHTML = "";  
  
        data.forEach(student => {  
  
            container.innerHTML += `  
<div class="studentCard">  
  
    <h2 class="stuname">${student.firstName} ${student.lastName}</h2>  
  
    <input  
        class="boxinput"  
        type="number"  
        min="0"  
        max="100"  
        maxlength="3">  
  
    <button  
        class="updateMarks"  
        onclick="updateMarks(  
            '${student.firstName}',  
            '${student.lastName}',  
            '${course}',  
            this  
        )">  
  
        UPDATE  
  
    </button>  
  
    <h3 class="position">Position:</h3>  
  
    <h3 class="gradein123">Grade (1-9):</h3>  
  
    <h3 class="gradeinAB">Letter Grade:</h3>  
  
</div>  
`;  
  
        });  
  
        console.log(data);  
  
    });  
  
}  
  
function ignitePortal() {  
  
    const firstName = document.getElementById("portalFirst").value;  
    const lastName = document.getElementById("portalLast").value;  
    const password = document.getElementById("portalPass").value;  
  
    fetch(`${API}/students/portal-access`, {
  
        method: "POST",  
  
        headers: {  
            "Content-Type": "application/json"  
        },  
  
        body: JSON.stringify({  
            firstName,  
            lastName,  
            password  
        })  
  
    })  
  
    .then(response => response.json())  
  .then(data => {

    console.log(data);

    if (!data.success) {
        alert(data.message);
        return;
    }
  
  
        document.getElementById("loginPortal").style.display = "none";  
        document.getElementById("stuName").style.display = "block";  
  
        document.getElementById("stN").textContent =  
            "NAME: " + data.fullName;  
  
        const work = document.getElementById("wrk");  
        work.innerHTML = "";  
  
        data.courses.forEach(course => {  
  
            let lecturer = "Not Assigned";  
  
            data.lecturers.forEach(l => {  
  
                if (l.courses.includes(course)) {  
  
                    lecturer = l.firstName + " " + l.lastName;  
  
                }  
  
            });  
  
            work.insertAdjacentHTML("beforeend", `  
<div class="courseCard">  
  
    <h3 class="course">${course}</h3>  
  
    <h5 class="incharge">(${lecturer})</h5>  
  
    <div class="resultSummary">  
  
        <div class="summaryBox marksBox">  
            <p>MARKS</p>  
            <h2 class="marks">0%</h2>  
        </div>  
  
        <div class="summaryBox gradeNumberBox">  
            <p>GRADE</p>  
            <h2 class="granumbers">-</h2>  
        </div>  
  
        <div class="summaryBox gradeLetterBox">  
            <p>LETTER</p>  
            <h2 class="graABC">-</h2>  
        </div>  
  
        <div class="positionBadge">  
            <span>🏆</span>  
            <h3 class="ovaral">-</h3>  
            <small>POSITION</small>  
        </div>  
  
    </div>  
  
    <h4>ANNOUNCEMENTS</h4>  
  
    <div class="announcementText">  
        No announcements yet.  
    </div>  
  
</div>  
`);  
  
            const card = work.lastElementChild;  
  
            loadStudentResults(  
                data.firstName,  
                data.lastName,  
                course,  
                card  
            );  
  
        });  
  
    });  
  
}  
  
function updateMarks(firstName, lastName, course, button) {  
  
    const card = button.parentElement;  
  
    const marks = Number(  
        card.querySelector(".boxinput").value  
    );  
    
    fetch(`${API}/students/updateMarks`, {
      'name': value,
  
        method: "POST",  
  
        headers: {  
            "Content-Type": "application/json"  
        },  
  
        body: JSON.stringify({  
            firstName,  
            lastName,  
            course,  
            marks  
        })  
  
    })  
  
    .then(res => res.json())  
  
    .then(data => {  
  
        if (!data.success) {  
            alert(data.message);  
            return;  
        }  
  
        localStorage.setItem("lecturerFirstName", data.firstName);  
        localStorage.setItem("lecturerLastName", data.lastName);  
        localStorage.setItem("userType", "lecturer");  
  
        card.querySelector(".gradein123").textContent =  
            "Grade: " + data.gradeNumber;  
  
        card.querySelector(".gradeinAB").textContent =  
            data.gradeLetter;  
  
        card.querySelector(".position").textContent =  
            "Position: " + data.position;  
  
        alert(data.message);  
  
    });  
  
}

function loadStudentResults(firstName, lastName, course, card) {

    fetch(`${API}/students/results`, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            firstName,
            lastName,
            course
        })

    })

    .then(res => res.json())

    .then(data => {

        console.log(data);

        if (!data.success) {
            alert(data.message);
            return;
        }

        card.querySelector(".marks").textContent =
            data.mark + "%";

        card.querySelector(".granumbers").textContent =
            data.gradeNumber;

        card.querySelector(".graABC").textContent =
            data.gradeLetter;

        card.querySelector(".ovaral").textContent =
            data.position;

        loadAnnouncements(course, card);

    })

    .catch(err => console.log(err));

}

function lecback() {

    document.getElementById("signup").style.display = "none";
    document.getElementById("loggin").style.display = "none";

    document.getElementById("buttons").style.display = "grid";

}

function logmenu() {

    document.getElementById("lecture").style.display = "grid";

    document.getElementById("courseCards").style.display = "none";

}

function backi() {

    document.getElementById("courseavai").style.display = "none";

    document.getElementById("courseCards").style.display = "grid";

}

function openAnnouncements() {

    document.getElementById("lecture").style.display = "none";

    document.getElementById("announce").style.display = "grid";

    annou();

    loadLecturerAnnouncements();

}

function goBack() {

    document.getElementById("announce").style.display = "none";

    document.getElementById("lecture").style.display = "grid";

}

function annou() {

    const firstName = localStorage.getItem("lecturerFirstName");
    const lastName = localStorage.getItem("lecturerLastName");

    fetch(`${API}/lectures/courses/${firstName}/${lastName}`)

    .then(res => res.json())

    .then(data => {

        const section = document.querySelector("#announce section");

        section.innerHTML = "";

        const courses = [
            data.course1,
            data.course2,
            data.course3
        ].filter(Boolean);

        if (courses.length === 0) {

            section.innerHTML = `
                <div class="courseChoice">
                    No courses assigned
                </div>
            `;

            return;
        }

        courses.forEach(course => {

            section.innerHTML += `
                <div class="courseChoice"
                     onclick="sendAnnouncement('${course}')">
                    ${course}
                </div>
            `;

        });

    })

    .catch(err => {

        console.error(err);

        alert("Unable to load courses.");

    });

}

function sendAnnouncement(course) {

    const announcement =
        document.getElementById("black").value.trim();

    if (announcement === "") {
        alert("Type an announcement first.");
        return;
    }
fetch(`${API}/lectures/announcement`, {
    
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            course,
            announcement
        })

    })

    .then(res => res.json())

    .then(data => {

        if (!data.success) {
            alert(data.message);
            return;
        }

        loadLecturerAnnouncements();

        document.getElementById("black").value = "";

        alert(data.message);

    })

    .catch(console.error);

}

function loadAnnouncements(course, card){

    console.log("Loading announcements for:", course);

    fetch(`${API}/students/announcements/${course}`)

    .then(res => res.json())

    .then(data => {

        console.log("Announcements received:", data);

        const announcementBox = card.querySelector(".announcementText");

        announcementBox.innerHTML = "";

        if(data.announcements.length === 0){
            announcementBox.innerHTML = "No announcements yet.";
            return;
        }

        data.announcements.forEach(a => {

            console.log(a);

            announcementBox.innerHTML += `
                <div class="note">
                    <h4>${a.course}</h4>
                    <p>${a.announcement}</p>
                    <small>${a.date}</small>
                </div>
            `;

        });

    })

    .catch(err => console.error(err));

}