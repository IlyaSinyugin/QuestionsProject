// // traversing the dom; Option 1
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

// using selectors inside the element; Option 2
const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    console.log(btn);
    btn.addEventListener('click', function () {
        question.classList.toggle('show-text');
    })
});