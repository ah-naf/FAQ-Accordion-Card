$(document).ready(() => {
    const button = $('button');
    button.on('click', event => {
        const question = $(event.currentTarget).find('.question');
        const answer = $(event.currentTarget).siblings()[0];
        const arrow = $(event.currentTarget).find('.arrow');

        if (arrow.hasClass('arrow-rotate')) {
            resetAll(button);
        } else {
            resetAll(button);
            question.addClass('question-active');
            $(answer).addClass('answer-show');
            arrow.addClass('arrow-rotate');
            $(event.currentTarget).removeClass('btn');
        }

    })
});

function resetAll(button) {
    button.each((index, element) => {
        const question = $(element).find('.question');
        const answer = $(element).siblings()[0];
        const arrow = $(element).find('.arrow');
        question.removeClass('question-active');
        $(answer).removeClass('answer-show');
        arrow.removeClass('arrow-rotate');
        $(element).addClass('btn');
        // console.log(answer);
    })
}