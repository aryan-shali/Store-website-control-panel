function forgetPass() {
    alert("فکر کن یادت میاد")
}


function check(el) {
    let user = document.getElementById("i-user").value;
    let pass = document.getElementById("i-pass").value;
    let demo = document.getElementById("false");
    document.getElementById("i-user").value = "";
    document.getElementById("i-pass").value = "";
    if (pass == "" || user == "") {
        demo.innerHTML = "مقادیر ورودی را پر کنید";

    } else if (user != "admin" || pass != "12345") {
        demo.innerHTML = "نام کاربری یا رمز عبور درست نیست";
    } else {
        demo.innerHTML = "";
        window.location = "../index.html"
    }
    var el2 = el;
    el2.style.margin = "10px 0 0 0"
    console.log(pass + user);
}