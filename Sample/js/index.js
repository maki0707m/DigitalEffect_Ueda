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

// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('.pageTransition__link');
//     links.forEach(link => {
//         let isExpanded = false; // タッチ状態を追跡

//         link.addEventListener('touchstart', (e) => {
//             if (!isExpanded) {
//                 e.preventDefault(); // 初回タッチでリンク移動を無効化
//                 link.classList.add('hovered');
//                 link.querySelector('.pageTransition__container').classList.add('hovered');
//                 isExpanded = true; // 次のタッチでリンク移動を許可
//             } else {
//                 window.location.href = link.href; // リンク先に移動
//             }
//         });
//     });
// });

