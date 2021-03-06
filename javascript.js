function StaffMember(name, discountPercent){
  this.name = name;
  this.discountPercent = discountPercent;
}

var employee1 = new StaffMember("Bobby", 20);
var employee2 = new StaffMember("Jill", 20);
var employee3 = new StaffMember("Hasan", 20);

var cashRegister = {
  total: 0,
  lastTransactionAmount: 0,
  add: function(itemCost){
    this.total += itemCost;
  },
  scan: function(item, quantity){
    switch (item) {
      case "eggs": this.add(0.98 * quantity); break
      case "milk": this.add(1.23 * quantity); break
      case "magazine": this.add(4.99 * quantity); break
      case "chocolate": this.add(0.45 * quantity); break
    }
    return true;
  },
  voidLastTransaction: function(lastTransactionAmount, total) {
    this.total -= this.lastTransactionAmount;
  },
  applyStaffDiscount: function(StaffMember){
    this.total -= this.total * (StaffMember.discountPercent / 100);
  }
}

cashRegister.scan("eggs", 2);
cashRegister.scan("milk", 1);
cashRegister.scan("magazine", 2);
cashRegister.voidLastTransaction();
cashRegister.scan("magazine", 1);
cashRegister.applyStaffDiscount(employee2);
console.log('your total is ' + cashRegister.total);
