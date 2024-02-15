(async function () {
    const labelValue = [0, 10, 20, 30, 40, 50, 60]
    const data = {
        valuesSets: [
            {
                label: 'Dataset 1',
                data: [
                    { value: 10 },
                    { value: 5 },
                    { value: 40 },
                    { value: 20 },
                    { value: 25 },
                    { value: 20 },
                    { value: 23 },

                ]

            },
            {
                label: 'Dataset 2',
                data: [
                    { value: 22 },
                    { value: 13 },
                    { value: 8 },
                    { value: 13 },
                    { value: 8 },
                    { value: 12 },
                    { value: 20 },
                ],
            }
        ]
    };

    new Chart(
        document.getElementById('chart__minutes'),
        {
            type: 'line',
            data: {
                labels: labelValue.map(value => value),
                datasets: data.valuesSets.map(dataset => ({
                    label: dataset.label,
                    data: dataset.data.map(entry => entry.value)
                }))
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

