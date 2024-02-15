(async function () {
    const data = [
        { month: 'Jun', count: 10 },
        { month: 'Jul', count: 20 },
        { month: 'Aug', count: 15 },
        { month: 'Set', count: 12 },
        { month: 'Oct', count: 11 },
        { month: 'Nov', count: 13},
        { month: 'Dec', count: 22 },
        { month: 'Jan', count: 35 },
    ];

    new Chart(
        document.getElementById('chart__revenue'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.month),
                datasets: [
                    {
                        label: 'Subscriptors',
                        data: data.map(row => row.count)
                    }
                ]
            },
            options: {
                responsive: true,
            },
            scales: {
                y: {
                    min: 0,
                    max: 40,
                }
            }
        }
    );
})();