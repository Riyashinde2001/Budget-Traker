
let incomeTotal = 0;
let expenseTotal = 0;
let balance = 0;
let transactions = [];

function addTransaction() {
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;
  transactions.push({ amount, category });
  updateSummary();
}

function updateSummary() {
  incomeTotal = 0;
  expenseTotal = 0;
  balance = 0;
  transactions.forEach(transaction => {
    if (transaction.category === 'income') {
      incomeTotal += transaction.amount;
    } else if (transaction.category === 'expense') {
      expenseTotal += transaction.amount;
    }
  });
  balance = incomeTotal - expenseTotal;
  document.getElementById('incomeTotal').innerText = `Total Income: $${incomeTotal}`;
  document.getElementById('expenseTotal').innerText = `Total Expense: $${expenseTotal}`;
  document.getElementById('balance').innerText = `Balance: $${balance}`;
  updateChart();
}

function updateChart() {
  const chartData = [];
  chartData.push({ label: 'Income', y: incomeTotal });
  chartData.push({ label: 'Expense', y: expenseTotal });
  const chart = new CanvasJS.Chart('chartContainer', {
    animationEnabled: true,
    title: {
      text: 'Income vs Expense'
    },
    data: [{
      type: 'pie',
      startAngle: 240,
      yValueFormatString: '₹##0.00',
      indexLabel: '{label} {y}',
      dataPoints: chartData
    }]
  });
  chart.render();
}

function resetbutton(){
const confirmreset =window.confirm("are you sure you want to reset the page")  ;
if(confirmreset){
  const conformreload=window.confirm("are you sure you want to reset the page")  ;
  if(conformreload){
  location.reload();
  }
 }
}
document.getElementById('resetpage').addEventListener('click',resetbutton);