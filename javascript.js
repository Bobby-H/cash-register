var cashRegister = {
  total: 2.99,
  add: function(itemCost){
    this.total += itemCost;
  },
  scan: function(item){
    switch (item, quantity) {
      case "eggs": this.add(0.98 * quantity); break
      case "milk": this.add(1.23 * quantity); break
      case "magazine": this.add(4.99 * quantity); break
      case "chocolate": this.add(0.45 * quantity); break
    }
    return true;
  }
}

cashRegister.scan("eggs", 2);
cashRegister.scan("milk", 1);
cashRegister.scan("magazine", 1);
console.log('your total is ' + cashRegister.total);
