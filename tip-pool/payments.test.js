describe("Payment test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 10;
    tipAmtInput.value = 1;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', function() {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments['payment1'].billAmt).toEqual('10');
      expect(allPayments['payment1'].tipAmt).toEqual('1');
      expect(allPayments['payment1'].tipPercent).toEqual(10);
  })

  it('should not add new payment to allPayments if billAmt empty', function() {
      billAmtInput.value = "";
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(0);
  })

  it('should update #paymentTable when appendPaymentTable()', function () {
    submitPaymentInfo();

    let curTdList = document.querySelectorAll("#paymentTable tbody tr td");
    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerHTML).toEqual('$10');
    expect(curTdList[1].innerHTML).toEqual('$1');
    expect(curTdList[2].innerHTML).toEqual('10%');
  })

  it('should make a new payment with createCurPayment', function() {
    let payment = {
      billAmt:'10',
      tipAmt: '1',
      tipPercent: 10
    }
    expect(createCurPayment()).toEqual(payment);
  })

  it('should not make a new payment with createCurPayment when values empty', function() {
    billAmtInput.value, tipAmtInput.value = '';
    expect(createCurPayment()).toEqual(undefined);
  })

  it

    afterEach(function() {
      // teardown logic
      billAmtInput.value, tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      paymentId = 0;
      allPayments = {};
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
    });
  })
