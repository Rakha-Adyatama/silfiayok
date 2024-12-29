onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");

        const titles = ('Hi Silfiya Wajah kamu memang cantik, tapi lebih cantik lagi kalau kamu pakai baju pengantin dan duduk di sampingku saat ijab kabul♥️🫶').split('')
        const titleElement = document.getElementById('title');
        let index = 0;

        function appendTitle() {
            if (index < titles.length) {
                titleElement.innerHTML += titles[index];
                index++;
                setTimeout(appendTitle, 100); // 1000ms delay
            }
        }

        appendTitle();

        clearTimeout(c);
    }, 1000);
};