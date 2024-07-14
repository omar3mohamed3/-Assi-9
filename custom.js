const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `– Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `– Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `– Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `– Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `– Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, {
    quote: `"It's not what happens to you, but how you react to it that matters."`,
    writer: `- Epictetus`
}, {
    quote: `"Resentment is like drinking poison and waiting for your enemies to die."`,
    writer: `- Nelson Mandela`
}, {
    quote: `"Do not take life too seriously. You will not get out alive."`,
    writer: `- Elbert Hubbard`
}, {
    quote: `"You miss 100% of the shots you don't take."`,
    writer: `- Wayne Gretzy`
}, {
    quote: `"The best revenge is massive success."`,
    writer: `- Frank Sinatra`
},
]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");






btn.addEventListener("click", function () {
    let random = Math.floor(Math.random() * quotes.length);


    quote.innerHTML = quotes[random].quote;


    writer.innerHTML = quotes[random].writer;
})