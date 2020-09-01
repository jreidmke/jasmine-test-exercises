
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 35000,
    years: 25,
    rate: 2
  })).toEqual('148.35');

  expect(calculateMonthlyPayment({
    amount: 200000,
    years: 2,
    rate: 50
  }
  )).toEqual('13342.16')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 1000,
    years: 30,
    rate: 5
  })).not.toEqual('5.378');
  expect(calculateMonthlyPayment({
    amount: 1000,
    years: 30,
    rate: 5
  })).toEqual('5.37');
});

/// etc
it('should accept zero dollars as a principal', function() {
  expect(calculateMonthlyPayment({
    amount: 0,
    years: 10,
    rate: 4.5
  })).toEqual('0.00');
  expect(calculateMonthlyPayment({
    amount: 0,
    years: 50,
    rate: 5
  })).not.toEqual('0');
})