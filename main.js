const quotes = [
    '"A society that separates its scholars from its warriors will have its thinking done by cowards and its fighting done by fools." - Thucydides',
    '"These are the stakes! To make a world in which all of God\'s children can live, or go into the dark. We must either love each other, or we must die." - Lyndon B. Johnson',
    '"I am, somehow, less interested in the weight and convolutions of Einstein\'s brain than in the near certainty that people of equal talent have lived and died in cotton fields and sweatshops." - Stephen Jay Gould',
    '"Those who make peaceful revolution impossible will make violent revolution inevitable." - John F. Kennedy',
    '"War is not the answer, for only love can conquer hate." - Marvin Gaye',
    '"What else can I desire than to exclude nothing and learn how to braid with white thread and black thread a single cord stretched to the breaking-point?" - Albert Camus',
    '"We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed." - Martin Luther King Jr.',
    '"The imitator dooms himself to hopelss mediocrity." - Ralph Waldo Emerson',
    '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela',
    '"Those who cannot remember the past are condemned to repeat it." - George Santayana'
];
const quote = document.createElement('p');
function getQuote() {
    quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quoteContainer').appendChild(quote);
}
quoteButton = document.getElementById('quoteButton');
quoteButton.addEventListener('click', getQuote);