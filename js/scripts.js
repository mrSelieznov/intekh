/*all*/
let sliderSwitcherG = document.querySelector('.document__inner');
let headerLogo = document.querySelector('.header__logo');
/*HOME*/
let headerHome = document.querySelector('.header__home'),
    headerAboutUs = document.querySelector('.header__aboutUs'),
    headerVacancies = document.querySelector('.header__vacancies'),
    headerContacts = document.querySelector('.header__contacts');
let headerHomeM = document.querySelector('.header__homeM'),
    headerAboutUsM = document.querySelector('.header__aboutUsM'),
    headerVacanciesM = document.querySelector('.header__vacanciesM'),
    headerContactsM = document.querySelector('.header__contactsM');
let arrowButtonNext = document.querySelector('.footer__img'),
    navFooterInner = document.querySelector('.nav-footer__inner');

let headerSearch = document.querySelector('.header__search');
let headerSearchContainer = document.querySelector('.header__search-container');
let headerSearchInput = document.querySelector('.header__search-input');
let headerButtonSearch = document.querySelector('.header__button-search');
let headerSearchImg = document.querySelector('.header__search-img');
let headerSearchP = document.querySelector('.header__search-p');
let headerSearchSuggest = document.querySelector('.header__search-suggest');

/*ABOUT US*/

let aboutUsBtn = document.querySelector('.white__button.aboutUs'),
    whiteButton = document.querySelector('.white__button'),
    hiddenOurProjectsH1 = document.querySelector('.main__ourProjects h1'),
    hiddenOurProjectsH2 = document.querySelector('.main__ourProjects h2'),
    hiddenOurProjectsP = document.querySelector('.main__ourProjects p'),
    hiddenSliderAboutUs = document.querySelector('.main__sliderAboutUs'),
    showTwoBlocks = document.querySelector('.main__show'),
    mainOurProjects = document.querySelector('.main__ourProjects'),
    mainTvoContainers = document.querySelector('.main__tvoContainers');

/*ABOUT US img video Slider*/
let aboutUsVideo = document.querySelector('.video0');
let btnVideo = document.querySelector('.imgTwo');
let cross = document.querySelector('.cross');
let containerImgVideo = document.querySelector('.containerImgVideo');
let sliderImgVideoL = document.querySelector('.sliderImgVideoL');
let video = document.getElementById('video');
let aboutUsGalleryObj = [
    {
        id: 1,
        type: "video/mp4",
        video: "video/video.mp4",
        img: "images/jpg/foto1.jpg",
    },
    {
        id: 2,
        type: "video/mp4",
        video: "video/video.mp4",
        img: "images/jpg/foto2.jpg",
    },
    {
        id: 3,
        type: "video/mp4",
        video: "video/video.mp4",
        img: "images/jpg/foto1.jpg",
    }
];

/*vacancies*/
let vacanciesContainer = document.querySelector('.content__v-slots');
// here will be ajax request
let vacanciesObj = [
    {
        id: 1,
        vacancy: "Системный Аналитик",
        city: 'Москва',
        salary: null,
        experience: 2,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 2,
        vacancy: "Системный Аналитик",
        city: 'Харьков',
        salary: 2500,
        experience: 4,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 3,
        vacancy: "UX/Ui дизайнер",
        city: 'Омск',
        salary: null,
        experience: 3,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 4,
        vacancy: "UX/Ui дизайнер",
        city: 'Киров',
        salary: 1700,
        experience: 1,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 5,
        vacancy: "Системный Аналитик",
        city: 'Москва',
        salary: null,
        experience: 2,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 6,
        vacancy: "Системный Аналитик",
        city: 'Харьков',
        salary: 2500,
        experience: 4,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
    {
        id: 7,
        vacancy: "UX/Ui дизайнер",
        city: 'Омск',
        salary: null,
        experience: 3,
        descriptions: `Наша компания специализируется на аутсорсинге аналитических работ в проектах ИТ-компаний с госструктурами.\n" +
            "\n" +
            "Наши клиенты - крупные интеграторы, выполняющие проекты для государственного сектора. Мы выполняем для\n" +
            "клиентов весь спектр работ, связанный с бизнес-анализом и системно-аналитическими работами в ИТ-проекте.\n" +
            "\n" +
            "В настоящий момент ищем в команду аналитиков, ориентированных на результат, умеющих и любящих работать\n" +
            "руками и головой, для работ в проектах для государственных заказчиков федерального и регионального уровня.\n" +
            "\n" +
            "Возможно сотрудничество как на постоянной, так и на проектной основе.`,
        duties: [
            `Сбор, анализ и формализации бизнес и функциональных требований.`,
            `Разработка и согласование технических заданий;`,
            `Разработка базовой архитектуры решения, согласование с IT-архитектором;`,
            `Постановка задач разработчику (подрядчику);`,
            `Контроль настройки и проверка тестовых сред;`,
            `Контроль проведения тестирование функционала;`,
            `Участие в аудите и контроле качества решения;`,
            `Участие в внедрении в рамках общебанковского релиза;`,
            `Участие в сопровождении решения – анализ и локализация ошибок в работе ПО/ИС.`,
        ],
        demands: [
            `Cистемный анализ и поддержка разработки в области банковских приложений (опыт в системах ДБО приветствуется).`,
            `Знание UML и/или BPMN, умение доносить мысли языком диаграмм;`,
            `Общие познания в архитектуре клиент-серверных приложений, банковских систем, в т.ч. систем ДБО.`,
            `Понимание возможностей фронтальных систем, систем массового обслуживания клиентов`,
            `Знание форматов обмена данными XML/XSD, в идеале еще JSON/JSON-Shema;`,
            `Опыт работы с технологиями интеграции систем REST, MQ, SOAP;`,
            `Навыки разработки тех. документации (ФТ, ТЗ, Методик тестирования и пр.)`,
        ],
        offer:
            [
                `График работы 5/2;`,
                `оформляем через ИП или по срочному`,
                `Работа в крупных федеральных и региональных проектах;`,
                `Перспективы карьерного и профессионального роста;`,
                `Перспективы карьерного и профессионального роста;`,
                `Возможность прокачать свои навыки;`,
                ` Интересные, местами сложные и разнообразные задачи.`,
            ],
    },
];


/*Footer*/
let footerImg = document.querySelector('.footer__img');


