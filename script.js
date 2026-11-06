// UNIVERSAL GLOBAL ENCYCLOPEDIA

function searchWebsite() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let sections = document.querySelectorAll("main section");

    let found = false;

    if (input.trim() === "") {
        document.getElementById("searchResult").innerText =
            "Please enter something to search.";
        return;
    }

    sections.forEach(function(section) {

        let content = section.innerText.toLowerCase();

        if (content.includes(input)) {

            section.scrollIntoView({
                behavior: "smooth"
            });

            found = true;
        }

    });

    if (found) {
        document.getElementById("searchResult").innerText =
            "Knowledge found! Welcome to Universal Global Encyclopedia.";
    } else {
        document.getElementById("searchResult").innerText =
            "Sorry, no information found. Try another keyword.";
    }

}
// UNIVERSAL GLOBAL ENCYCLOPEDIA
// LANGUAGE SYSTEM

const translations = {

    en: {
        tagline: "Knowledge for Everyone, Everywhere",
        home: "Home",
        education: "Education",
        business: "Business",
        technology: "Technology",
        about: "About",
        welcome: "Welcome to Universal Global Encyclopedia",
        introduction: "Explore knowledge, education, business and information from around the world.",
        search: "Search",
        educationText: "Learn science, history, mathematics, languages and more.",
        businessText: "Discover entrepreneurship, finance, marketing and business ideas.",
        technologyText: "Explore programming, artificial intelligence and digital skills.",
        aboutText: "Our mission is to make knowledge accessible to everyone worldwide."
    },

    ny: {
        tagline: "Chidziwitso kwa Aliyense, Kulikonse",
        home: "Kunyumba",
        education: "Maphunziro",
        business: "Mabizinesi",
        technology: "Ukadaulo",
        about: "Zokhudza Ife",
        welcome: "Takulandirani ku Universal Global Encyclopedia",
        introduction: "Fufuzani chidziwitso, maphunziro, mabizinesi ndi nkhani zochokera padziko lonse.",
        search: "Fufuzani",
        educationText: "Phunzirani sayansi, mbiri, masamu, zilankhulo ndi zina.",
        businessText: "Dziwani za malonda, ndalama, kutsatsa ndi malingaliro a mabizinesi.",
        technologyText: "Dziwani za programming, luntha lochita kupanga ndi luso la digito.",
        aboutText: "Cholinga chathu ndi kufikitsa chidziwitso kwa anthu onse padziko lonse."
    },

    fr: {
        tagline: "Le savoir pour tous, partout",
        home: "Accueil",
        education: "Éducation",
        business: "Entreprise",
        technology: "Technologie",    welcome: "Bienvenue dans Universal Global Encyclopedia",
        introduction: "Explorez les connaissances, l'éducation et les affaires du monde entier.",
        search: "Rechercher",
        educationText: "Apprenez les sciences, l'histoire, les mathématiques et les langues.",
        businessText: "Découvrez l'entrepreneuriat, la finance et le marketing.",
        technologyText: "Explorez la programmation, l'intelligence artificielle et les compétences numériques.",
        aboutText: "Notre mission est de rendre le savoir accessible à tous."
    },

    sw: {
        tagline: "Maarifa kwa kila mtu, kila mahali",
        home: "Nyumbani",
        education: "Elimu",
        business: "Biashara",
        technology: "Teknolojia",
        about: "Kuhusu Sisi",
        welcome: "Karibu Universal Global Encyclopedia",
        introduction: "Gundua maarifa, elimu na biashara kutoka duniani kote.",
        search: "Tafuta",
        educationText: "Jifunze sayansi, historia, hisabati na lugha.",
        businessText: "Gundua ujasiriamali, fedha na masoko.",
        technologyText: "Jifunze programu, akili bandia na ujuzi wa kidijitali.",
        aboutText: "Dhamira yetu ni kufanya maarifa yapatikane kwa kila mtu."
    },

    es: {
        tagline: "Conocimiento para todos, en todas partes",
        home: "Inicio",
        education: "Educación",
        business: "Negocios",
        technology: "Tecnología",
        about: "Acerca de",
        welcome: "Bienvenido a Universal Global Encyclopedia",
        introduction: "Explora conocimientos, educación y negocios de todo el mundo.",
        search: "Buscar",
        educationText: "Aprende ciencias, historia, matemáticas e idiomas.",
        businessText: "Descubre emprendimiento, finanzas y marketing.",
        technologyText: "Explora programación, inteligencia artificial y habilidades digitales.",
        aboutText: "Nuestra misión es hacer que el conocimiento sea accesible para todos."
    },

    pt: {
        tagline: "Conhecimento para todos, em todos os lugares",
        home: "Início",
        education: "Educação",
        business: "Negócios",
        technology: "Tecnologia",
        about: "Sobre nós",
        welcome: "Bem-vindo à Universal Global Encyclopedia",
        introduction: "Explore conhecimentos, educação e negócios de todo o mundo.",
        search: "Pesquisar",
        educationText: "Aprenda ciências, história, matemática e idiomas.",
        businessText: "Descubra empreendedorismo, finanças e marketing.",
        technologyText: "Explore programação, inteligência artificial e competências digitais.",
        aboutText: "Nossa missão é tornar o conhecimento acessível a todos."
    },

    ar: {
        tagline: "المعرفة للجميع وفي كل مكان",
        home: "الرئيسية",
        education: "التعليم",
        business: "الأعمال",
        technology: "التكنولوجيا",
        about: "من نحن",
        welcome: "مرحباً بكم في الموسوعة العالمية الشاملة",
        introduction: "اكتشف المعرفة والتعليم والأعمال من جميع أنحاء العالم.",
        search: "بحث",
        educationText: "تعلم العلوم والتاريخ والرياضيات واللغات.",
        businessText: "اكتشف ريادة الأعمال والتمويل والتسويق.",
        technologyText: "استكشف البرمجة والذكاء الاصطناعي والمهارات الرقمية.",
        aboutText: "مهمتنا جعل المعرفة متاحة للجميع."
    }

};
function changeLanguage() {

    const language = document.getElementById("languageSelect").value;
    const t = translations[language];

    if (!t) return;

    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    document.querySelector("header p").innerText = t.tagline;

    document.querySelector('nav a[href="#home"]').innerText = t.home;
    document.querySelector('nav a[href="#education"]').innerText = t.education;
    document.querySelector('nav a[href="#business"]').innerText = t.business;
    document.querySelector('nav a[href="#technology"]').innerText = t.technology;
    document.querySelector('nav a[href="#about"]').innerText = t.about;

    document.querySelector("#home h2").innerText = t.welcome;
    document.querySelector("#home p").innerText = t.introduction;
    document.querySelector("#education p").innerText = t.educationText;
    document.querySelector("#business p").innerText = t.businessText;
    document.querySelector("#technology p").innerText = t.technologyText;
    document.querySelector("#about p").innerText = t.aboutText;

    document.querySelector("#home button").innerText = t.search;
};

