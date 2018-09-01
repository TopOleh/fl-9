class UserAccount {
  constructor (name) {
    this.name = name;
    this.cards = [];
  }
  addCard() {
    const maxCards = 3;
    const nextCard = this.cards.length + 1;
    return this.cards.length < maxCards ? this.cards.push(userCard(nextCard)) : console.log('Too many cards');
  }
  getCardByKey (index) {
    return this.cards[index - 1] ? userCard(index) : console.log('Card does not exist!');
  }
}
function userCard (index) {
  let balance = 100;
  let transactionLimit = 100;
  let errorLog = [];

  const historyLog = [];
  const key = index;

  const transactionCheck = (credits) => {
    const empty = 0;
    errorLog = [];
    if (balance < credits) {
      errorLog.push(`Error: Not enough money! Balance: ${balance}!`);
    }
    if ( transactionLimit < credits) {
      errorLog.push(`Error: Transaction limit is ${transactionLimit}!`);
    }
    if (errorLog.length > empty) {
      return errorLog;
    } else {
      return false;
    }
  };

  const getDate = () => {
    const date = new Date();
    const ten = 10; // First two signed number
    // const twelveHoursTime = (data) => data > twelve ? data - twelve : data; //for twelve time clock
    // const twelve = 12; // Twelve hours clock
    const checkZero = (data) => data < ten ? '0' + data : data;

    const mm = checkZero(date.getMonth() + 1);
    const dd = checkZero(date.getDate());
    const yyyy = date.getFullYear();
    const hh = checkZero(date.getHours()); //use twelveHoursTime(date.getHours()) - if it must be 12time clock
    const min = checkZero(date.getMinutes());
    const sec = checkZero(date.getSeconds());

    return [dd, mm, yyyy].join('/') + ', ' + [hh, min, sec].join(':');
  };

  const getCardOptions = () => {
    return {
      key,
      balance,
      transactionLimit,
      historyLog
    }
  };

  const fillHistory = (operationType, credits, operationTime) => {
    operationTime = getDate();
    let happen = {
      operationType,
      credits,
      operationTime
    };
    return historyLog.push(happen);
  };

  const putCredits = (credits) => {
    fillHistory('Received credits', credits);
    balance += credits;
    return balance;
  };

  const takeCredits = (credits) => {
    if (transactionCheck(credits)) {
      return errorLog;
    } else {
      fillHistory('Withdrawal of credits', credits);
      balance -=credits;
      return balance;
    }
  };

  const setTransactionLimit = (credits) => {
    fillHistory('Transaction limit change', credits);
    transactionLimit = credits;
    return transactionLimit;
  };
  const transferCredits = (credits, card) => {
    const hundredPer = 100; // 100%
    const taxes = 0.5;
    const taxed = credits + credits/hundredPer * taxes;
    if (transactionCheck(taxed)) {
      return transactionCheck()
    } else {
      takeCredits(taxed);
      return card.putCredits(credits);
    }
  };
  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits
  };
}