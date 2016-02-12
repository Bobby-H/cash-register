var cashRegister = {
  total: 2.99,
  add: function(itemCost){
    this.total += itemCost;
  }
}
cashRegister.add(1.11);
cashRegister.add(2.45);
cashRegister.add(3.93);
cashRegister.add(4.76);
console.log('your total is ' + cashRegister.total);
