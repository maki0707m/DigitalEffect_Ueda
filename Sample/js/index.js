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
    if (window.innerWidth <= 649) {
        const leftArea = document.querySelector('.mainVisual__sideArea--left');
        const rightArea = document.querySelector('.mainVisual__sideArea--right');
        const linksContainer = document.querySelector('.mainVisual__links');
        let links = Array.from(linksContainer.children);
        let rotating = false;


        function initLinks() {
            links[0].classList.add('front');
            links[1].classList.add('toBack');
        }

        let firstClick = true;
        function swapLinks(clockwise = true) {
            if (rotating) return;
            rotating = true;

            if (firstClick) {
                initLinks();
                firstClick = false;
            }

            // 現在のリンク取得
            const frontLink = links[0];
            const backLink = links[1];

            // 時計回り or 反時計回りのクラス適用
            if (clockwise) {
                frontLink.classList.add('toBack');
                backLink.classList.add('toFront');
            } else {
                backLink.classList.add('toBack');
                frontLink.classList.add('toFront');
            }

            // アニメーション終了後の再配置
            setTimeout(() => {
                linksContainer.appendChild(links.shift());
                links = Array.from(linksContainer.children);

                // クラスリセット
                links.forEach(link => link.classList.remove('toFront', 'toBack'));
                links[0].classList.add('front');

                rotating = false;
            }, 800);
        }

        // 左クリックで反時計回り
        leftArea.addEventListener('click', () => swapLinks(true));

        // 右クリックで時計回り
        rightArea.addEventListener('click', () => swapLinks(false));
    }
});
