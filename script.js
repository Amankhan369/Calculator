document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelector('.calculator-buttons');

    buttons.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const button = e.target;
            const value = button.value;
            const action = button.id;

            if (action === 'clear') {
                display.value = '';
            } else if (action === 'equals') {
                try {
                    if (display.value) {
                        // Using Function constructor for safer evaluation than eval()
                        const result = new Function('return ' + display.value)();
                        display.value = result;
                    }
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (value !== undefined) {
                display.value += value;
            }
        }
    });
});
