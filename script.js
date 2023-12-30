function monthly_sub() {
  const error_msg_place = document.querySelector("#error_msg");
  const email = document.querySelector("#email").value;
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  if (email == "") {
    error_msg_place.innerHTML = "Email require";
    error_msg_place.style.color = "#f00";
    return false;
  } else if (!validateEmail(email)) {
    error_msg_place.innerHTML = "valid email required";
    error_msg_place.style.color = "#f00";
    return false;
  } else {
    return true;
  }
}
