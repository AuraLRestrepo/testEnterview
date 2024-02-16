(async function () {
    const data = [
        { month: 'Jun', count: 25 },
        { month: 'Jul', count: 30 },
        { month: 'Aug', count: 20 },
        { month: 'Set', count: 27 },
        { month: 'Oct', count: 20 },
        { month: 'Nov', count: 26 },
        { month: 'Dec', count: 35 },
        { month: 'Jan', count: 20 },
    ];

    new Chart(
        document.getElementById('chart__subscriptors'),
        {
            type: 'bar',
            data: {
                labels: data.map(row => row.month),
                datasets: [
                    {
                        label: 'ubscriptions',
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