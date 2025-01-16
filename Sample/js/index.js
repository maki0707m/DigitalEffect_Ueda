const boxes = document.querySelectorAll('.pageTransition__link');

boxes.forEach(box => {
    const container = box.querySelector('.pageTransition__container');
    box.addEventListener('mouseover', () => {
        box.classList.add('hovered');
        if (container) {
            container.classList.add('hovered');
        }
    });

});

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 649) { // SP版のみ適用
        const leftArea = document.querySelector('.mainVisual__sideArea--left');
        const rightArea = document.querySelector('.mainVisual__sideArea--right');
        const linksContainer = document.querySelector('.mainVisual__links');

        // リンクの入れ替え関数
        function swapLinks() {
            const links = Array.from(linksContainer.children);
            linksContainer.innerHTML = ''; // 一度すべてクリア
            links.reverse().forEach(link => linksContainer.appendChild(link)); // 順序を逆転して再配置
        }

        // 左右エリアのクリックでリンクを入れ替え
        leftArea.addEventListener('click', swapLinks);
        rightArea.addEventListener('click', swapLinks);
    }
});