// ARTICLES LIBRARY CONTENT

function showArticle(category) {

    const articles = {

        science: {
            title: "Science and Education",
            text: "Explore science, mathematics, physics, chemistry, biology and learning resources."
        },

        history: {
            title: "History and Culture",
            text: "Discover ancient civilizations, African history, world history and cultural heritage."
        },

        business: {
            title: "Business and Finance",
            text: "Learn about entrepreneurship, business planning, saving, investment and finance."
        },

        technology: {
            title: "Technology and AI",
            text: "Explore computers, programming, artificial intelligence and digital innovation."
        },

        environment: {
            title: "Health and Environment",
            text: "Learn about healthy living, environmental protection, climate and nature."
        }

    };

    const article = articles[category];

    if (!article) return;

    document.getElementById("articleResult").innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.text}</p>
    `;

    document.getElementById("articleResult").scrollIntoView({
        behavior: "smooth"
    });

}



const articleDatabase = [

    {
        title: "Science and Education",
        keywords: "science education mathematics physics chemistry biology learning",
        description: "Understanding science, education and their importance in human development.",
        content: `Science is the systematic study of the natural world through observation, experiments and evidence.

Education is the process of gaining knowledge, skills and understanding. It helps people solve problems, make informed decisions and improve their communities.

Important branches of science include:

1. Physics: The study of matter, energy, forces and motion.
2. Chemistry: The study of substances and how they change.
3. Biology: The study of living organisms.
4. Mathematics: The study of numbers, patterns and logical relationships.

Science and education work together to support innovation, technology, agriculture, medicine and economic development.

