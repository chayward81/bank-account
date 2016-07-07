//business logic
function Account(accountName, initialDeposit, balance) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
  this.balance = balance;
}

function Manage(initialBalance, endBalance, depositAmount, withdrawAmount) {
  this.initialBalance = initialBalance;
  this.endBalance = endBalance;
  this.depositAmount = depositAmount;
  this.withdrawAmount = withdrawAmount;
}

Account.prototype.accountInfo = function() {
  return this.accountName + " " + this.balance;
}

Manage.prototype.calculateBalance = function() {
  if(this.depositAmount !== null && this.withdrawAmount === null) {
    this.endBalance = this.initialBalance + this.depositAmount;
  } else {
    this.endBalance = this.initialBalance - this.withdrawAmount;
  }
  return this.endBalance;
}



// user interface logic
$(document).ready(function() {

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("input#new-name").val();
    var inputtedinitialDeposit = parseInt($("input#new-initialDeposit").val());
    var newAccount = new Account(inputtedName, inputtedinitialDeposit);
    $(".current-balance").text(inputtedinitialDeposit);
    $("#sign-up").hide();
    $("#show-balance").show();
  });

  $("#show-balance").submit(function(event) {
    event.preventDefault();
    $("#show-balance").hide();
    $("#manage-money").show();
  });

  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var inputteddepositAmount = parseInt($("input#new-deposit").val());
    var inputtedwithdrawAmount = parseInt($("input#new-withdrawal").val());
    var newBalance = new Manage(inputteddepositAmount, inputtedwithdrawAmount);
    $("#show-balance").show();
  });
});
