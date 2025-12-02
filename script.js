// Load Google Charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Month', 'Expenses (₹)', 'Feed (kg)'],
        ['Jan', 10000, 500],
        ['Feb', 15000, 600],
        ['Mar', 12000, 550],
        ['Apr', 18000, 700]
    ]);

    var options = {
        title: 'Monthly Expenses & Feed Consumption',
        curveType: 'function',
        legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('expenseChart'));
    chart.draw(data, options);
}

// Quick Form Submit
document.getElementById('quickForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Record added (backend integration needed).');
    // Here you can connect to Google Sheets or a backend
});