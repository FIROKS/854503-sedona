var button = document.querySelector(".button-popup");
var form = document.querySelector(".search-form");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");
var adult = form.querySelector("[name=adult-input]");
var child = form.querySelector("[name=child-input]");
form.classList.remove("modal-show");
button.addEventListener("click", function(evt) {
	evt.preventDefault();
	form.classList.toggle("modal-show");
	if (form.classList.contains("modal-error")) {
		form.classList.remove("modal-error");
	}
});
form.addEventListener("submit", function(evt) {
	if (!arrival.value || !departure.value || !adult.value || !child.value) {
		evt.preventDefault();
			form.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      form.classList.add("modal-error");
	}
});