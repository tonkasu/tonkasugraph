var contact = document.getElementById("contact");
var contactInfo = document.getElementById("contact-info");
var mail = document.getElementById("mail");
var phone = document.getElementById("phone");

contact.addEventListener("click", function (e) {
  contactInfo.classList.toggle("on");
});

function copyText(val) {
  var tempElem = document.createElement("textarea");
  tempElem.value = val.target.innerText;
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);

  alert(tempElem.value + "이 복사되었습니다.");
}

mail.addEventListener("click", function (e) {
  copyText(e);
});

phone.addEventListener("click", function (e) {
  copyText(e);
});
