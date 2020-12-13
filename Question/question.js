const questions = document.querySelectorAll('.question');

questions.forEach(ques => {
    const btn = ques.querySelector('.question-btn');
    btn.addEventListener('click', () => {

        //khi click cái này hiện thì cái kia ẩn đi
        questions.forEach(item => {
            if (item !== ques) {
                item.classList.remove('show-text');
            }
        })
        ques.classList.toggle('show-text');
    })
})