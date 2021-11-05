$(function () {
  $(".card-input").payment("formatCardNumber");
  $(".expiry-input").payment("formatCardExpiry");
  $(".cvc-input").payment("formatCardCVC");

  $(".form").on("submit", function (e) {
    e.preventDefault();
  });
});
