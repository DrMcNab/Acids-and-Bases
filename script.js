window.onload = function() {
    var urls = [
        'https://forms.office.com/e/RKb3pumPtK',
        'https://forms.office.com/e/LhphR5XZhZ',
        'https://forms.office.com/e/uWgfGr54w7',
        'https://forms.office.com/e/5QkypEhRxm'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
