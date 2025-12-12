// العناصر الرئيسية
const splash = document.getElementById("splash");
const loginPage = document.getElementById("loginPage");
const startBtn = document.getElementById("startBtn");
const loginBox = document.getElementById("loginBox");
const loginBtn = document.getElementById("loginBtn");
const studentID = document.getElementById("studentID");
const departmentsPage = document.getElementById("departmentsPage");
const subjectsPage = document.getElementById("subjectsPage");
const modeBtn = document.getElementById("modeBtn");
const backBtn = document.getElementById("backBtn"); // زر الرجوع

// -----------------------------------
// عرض Splash ثم الانتقال لصفحة الدخول
// -----------------------------------
setTimeout(() => {
    splash.style.display = "none";
    loginPage.style.display = "flex";
}, 3000);

// -----------------------------------
// عند الضغط على زر البدء في Splash
// -----------------------------------
startBtn.addEventListener("click", () => {
    startBtn.style.display = "none";
    loginBox.style.display = "block";
    loginBox.style.animation = "fade 0.8s forwards";
});

// -----------------------------------
// عند الضغط على زر الدخول
// -----------------------------------
loginBtn.addEventListener("click", () => {
    const id = parseInt(studentID.value);

    // تحقق من رقم الطالب (تغيير حسب الحاجة)
    if (id >= 222001 && id <= 224999) {
        loginPage.style.display = "none";
        departmentsPage.style.display = "block";
    } else {
        alert("رقم خاطئ");
    }
});

// -----------------------------------
// عند اختيار قسم
// -----------------------------------
document.querySelectorAll(".department").forEach(dept => {
    dept.addEventListener("click", () => {
        if (dept.classList.contains("coming")) return; // المواد القادمة غير نشطة
        departmentsPage.style.display = "none";
        subjectsPage.style.display = "block";
    });
});

// -----------------------------------
// زر الرجوع من Subjects إلى Departments
// -----------------------------------
if (backBtn) {
    backBtn.addEventListener("click", () => {
        subjectsPage.style.display = "none";
        departmentsPage.style.display = "block";
    });
}

// -----------------------------------
// (إلغاء الوضع الليلي)
// -----------------------------------
// هذا الكود موجود سابقًا لتغيير الوضع، يمكن حذفه أو تركه
if (modeBtn) {
    modeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
    });
}