Key lesson: Learning should encourage curiosity, critical thinking and practical problem-solving.`
    },

    {
        title: "African History and Civilizations",
        keywords: "africa african history egypt mali ghana aksum civilization culture",
        description: "Explore African civilizations, kingdoms, culture and historical contributions.",
        content: `Africa is a continent with a long and diverse history. Its societies developed systems of government, trade, agriculture, education, architecture and culture over many centuries.

Ancient Egypt developed important achievements in mathematics, engineering, medicine and architecture.

The ancient Kingdom of Kush, located in the region of present-day Sudan, became an important political and cultural power.

The Ghana Empire, Mali Empire and Songhai Empire were influential West African states. Their trade networks connected different parts of Africa and the wider world.

The Mali Empire became particularly famous for its wealth, scholarship and the city of Timbuktu, which developed into an important centre of learning.

African history also includes many other kingdoms, communities, independence movements and modern developments.

Key lesson: African history is diverse and important to understanding world civilization.`
    },

    {
        title: "Business, Entrepreneurship and Finance",
        keywords: "business finance money entrepreneurship investment marketing economy",
        description: "Understand how businesses operate and how people manage financial resources.",
        content: `Business is the activity of providing goods or services to meet people's needs and wants.

Entrepreneurship involves identifying a problem or opportunity and creating a solution that can provide value to customers.

A successful business usually needs:

1. A clear business idea.
2. Knowledge of customers and their needs.
3. A plan for costs, prices and income.
4. Good customer service.
5. Responsible financial management.

Finance is the management of money and other resources. Important financial skills include budgeting, saving, understanding debt and planning investments.

For example, a farmer can create a business by producing crops, identifying buyers, calculating production costs and choosing suitable selling prices.

Key lesson: A strong business solves real problems while managing resources responsibly.`
    },

    {
        title: "Technology and Artificial Intelligence",
        keywords: "technology computer programming artificial intelligence AI internet software digital",
        description: "Discover computers, programming, the internet and artificial intelligence.",
        content: `Technology is the practical application of knowledge to solve problems and improve human life.

Computers process information and perform tasks using hardware and software.

Programming is the process of giving computers instructions through languages such as Python, JavaScript and other programming languages.

The internet connects computers and devices around the world. It supports communication, education, business and information sharing.

Artificial Intelligence, also called AI, is a field of technology that develops computer systems capable of performing tasks such as recognizing patterns, understanding language and generating content.

AI can support healthcare, agriculture, education and scientific research. However, people must consider accuracy, privacy, fairness and responsible use.

Key lesson: Technology is most useful when it solves real human problems safely and responsibly.`
    },

    {
        title: "Health and Environmental Protection",
        keywords: "health environment nature climate water forests sanitation nutrition",
        description: "Learn about human health, natural resources and environmental sustainability.",
        content: `Human health and environmental protection are closely connected.

Good health is supported by nutritious food, clean water, sanitation, physical activity and access to appropriate healthcare.

The environment includes air, water, soil, plants, animals and the natural systems that support life.

Forests help protect biodiversity, store carbon and support water cycles. Rivers and lakes provide water for people, agriculture and wildlife.

Environmental challenges include pollution, deforestation, soil degradation and climate change.

Communities can help by protecting forests, planting trees, reducing waste, conserving water and using natural resources responsibly.

Key lesson: Protecting the environment helps protect human health and future generations.`
    },
  
{
    title: "Agriculture and Food Security",
    keywords: "agriculture farming crops food security irrigation soil Malawi farming",
    description: "Learn about farming, food production, soil management and sustainable agriculture.",
    content: `Agriculture is the practice of growing crops and raising animals to provide food, materials and income.

It is important to communities because it supports food security, employment, trade and economic development.

Important areas of agriculture include:

1. Crop production: Growing maize, rice, beans, groundnuts, potatoes and other crops.
2. Livestock farming: Raising cattle, goats, chickens and other animals.
3. Soil management: Protecting soil fertility through good farming practices.
4. Irrigation: Supplying water to crops when rainfall is insufficient.
5. Agricultural markets: Connecting farmers with buyers and consumers.

Food security means that people have reliable access to sufficient, safe and nutritious food.

Sustainable agriculture aims to produce food while protecting soil, water, biodiversity and the environment.

