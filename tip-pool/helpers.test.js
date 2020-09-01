describe('Helper tests (with setup and tear-down)', function() {
    beforeEach(function() {
        //initialization logic
        billAmtInput.value = 10;
        tipAmtInput.value = 1;
        submitPaymentInfo();
    });

    it('should return payment value equal to type', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(10);
        expect(sumPaymentTotal('tipAmt')).toEqual(1);
    });

    it('should sum total tip of all payments on sumPaymentTotal', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(1);
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(11);
    })

    it('should sum up total bill of all payments on sumPaymentTotal', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(10);
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(110);
    })

    it('should sum up all the tip percent of all payments on sumPaymentTotal', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(10);
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    })

    it('should convert the bill and tip amount into a tip percent', function() {
        expect(calculateTipPercent(10, 1)).toEqual(10);
        expect(calculateTipPercent(50, 1)).toEqual(2);
    })

    it('should append all table data to table row IDd as summaryTable on submitPaymentInfo()', function() {
        submitPaymentInfo();
        let curTdList = document.querySelectorAll('#summaryTable tbody tr td');
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerHTML).toEqual('$10')
        expect(curTdList[1].innerHTML).toEqual('$1');
        expect(curTdList[2].innerHTML).toEqual('10%');
    })

    // function appendTd(tr, value) {
    //     let newTd = document.createElement('td');
    //     newTd.innerText = value;

    //     tr.append(newTd);
    //   }

      //creates a new table data element
      //gives this element an inner text equal to its second argument
      //finally appends new table data element to first arugment table row
      //check length of table row children
      //check value of table data inner text

      it('should create new table data element, set td\'s inner text equal to second arguemnt and append it to first arguemnt table row', function() {
          let blankTr = document.createElement('tr');
          //create dummy table row to test on
          appendTd(blankTr, 'pizza');
          expect(blankTr.children.length).toEqual(1);
          expect(blankTr.lastChild.innerHTML).toEqual('pizza');
      })

    afterEach(function() {
        billAmtInput.value, tipAmtInput.value,paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
})
