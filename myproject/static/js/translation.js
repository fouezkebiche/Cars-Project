document.addEventListener("DOMContentLoaded", function() {

const translations = {
    en: {
        "navbar-menu": "Navigation Menu",
        "welcome-text": "Your Car, Our Cash – Sell Smarter, Drive Happier!",
        "title": "Turning Cars into Cash, Hassle-Free",
        "servicetitle": "How does the sale of my car or motorhome work?",
        "service-paragraph": "We buy your vehicle, regardless of the type, at the highest price, with cash payment, and immediate collection. Contact us today for a non-binding offer.",
        "ourline": "OUR LINE",
        "offer": "Offer",
        "Deal": "Deal",
        "Cash-payment": "Cash payment",
        "Cash-payment-subtitle": "Enjoy uncomplicated cash payments.",
        "Collection": "Collection",
        "Collection-subtitle": "Determine the time and place of pickup.",
        "Deal-subtitle": "Let's make the deal perfect.",
        "offer-subtitle": "Get your non-binding offer with us.",
        "condition-title": "Your specialist in car purchasing in Zurich, Aargau, Basel, Bern, St. Gallen, Lucerne, and throughout Switzerland",
        "text_condition-paragraph1": "Anyone who wants to sell their car is often at a loss. Where can I find solvent and serious buyers? How do I not sell my car short? Do I even have time to take care of selling my car myself? All of these questions are easily answered with our car purchase because here you will find reputable buyers who will buy your car at a reasonable price and thus save you time. Whether Zurich, Aargau, Basel, Bern, St. Gallen, or Lucerne – we work for you throughout Switzerland and are therefore always exactly where you need us.",
        "text_condition-advantages": "Buying a car – your advantages",
        "text_condition-advantages-paragraph1": "When you use our car purchasing service, you can expect numerous advantages. On the one hand, you always get the best price for your car from us and can be sure that you are not wasting money unnecessarily. This saved money can then be invested in a new car, for example. As soon as we have concluded a deal that both parties are satisfied with, we will also immediately give you the agreed amount in cash. So you don't have to wait for the bank to transfer the money to your account. At the same time, the condition of your car doesn't matter because we also buy damaged cars that a normal buyer probably wouldn't buy.",
        "text_condition-advantages-paragraph2": "However, our car purchase is even more straightforward because we are also happy to pick up your car for you. No matter whether you live in Zurich, Aargau, Basel, Bern, St. Gallen, or Lucerne – we will come to your desired pickup location throughout Switzerland. Another convincing advantage is, of course, the time you save with us. You don't have to take photos of the car, place any sales advertisements online, and, as a result, you don't have to deal with dubious buyers. So if a new car is already on the horizon and things have to happen quickly, we are the right people to contact.",
        "text_condition-conditions": "Car purchase – conditions",
        "text_condition-conditions-paragraph1": "If you would like to take advantage of our car purchase in Switzerland, we only need some information about your car. The brand, the date of first registration, the mileage, the structure, the type of transmission, the model, the number of doors, the type of fuel, and the color are probably among the most important criteria that influence the price. You can enter all of this data into our online inquiry form via our website and receive an initial offer. You will then receive the offer within a very short time either by telephone or email.",
        "text_condition-conditions-paragraph2": "As you can see, there are only a few conditions for a smooth car purchase in our company. It doesn't even matter whether you live in Zurich, Aargau, Basel, Bern, St. Gallen, or Lucerne - you can reach us online or by phone from anywhere in Switzerland. Of course, you can also send us additional details about your car that may influence the value of the car. You are also welcome to send us pictures so that we can get a first impression of your car. So benefit from a quick, safe, and easy car purchase in Switzerland and contact us from Zurich, Aargau, Basel, Bern, St. Gallen, or Lucerne. We are also happy to be your contact for the cantons of Appenzell, Freiburg, Geneva, Glarus, Graubünden, Jura, Neuchâtel, Nidwalden, Obwalden, Schaffhausen, Solothurn, Schwyz, Thurgau, Ticino, Uri, Vaud, Valais, and Zug - we look forward to your inquiry!"
    },
    fr: {
        "navbar-menu": "Menu de navigation",
        "welcome-text": "Votre voiture, notre argent – ​​Vendez plus intelligemment, conduisez plus heureux !",
        "title": "Transformer les voitures en argent, sans tracas",
        "servicetitle": "Comment fonctionne la vente de ma voiture ou de mon camping-car?",
        "service-paragraph": "Nous achetons votre véhicule, quel que soit le type, au prix le plus élevé, avec paiement en espèces et retrait immédiat. Contactez-nous aujourd'hui pour recevoir une offre sans engagement.",
        "ourline": "Notre Line",
        "offer": "Offre",
        "Deal": "Accord",
        "Cash-payment": "Paiement en espèces",
        "Cash-payment-subtitle": "Profitez de paiements en espèces sans complication.",
        "Collection": "Collecte",
        "Collection-subtitle": "Déterminez l'heure et le lieu de ramassage.",
        "Deal-subtitle": "Rendons l'accord parfait.",
        "offer-subtitle": "Obtenez votre offre sans engagement avec nous.",
        "condition-title": "Votre spécialiste de l'achat de voitures à Zurich, Aargau, Bâle, Berne, Saint-Gall, Lucerne et dans toute la Suisse",
        "text_condition-paragraph1": "Toute personne qui souhaite vendre sa voiture est souvent désorientée. Où puis-je trouver des acheteurs solvables et sérieux ? Comment ne pas brader ma voiture ? Ai-je même le temps de m'occuper de la vente de ma voiture moi-même ? Toutes ces questions trouvent facilement leur réponse dans notre service d'achat de voitures, car vous y trouverez des acheteurs de bonne réputation qui achèteront votre voiture à un prix raisonnable et vous feront ainsi gagner du temps. Que vous soyez à Zurich, Aargau, Bâle, Berne, Saint-Gall ou Lucerne, nous travaillons pour vous dans toute la Suisse et sommes donc toujours là où vous en avez besoin.",
        "text_condition-advantages": "Acheter une voiture - vos avantages",
        "text_condition-advantages-paragraph1": "Lorsque vous utilisez notre service d'achat de voitures, vous pouvez vous attendre à de nombreux avantages. D'une part, vous obtenez toujours le meilleur prix pour votre voiture chez nous et pouvez donc être sûr de ne pas gaspiller d'argent inutilement. Cet argent économisé peut ensuite être investi dans une nouvelle voiture, par exemple. Dès que nous avons conclu un accord avec lequel les deux parties sont satisfaites, nous vous donnerons également immédiatement le montant convenu en espèces. Vous n'avez donc pas à attendre que la banque transfère l'argent sur votre compte. En même temps, l'état de votre voiture n'a pas d'importance car nous achetons également des voitures endommagées qu'un acheteur normal n'achèterait probablement pas.",
        "text_condition-advantages-paragraph2": "Cependant, notre service d'achat de voitures est encore plus simple car nous sommes également heureux de venir chercher votre voiture pour vous. Peu importe que vous viviez à Zurich, Aargau, Bâle, Berne, Saint-Gall ou Lucerne - nous nous rendrons à l'endroit de votre choix dans toute la Suisse. Un autre avantage convaincant est bien sûr le temps que vous gagnez avec nous. Vous n'avez pas besoin de prendre des photos de la voiture, de placer des annonces de vente en ligne et, par conséquent, vous n'avez pas à traiter avec des acheteurs douteux. Donc, si une nouvelle voiture est déjà à l'horizon et que les choses doivent aller vite, nous sommes les bonnes personnes à contacter.",
        "text_condition-conditions": "Achat de voiture – conditions",
        "text_condition-conditions-paragraph1": "Si vous souhaitez profiter de notre service d'achat de voitures en Suisse, nous avons seulement besoin de quelques informations sur votre voiture. La marque, la date de la première immatriculation, le kilométrage, la structure, le type de transmission, le modèle, le nombre de portes, le type de carburant et la couleur figurent probablement parmi les critères les plus importants qui influencent le prix. Vous pouvez saisir toutes ces données dans notre formulaire de demande en ligne via notre site Web et recevoir une offre initiale. Vous recevrez l'offre dans un très court délai, soit par téléphone, soit par e-mail.",
        "text_condition-conditions-paragraph2": "Comme vous pouvez le voir, il n'y a que quelques conditions pour un achat de voitures sans problème dans notre entreprise. Peu importe que vous viviez à Zurich, Aargau, Bâle, Berne, Saint-Gall ou Lucerne - vous pouvez nous joindre en ligne ou par téléphone de n'importe où en Suisse. Bien sûr, vous pouvez également nous envoyer des détails supplémentaires sur votre voiture qui pourraient influencer la valeur de la voiture. Vous êtes également invités à nous envoyer des photos pour que nous puissions avoir une première impression de votre voiture. Profitez donc d'un achat de voitures rapide, sûr et facile en Suisse et contactez-nous depuis Zurich, Aargau, Bâle, Berne, Saint-Gall ou Lucerne. Nous sommes également heureux d'être votre interlocuteur pour les cantons d'Appenzell, de Fribourg, de Genève, de Glaris, des Grisons, du Jura, de Neuchâtel, de Nidwald, d'Obwald, de Schaffhouse, de Soleure, de Schwytz, de Thurgovie, du Tessin, d'Uri, de Vaud, du Valais et de Zoug - nous attendons avec impatience votre demande!"
    },
    de: {
        "navbar-menu": "Navigationsmenü",
        "welcome-text": "Ihr Auto, unser Bargeld - Schlauer verkaufen, glücklicher fahren!",
        "title": "Autos einfach und bequem in Bargeld verwandeln",
        "servicetitle": "Wie funktioniert der Verkauf meines Autos oder Wohnmobils?",
        "service-paragraph": "Wir kaufen Ihr Fahrzeug, unabhängig von der Art, zum Höchstpreis, zahlen bar und holen es sofort ab. Kontaktieren Sie uns noch heute, um ein unverbindliches Angebot zu erhalten.",
        "ourline": "UNSER SORTIMENT",
        "offer": "Angebot",
        "Deal": "Deal",
        "Cash-payment": "Barzahlung",
        "Cash-payment-subtitle": "Genießen Sie unkomplizierte Barzahlungen.",
        "Collection": "Abholung",
        "Collection-subtitle": "Bestimmen Sie Zeit und Ort der Abholung.",
        "Deal-subtitle": "Machen wir den Deal perfekt.",
        "offer-subtitle": "Holen Sie sich Ihr unverbindliches Angebot bei uns.",
        "condition-title": "Ihr Spezialist für den Autoankauf in Zürich, Aargau, Basel, Bern, St. Gallen, Luzern und in der gesamten Schweiz",
        "text_condition-paragraph1": "Jeder, der sein Auto verkaufen möchte, steht oft vor einer Herausforderung. Wo finde ich zahlungskräftige und seriöse Käufer? Wie verkaufe ich mein Auto nicht unter Wert? Habe ich überhaupt Zeit, mich selbst um den Verkauf meines Autos zu kümmern? All diese Fragen werden mit unserem Autoankauf problemlos beantwortet, denn hier finden Sie seriöse Käufer, die Ihr Auto zu einem angemessenen Preis kaufen und Ihnen somit Zeit sparen. Ob Zürich, Aargau, Basel, Bern, St. Gallen oder Luzern – wir arbeiten in der gesamten Schweiz für Sie und sind daher immer genau dort, wo Sie uns brauchen.",
        "text_condition-advantages": "Autoankauf – Ihre Vorteile",
        "text_condition-advantages-paragraph1": "Wenn Sie unseren Autoankaufsservice nutzen, können Sie zahlreiche Vorteile erwarten. Einerseits erhalten Sie von uns immer den besten Preis für Ihr Auto und können sicher sein, kein Geld unnötig zu verschwenden. Das gesparte Geld kann dann beispielsweise in ein neues Auto investiert werden. Sobald wir ein Geschäft abgeschlossen haben, mit dem beide Parteien zufrieden sind, werden wir Ihnen auch sofort den vereinbarten Betrag in bar auszahlen. So müssen Sie nicht auf die Bank warten, um das Geld auf Ihr Konto zu überweisen. Dabei spielt der Zustand Ihres Autos keine Rolle, da wir auch beschädigte Autos kaufen, die ein normaler Käufer wahrscheinlich nicht kaufen würde.",
        "text_condition-advantages-paragraph2": "Unser Autoankauf ist sogar noch unkomplizierter, da wir auch gerne Ihr Auto für Sie abholen. Ganz gleich, ob Sie in Zürich, Aargau, Basel, Bern, St. Gallen oder Luzern wohnen – wir werden zu Ihrem gewünschten Abholort in der gesamten Schweiz kommen. Ein weiterer überzeugender Vorteil ist natürlich die Zeitersparnis, die Sie bei uns haben. Sie müssen keine Fotos von Ihrem Auto machen, keine Verkaufsanzeigen online schalten und müssen folglich nicht mit fragwürdigen Käufern umgehen. Wenn also bereits ein neues Auto in Sicht ist und es schnell gehen muss, sind wir die richtigen Ansprechpartner.",
        "text_condition-conditions": "Autoankauf – Bedingungen",
        "text_condition-conditions-paragraph1": "Wenn Sie unseren Autoankauf in der Schweiz nutzen möchten, benötigen wir nur einige Informationen zu Ihrem Auto. Die Marke, das Datum der Erstzulassung, der Kilometerstand, die Karosserieart, die Art des Getriebes, das Modell, die Anzahl der Türen, die Art des Kraftstoffs und die Farbe sind wahrscheinlich die wichtigsten Kriterien, die den Preis beeinflussen. Sie können all diese Daten in unser Online-Anfrageformular auf unserer Website eingeben und ein erstes Angebot erhalten. Sie werden das Angebot dann innerhalb kürzester Zeit entweder telefonisch oder per E-Mail erhalten.",
        "text_condition-conditions-paragraph2": "Wie Sie sehen können, gibt es nur wenige Bedingungen für einen reibungslosen Autoankauf in unserem Unternehmen. Es spielt keine Rolle, ob Sie in Zürich, Aargau, Basel, Bern, St. Gallen oder Luzern wohnen – Sie können uns online oder telefonisch von jedem Ort in der Schweiz erreichen. Natürlich können Sie uns auch zusätzliche Informationen zu Ihrem Auto senden, die den Wert des Autos beeinflussen könnten. Sie sind auch herzlich eingeladen, uns Fotos zu schicken, damit wir einen ersten Eindruck von Ihrem Auto bekommen können. Profitieren Sie also von einem schnellen, sicheren und unkomplizierten Autoankauf in der Schweiz und nehmen Sie Kontakt mit uns auf – sei es von Zürich, Aargau, Basel, Bern, St. Gallen oder Luzern. Wir sind auch Ihr Ansprechpartner für die Kantone Appenzell, Freiburg, Genf, Glarus, Graubünden, Jura, Neuchâtel, Nidwalden, Obwalden, Schaffhausen, Solothurn, Schwyz, Thurgau, Tessin, Uri, Waadt, Wallis und Zug. Wir freuen uns auf Ihre Anfrage!"
    }
    
};

// Function to translate text
function translateText(elementId, language) {
    const element = document.getElementById(elementId);
    if (element && translations[language] && translations[language][elementId]) {
        element.classList.add('language-transition'); // Apply the transition class
        setTimeout(() => {
            element.textContent = translations[language][elementId];
            element.classList.remove('language-transition'); // Remove the transition class after the transition
        }, 10);
    }
}

// Store the initial language
const initialLanguage = 'en';

// Translate elements to the initial language
function translateToInitialLanguage() {
    translateText('title', initialLanguage);
    translateText('service-paragraph', initialLanguage);
    translateText('servicetitle', initialLanguage);
    translateText('ourline', initialLanguage);
    translateText('offer', initialLanguage);
    translateText('Deal', initialLanguage);
    translateText('Cash-payment', initialLanguage);
    translateText('Cash-payment-subtitle', initialLanguage);
    translateText('Collection', initialLanguage);
    translateText('welcome-text', initialLanguage);
    translateText('Collection-subtitle', initialLanguage);
    translateText('Deal-subtitle', initialLanguage);
    translateText('offer-subtitle', initialLanguage);
    translateText('condition-title', initialLanguage);
    translateText('text_condition-paragraph1', initialLanguage);
    translateText('text_condition-advantages', initialLanguage);
    translateText('text_condition-advantages-paragraph1', initialLanguage);
    translateText('text_condition-advantages-paragraph2', initialLanguage);
    translateText('text_condition-conditions', initialLanguage);
    translateText('text_condition-conditions-paragraph1', initialLanguage);
    translateText('text_condition-conditions-paragraph2', initialLanguage);
}

// Translate elements to the initial language initially
translateToInitialLanguage();

// Translate elements based on the selected language
const languageButtons = document.querySelectorAll('.dropdown-menu li');
languageButtons.forEach(button => {
    button.addEventListener('click', function () {
        const language = this.id === 'switch-to-english' ? 'en' : this.id === 'switch-to-french' ? 'fr' : 'de';
        translateText('title', language);
        translateText('service-paragraph', language);
        translateText('servicetitle', language);
        translateText('ourline', language);
        translateText('offer', language);
        translateText('Deal', language);
        translateText('Cash-payment', language);
        translateText('Cash-payment-subtitle', language);
        translateText('Collection', language);
        translateText('welcome-text', language);
        translateText('Collection-subtitle', language);
        translateText('Deal-subtitle', language);
        translateText('offer-subtitle', language);
        translateText('condition-title', language);
        translateText('text_condition-paragraph1', language);
        translateText('text_condition-advantages', language);
        translateText('text_condition-advantages-paragraph1', language);
        translateText('text_condition-advantages-paragraph2', language);
        translateText('text_condition-conditions', language);
        translateText('text_condition-conditions-paragraph1', language);
        translateText('text_condition-conditions-paragraph2', language);
        
        if (language === initialLanguage) {
            // Revert to the initial language
            translateToInitialLanguage();
        }
    });
});});