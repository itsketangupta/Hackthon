
const faqButtons = document.querySelectorAll(".faq_question");

faqButtons.forEach(button => {

    button.addEventListener("click", () => {

        const currentBox = button.parentElement;

        document.querySelectorAll(".faq_box").forEach(box => {

            if (box !== currentBox) {
                box.classList.remove("active");
            }

        });

        currentBox.classList.toggle("active");

    });

});