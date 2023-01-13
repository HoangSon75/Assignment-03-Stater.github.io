"use strict";
/*
import Masonry from "masonry-layout";

/*
window.onload = () => {
  const grid = document.querySelector("row");
  const masonry = new Masonry(grid);
};
*/
const btnSubmit = document.querySelector(".submit");
const personalInfor = document.querySelector("#personal-information");
const mailInput = document.querySelector("#email-input");
const closeBtn = document.querySelector(".close-btn-position");
const mail = document.querySelector("#email");
const invalidEmail = document.querySelector(".invalid-email");
const emailLable = document.querySelector("#email-label");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

mail.addEventListener("click", function () {
  mail.classList.remove("email-error");
  emailLable.classList.remove("invalid-email");
  emailLable.textContent = 'Hãy nhập "123@gmail.com" để xác thực';
});

function ValidateEmail(inputText) {
  const mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const emailText = document.querySelector("#email").value;

  if (inputText.value.match(mailformat)) {
    if (emailText === "123@gmail.com") {
      personalInfor.classList.remove("hidden");
      mailInput.classList.add("hidden");
    } else {
      emailLable.textContent = "Email bạn vừa nhập không hợp lệ!!!";
      emailLable.classList.add("invalid-email");
      mail.classList.add("email-error");
    }
    document.form1.text1.focus();
    return true;
  } else {
    emailLable.textContent = "Email bạn vừa nhập không đúng định dạng!!!";
    emailLable.classList.add("invalid-email");
    mail.classList.add("email-error");
    document.form1.text1.focus();
    return false;
  }
}

closeBtn.addEventListener("click", function () {
  mailInput.classList.remove("hidden");
  personalInfor.classList.add("hidden");
  mail.value = "";
});

function showBtn(x) {
  const viewInforBtn = x.querySelector(".view-infor-btn");
  const clickBtn = x.querySelector(".view-infor-btn").onclick;
  const browserWidth = window.innerWidth;

  viewInforBtn.classList.remove("hidden");
  x.classList.add("summary-shadow-hide");

  if (browserWidth < 768) {
    viewInforBtn.classList.add("btn-position");
  } else if (browserWidth < 768 && clickBtn == true) {
    viewInforBtn.classList.remove("btn-position");
  }
}

function hideBtn(x) {
  const viewInforBtn = x.querySelector(".view-infor-btn");

  viewInforBtn.classList.add("hidden");
  x.classList.remove("summary-shadow-hide");
}

function ShowHide(y) {
  const cardBody = y.parentElement;
  const viewInforBtn = cardBody.querySelector(".view-infor-btn");
  const moreInfor = cardBody.querySelector(".more-information");
  const browserWidth = window.innerWidth;

  let moreless = true;

  if (moreInfor.style.display === "block") {
    moreInfor.style.display = "none";
    viewInforBtn.textContent = "▼ VIEW MORE";

    if (browserWidth > 768) {
      viewInforBtn.classList.remove("btn-position");
    }
    moreless = true;
  } else {
    moreInfor.style.display = "block";
    viewInforBtn.textContent = "▲ VIEW LESS";
    viewInforBtn.classList.add("btn-position");
    moreless = false;
  }

  if (moreless) {
    viewInforBtn.textContent = "▼ VIEW MORE";
  } else {
    viewInforBtn.textContent = "▲ VIEW LESS";
  }
}