Key lesson: Good agricultural planning can improve food production, household income and community development.`,
  references: [
    {
        name: "Food and Agriculture Organization (FAO)",
        url: "https://www.fao.org/"
    },
    {
        name: "World Bank - Agriculture",
        url: "https://www.worldbank.org/en/topic/agriculture"
    }
]
},

{
    title: "World History and Civilization",
    keywords: "world history civilization ancient Greece Rome China India Europe America",
    description: "Explore important civilizations, historical developments and human achievements.",
    content: `World history examines the development of human societies, cultures, governments, economies and technologies across different periods.

Ancient civilizations developed in several regions, including Mesopotamia, Egypt, the Indus Valley and China.

Ancient Greece contributed to philosophy, mathematics, politics and other fields of learning.

The Roman civilization influenced law, engineering, architecture and political institutions across parts of Europe and the Mediterranean.

In Asia, societies in China and India developed important traditions in science, mathematics, trade, philosophy and culture.

Over time, trade networks, migration, inventions, conflicts and cultural exchanges connected societies across continents.

The modern world has been shaped by industrialization, scientific discoveries, independence movements and international cooperation.

Key lesson: Studying world history helps us understand how societies change and influence one another.`,
  
references: [
    {
        name: "World History Encyclopedia",
        url: "https://www.worldhistory.org/"
    },
    {
        name: "United States Holocaust Memorial Museum - Historical Sources",
        url: "https://encyclopedia.ushmm.org/content/en/article/how-to-identify-reputable-historical-sources"
    }
]

},

{
    title: "Cybersecurity and Digital Safety",
    keywords: "cybersecurity internet safety passwords hacking privacy online protection",
    description: "Learn how to protect computers, accounts, information and people online.",
    content: `Cybersecurity is the practice of protecting computers, networks, digital systems and information from unauthorized access, damage and attacks.

People use the internet for education, communication, banking, business and entertainment. These activities require responsible digital safety practices.

Important cybersecurity practices include:

1. Strong passwords: Use long, unique passwords for different accounts.
2. Two-factor authentication: Add another verification step when available.
3. Phishing awareness: Be careful with suspicious messages and links.
4. Software updates: Keep devices and applications updated.
5. Privacy protection: Avoid sharing sensitive personal information unnecessarily.
6. Backups: Keep copies of important files in a safe location.

Cybersecurity is important for individuals, schools, businesses, governments and organizations.

Key lesson: Digital safety requires awareness, good habits and responsible use of technology.`
}


];


function searchArticles() {

    const input = document
        .getElementById("articleSearchInput")
        .value.trim().toLowerCase();

    const results = document.getElementById("articleSearchResults");
    const reader = document.getElementById("articleReader");

    reader.innerHTML = "";

    if (input === "") {
        results.innerHTML = "<p>Please enter a search keyword.</p>";
        return;
    }

    const matches = articleDatabase
        .map(function(article, index) {
            return { article: article, index: index };
        })
        .filter(function(item) {

            const searchableText =
                (item.article.title + " " +
                item.article.keywords + " " +
                item.article.description).toLowerCase();

            return searchableText.includes(input);

        });

    if (matches.length > 0) {

        results.innerHTML = matches.map(function(item) {

            return `
                <div class="article-card">
                    <h3>${item.article.title}</h3>
                    <p>${item.article.description}</p>
                    <button onclick="readArticle(${item.index})">
                        Read Article
                    </button>
                </div>
            `;

        }).join("");

    } else {

        results.innerHTML =
            "<p>No articles found. Try another keyword.</p>";

    }
}

function readArticle(index) {
    const article = articleDatabase[index];

    const reader = document.getElementById("articleReader");

    const paragraphs = article.content
        .split("\n\n")
        .map(paragraph => `<p>${paragraph}</p>`)
        .join("");

    const references = article.references
        ? article.references.map(reference => `
            <li>
                <a href="${reference.url}" target="_blank" rel="noopener noreferrer">
                    ${reference.name}
                </a>
            </li>
        `).join("")
        : "<li>No references available yet.</li>";

    reader.innerHTML = `
        <div class="article-reader-card">
            <h2>${article.title}</h2>

            <div class="article-content">
                ${paragraphs}
            </div>

            <h3>References and Sources</h3>

            <ul class="article-references">
                ${references}
            </ul>
        </div>
    `;
}
