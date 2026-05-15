/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // get path relative to javascript
  // ------------------------------------------------------------------------------ //

 $(document).ready(function(){

	$('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      dots: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });


	$('.testimonial-slider').slick({
          autoplay: false,
          autoplaySpeed: 4000,
          fade: true,
          prevArrow: $('.prev'),
          nextArrow: $('.next'),
	});

});



// close when click off of container
$(document).on('click touchstart', function (e){

  var x = document.getElementById("navigation");
  if (x.className === "top-menu") {
    x.className += " menu-bar";
  } else {
    x.className = "top-menu";
  }

});

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
});



})(jQuery);

// ============================================
// Language Switcher - Dropdown Style
// ============================================
(function() {
    // Словарь переводов
    const translations = {
        ru: {
            nav_home: "Главная",
            nav_about: "Обо мне",
            nav_portfolio: "Портфолио",
            nav_contact: "Контакты",

            hero_title: "Привет, я <span class=\"colored\">Павел Гришин</span>",
            hero_text: "Профессиональный Python-разработчик. Пишу чистый, поддерживаемый и эффективный код.",
            hero_btn: "Связаться",

            about_title: "Обо мне",
            about_text1: "🐍 Меня зовут Павел — Python разработчик, специализирующийся на веб-парсинге, автоматизации и разработке API.",
            about_text2: "🛠 Что я делаю: парсинг сайтов (включая защищённые), автоматизация бизнеса (Wildberries, Ozon), бэкенд на FastAPI/Django, чат-боты, скрипты и утилиты.",
            about_text3: "💡 Как я работаю: фокус на результате, чистый и поддерживаемый код, всегда на связи.<br>⚙ Стек: Python, FastAPI, PostgreSQL, SQLAlchemy, Docker, Playwright, requests, Git.",
            hire_btn: "Нанять меня",
            download_btn: "Скачать CV",

            // Скиллы
            skill_1: "Python 3.12",
            skill_2: "FastAPI / Django",
            skill_3: "Playwright / requests",
            skill_4: "PostgreSQL / SQLAlchemy",
            skill_5: "Docker / Docker Compose",
            skill_6: "Git / GitHub",

            // Services
            services_title: "Что я предлагаю",
            services_subtitle: "Решения, которые работают. Чистый код, прозрачная логика, ответственный подход.",

            service_1_title: "Скрипты / Веб-парсинг",
            service_1_text: "Извлечение данных с любых сайтов, включая защищённые (Cloudflare, CAPTCHA, JS-рендеринг). Парсинг маркетплейсов, мониторинг цен и автоматизация рутинных задач, cron-задания.",

            service_2_title: "FastAPI / Веб-приложения",
            service_2_text: "Создание высокопроизводительных веб-приложений, REST API. Полный цикл с AI-помощью во фронтенде. Админ-панели, дашборды, API с авто-документацией Swagger.",

            service_3_title: "Чат-боты",
            service_3_text: "Разработка умных ботов для любых платформ: Telegram, Discord и др. От простых до сложных многошаговых сценариев с платежами, уведомлениями и интеграцией с БД.",

            service_4_title: "Деплой / Настройка VPS",
            service_4_text: "Развёртывание и настройка сервисов на VPS: Uvicorn/Gunicorn, PostgreSQL, Redis, Kafka, Docker и Docker-Compose для воспроизводимого окружения.",

            // Portfolio
            portfolio_title: "Портфолио",
            portfolio_view_btn: "Смотреть портфолио",

            project_1_title: "Асинхронный мониторинг и Email-алерты",
            project_1_category: "Веб-парсинг · Email-уведомления",
            project_1_description: `
                <h3>📋 Задача</h3>
                <p>Клиенту требовалось отслеживать новые объявления на веб-платформе без ручного обновления страницы. Цель — мгновенные email-уведомления при появлении новых записей.</p>

                <h3>⚙️ Как это работает</h3>
                <ul>
                    <li>Автоматический запуск браузера через <strong>Playwright</strong> каждую минуту с 9 до 5 — имитирует поведение пользователя, обходит базовые анти-бот защиты</li>
                    <li>Извлекает все нужные данные: заголовок, дату, описание и ссылки</li>
                    <li>Сравнивает с ранее найденными записями — только новые позиции запускают оповещения</li>
                    <li>Отправляет <strong>форматированные email-уведомления</strong> со всеми деталями</li>
                    <li>Работает круглосуточно на VPS сервере, полностью автономно</li>
                </ul>

                <h3>✅ Результат</h3>
                <p>✔ <strong>10+ часов в неделю</strong> ручной работы исключено<br>
                ✔ Мгновенные уведомления — больше никаких упущенных возможностей<br>
                ✔ 3+ месяца стабильной работы без обслуживания<br>
                ✔ Масштабируемо — можно отслеживать несколько источников одновременно</p>
            `,

            project_2_title: "Q&A Backend API",
            project_2_category: "Бэкенд / FastAPI",
            project_2_description: `
                <h3>📋 Задача</h3>
                <p>Создать REST API для платформы вопросов и ответов с сущностями Question и Answer, упакованное в Docker.</p>

                <h3>⚙️ Стек</h3>
                <ul>
                    <li><strong>FastAPI</strong> — высокопроизводительный асинхронный Python-фреймворк</li>
                    <li><strong>SQLAlchemy + PostgreSQL</strong> — реляционные данные с миграциями</li>
                    <li><strong>Pydantic</strong> — валидация запросов и ответов</li>
                    <li><strong>Docker Compose</strong> — приложение + база данных в двух контейнерах</li>
                </ul>

                <h3>✅ Результат</h3>
                <p>Готовое к продакшену API с авто-документацией Swagger. Деплой одной командой. Чистое каскадное удаление, обработка ошибок, готово к интеграции с фронтендом.</p>
            `,

            project_3_title: "Персональный сайт-портфолио",
            project_3_category: "Фулстек / DevOps",
            project_3_description: `
                <h3>📋 О проекте</h3>
                <p>Сайт, который вы сейчас просматриваете — моё персональное портфолио. Полный цикл с бэкендом на FastAPI, динамической загрузкой контента, переводом EN/RU и деплоем через Docker.</p>

                <h3>⚙️ Ключевые возможности</h3>
                <ul>
                    <li>FastAPI + PostgreSQL для динамического портфолио и формы обратной связи</li>
                    <li>Двуязычная система с localStorage</li>
                    <li>Полностью адаптивный дизайн</li>
                    <li>Docker Compose для разработки и продакшена</li>
                    <li>Деплой на VPS с Nginx + HTTPS</li>
                </ul>
            `,

            //Contact
            contact_title: "Давайте работать вместе",
            contact_text: "Я доступен для фриланс-проектов. Есть идеи? Просто свяжитесь со мной",
            contact_btn: "Связаться",

            copyright: "© 2026 Павел Гришин",

            // Contact Modal
            contact_modal_title: "📧 Связаться со мной",
            contact_name_placeholder: "Ваше имя",
            contact_email_placeholder: "Ваш Email",
            contact_message_placeholder: "Ваше сообщение",
            contact_submit_btn: "📩 Отправить сообщение",

            captcha_error: "⚠️ Подтвердите что вы не робот",
            sending_text: "⏳ Отправка...",
            success_message: "✅ Сообщение отправлено",
            connection_error: "Ошибка соединения",
            default_error: "Ошибка",
        },
        en: {
            nav_home: "Home",
            nav_about: "About",
            nav_portfolio: "Portfolio",
            nav_contact: "Contact",

            hero_title: "Hello, I'm <span class=\"colored\">Pavel Grishin</span>",
            hero_text: "Professional Python Developer. I provide clean, maintainable and efficient code.",
            hero_btn: "Get in touch",

            about_title: "About Me",
            about_text1: "🐍 I'm Pavel — Python developer specializing in web scraping, automation, and API development.",
            about_text2: "🛠 What I do: web scraping (including protected sites), business automation (Wildberries, Ozon), backend on FastAPI/Django, chatbots, scripts and utilities.",
            about_text3: "💡 How I work: result-driven, clean and maintainable code, always in touch.<br>⚙ Tech stack: Python, FastAPI, PostgreSQL, SQLAlchemy, Docker, Playwright, requests, Git.",
            hire_btn: "Hire Me",
            download_btn: "Download CV",

            // Скиллы
            skill_1: "Python 3.12",
            skill_2: "FastAPI / Django",
            skill_3: "Playwright / requests",
            skill_4: "PostgreSQL / SQLAlchemy",
            skill_5: "Docker / Docker Compose",
            skill_6: "Git / GitHub",

            // Services
            services_title: "What I Offer",
            services_subtitle: "Solutions that work. Clean code, transparent logic, responsible approach.",

            service_1_title: "Scripts / Web Scraping",
            service_1_text: "Extracting data from any website including protected ones (Cloudflare, CAPTCHA, JS rendering). Marketplace parsing, price monitoring, and routine task automation, cron jobs.",

            service_2_title: "FastAPI / Web Apps",
            service_2_text: "Building high-performance web applications, REST APIs. Fullstack capabilities with AI-assisted frontend. Admin panels, dashboards, APIs with auto-generated Swagger docs.",

            service_3_title: "Chatbots",
            service_3_text: "Building smart bots for any platform with bot API: Telegram, Discord, etc. From simple to complex multi-step workflows with payments, notifications, and DB integration.",

            service_4_title: "Deployment / VPS Setup",
            service_4_text: "Deploying and configuring services on VPS: Uvicorn/Gunicorn, PostgreSQL, Redis, Kafka, Docker & Docker-Compose for reproducible environments.",

            // Portfolio
            portfolio_title: "Portfolio",
            portfolio_view_btn: "View Portfolio",

            project_1_title: "Async Monitoring & Email Alert System",
            project_1_category: "Web Scraping · Email Notification",
            project_1_description: `
                <h3>📋 Client Request</h3>
                <p>A client needed to track new listings on a web platform without manually refreshing the page every hour. The goal — instant email alerts when something new appears, zero human involvement.</p>

                <h3>⚙️ How It Works</h3>
                <ul>
                    <li>Automated browser launches via <strong>Playwright</strong> every minute from 9 to 5 — mimics real user behavior, bypasses basic anti-bot protections</li>
                    <li>Extracts all relevant data: title, date, description, and links</li>
                    <li>Compares with previously seen records — only new items trigger alerts</li>
                    <li>Sends formatted email notifications with all details, ready to act on</li>
                    <li>Runs 24/7 on a VPS server, fully autonomous</li>
                </ul>

                <h3>✅ Results</h3>
                <p>✔ <strong>10+ hours/week</strong> of manual work eliminated<br>
                ✔ Instant notifications — no more missed opportunities<br>
                ✔ 3+ months of stable operation without maintenance<br>
                ✔ Scalable — can monitor multiple sources simultaneously</p>
            `,

            project_2_title: "Q&A Backend API",
            project_2_category: "Backend / FastAPI",
            project_2_description: `
                <h3>📋 Task</h3>
                <p>Build a REST API for a Q&A platform with Question and Answer entities, containerized with Docker.</p>

                <h3>⚙️ Stack</h3>
                <ul>
                    <li><strong>FastAPI</strong> — high-performance async Python framework</li>
                    <li><strong>SQLAlchemy + PostgreSQL</strong> — relational data with migrations</li>
                    <li><strong>Pydantic</strong> — request/response validation</li>
                    <li><strong>Docker Compose</strong> — app + database in two containers</li>
                </ul>

                <h3>✅ Result</h3>
                <p>Production-ready API with auto-generated Swagger docs. One command to deploy. Clean cascade deletion, proper error handling, ready for frontend.</p>
            `,

            project_3_title: "Personal Portfolio Website",
            project_3_category: "Fullstack / DevOps",
            project_3_description: `
                <h3>📋 About</h3>
                <p>The site you're viewing — my personal portfolio. Fullstack project with FastAPI backend, dynamic content loading, EN/RU translation, and Docker deployment.</p>

                <h3>⚙️ Key Features</h3>
                <ul>
                    <li>FastAPI + PostgreSQL for dynamic portfolio & contact form</li>
                    <li>Bilingual system with localStorage</li>
                    <li>Fully responsive design</li>
                    <li>Docker Compose for development & production</li>
                    <li>VPS deployment with Nginx + HTTPS</li>
                </ul>
            `,

            contact_title: "Let's work together",
            contact_text: "I'm available for freelance work. Have any projects in your mind? Just feel free to contact me",
            contact_btn: "Contact me",

            copyright: "© 2026 Pavel Grishin",

            // Contact Modal

            contact_modal_title: "📧 Contact Me",
            contact_name_placeholder: "Your Name",
            contact_email_placeholder: "Your Email",
            contact_message_placeholder: "Your Message",
            contact_submit_btn: "📩 Send Message",

            captcha_error: "⚠️ Please verify that you are not a robot",
            sending_text: "⏳ Sending...",
            success_message: "✅ Message sent successfully",
            connection_error: "Connection error",
            default_error: "Error",
        }
    };

    let currentLang = localStorage.getItem('language') || 'en';

    function updateLanguage(lang) {
        const t = translations[lang];
        if (!t) return;

        // Навигация
        $('.menu-list .menu-item').eq(0).find('a').html(t.nav_home);
        $('.menu-list .menu-item').eq(1).find('a').html(t.nav_about);
        $('.menu-list .menu-item').eq(2).find('a').html(t.nav_portfolio);
        $('.menu-list .menu-item').eq(3).find('a').html(t.nav_contact);

        // Биллборд
        $('.banner-header h1').html(t.hero_title);
        $('.banner-header p').html(t.hero_text);
        $('.banner-header .btn-outline-orange').html(t.hero_btn);

        // Обо мне
        $('.section-title').eq(0).html(t.about_title);

        // Три абзаца в description
        $('.description p').eq(0).html(t.about_text1);
        $('.description p').eq(1).html(t.about_text2);
        $('.description p').eq(2).html(t.about_text3);

        // Заголовок секции What I Offer
        $('#services .section-title').html(t.services_title);
        $('#services .section-header p').html(t.services_subtitle);

        // Тексты внутри карточек услуг
        $('#services .service-slider .column').eq(0).find('h3').html(t.service_1_title);
        $('#services .service-slider .column').eq(0).find('p').html(t.service_1_text);

        $('#services .service-slider .column').eq(1).find('h3').html(t.service_2_title);
        $('#services .service-slider .column').eq(1).find('p').html(t.service_2_text);

        $('#services .service-slider .column').eq(2).find('h3').html(t.service_3_title);
        $('#services .service-slider .column').eq(2).find('p').html(t.service_3_text);

        $('#services .service-slider .column').eq(3).find('h3').html(t.service_4_title);
        $('#services .service-slider .column').eq(3).find('p').html(t.service_4_text);

        const $originalColumns = $('#services .service-slider .column:not(.slick-cloned)');

        $originalColumns.eq(0).find('h3').html(t.service_1_title);
        $originalColumns.eq(0).find('p').html(t.service_1_text);

        $originalColumns.eq(1).find('h3').html(t.service_2_title);
        $originalColumns.eq(1).find('p').html(t.service_2_text);

        $originalColumns.eq(2).find('h3').html(t.service_3_title);
        $originalColumns.eq(2).find('p').html(t.service_3_text);

        $originalColumns.eq(3).find('h3').html(t.service_4_title);
        $originalColumns.eq(3).find('p').html(t.service_4_text);

        // 2. Уничтожаем слайдер, если он инициализирован
        if ($('.service-slider').hasClass('slick-initialized')) {
            $('.service-slider').slick('unslick');
        }

        // 3. Заново инициализируем слайдер
        $('.service-slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                }
            ]
        });


        $('.general-button .btn-accent').html(t.hire_btn);
        $('.general-button .btn-outline-dark').html(t.download_btn);

        // Скиллы
        $('.skill-chart-list li').eq(0).find('.skill-title').html(t.skill_1);
        $('.skill-chart-list li').eq(1).find('.skill-title').html(t.skill_2);
        $('.skill-chart-list li').eq(2).find('.skill-title').html(t.skill_3);
        $('.skill-chart-list li').eq(3).find('.skill-title').html(t.skill_4);
        $('.skill-chart-list li').eq(4).find('.skill-title').html(t.skill_5);
        $('.skill-chart-list li').eq(5).find('.skill-title').html(t.skill_6);

        // Портфолио — заголовки
        $('.section-title').eq(2).html(t.portfolio_title);
        $('#portfolio .btn-accent').html(t.portfolio_view_btn);

        // Портфолио — карточки в HTML
        $('.tab-element figure').eq(0).find('h3').text(t.project_1_title);
        $('.tab-element figure').eq(0).find('.category').text(t.project_1_category);
        $('.tab-element figure').eq(1).find('h3').text(t.project_2_title);
        $('.tab-element figure').eq(1).find('.category').text(t.project_2_category);
        $('.tab-element figure').eq(2).find('h3').text(t.project_3_title);
        $('.tab-element figure').eq(2).find('.category').text(t.project_3_category);

        // Портфолио — данные для модалки
        window.portfolioTranslations = {
            'automation-1': {
                title: t.project_1_title,
                category: t.project_1_category,
                description: t.project_1_description
            },
            'automation-2': {
                title: t.project_2_title,
                category: t.project_2_category,
                description: t.project_2_description
            },
            'project-3': {
                title: t.project_3_title,
                category: t.project_3_category,
                description: t.project_3_description
            }
        };

        // Контакт
        $('#contact h2').html(t.contact_title);
        $('#contact p').html(t.contact_text);
        $('#contact .btn-outline-orange').html(t.contact_btn);

        // Contact Modal
        $('#contactModal h3').html(t.contact_modal_title);

        $('#contactName')
            .attr('placeholder', t.contact_name_placeholder);

        $('#contactEmail')
            .attr('placeholder', t.contact_email_placeholder);

        $('#contactMessage')
            .attr('placeholder', t.contact_message_placeholder);

        $('#contactForm button[type="submit"]')
            .html(t.contact_submit_btn);

        // Обновляем активный язык в меню
        $('.lang-menu div').removeClass('active-lang');
        $(`.lang-menu div[data-lang="${lang}"]`).addClass('active-lang');

        // Меняем текст на кнопке
        const buttonText = lang === 'ru' ? 'RU' : 'EN';
        $('#langBtn').html(`${buttonText} <i class="icon icon-arrow-down"></i>`);

        localStorage.setItem('language', lang);
        currentLang = lang;
    }

    // Открытие/закрытие dropdown
    $('#langBtn').on('click', function(e) {
        e.stopPropagation();
        $('#langMenu').slideToggle(200);
        $('#langBtn').toggleClass('active');
    });

    // Выбор языка из меню
    $('.lang-menu div').on('click', function() {
        const lang = $(this).data('lang');
        updateLanguage(lang);
        $('#langMenu').slideUp(200);
        $('#langBtn').removeClass('active');
    });

    // Закрытие dropdown при клике вне его
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.lang-dropdown').length) {
            $('#langMenu').slideUp(200);
            $('#langBtn').removeClass('active');
        }
    });

    // Инициализация языка при загрузке
    updateLanguage(currentLang);
})();

// ============================================
// Portfolio Data (только неизменяемые данные)
// ============================================

const portfolioProjects = {
    'automation-1': {
        image: "/static/images/tab1.jpg",
        demo_url: "#",
        github_url: "#",
        tech_stack: ["Python 3.12", "Playwright", "BeautifulSoup4", "Automation", "Email Alerts", "VPS"]
    },
    'automation-2': {
        image: "/static/images/tab2.jpg",
        demo_url: "#",
        github_url: "https://github.com/PavelGRI333/quizapi",
        tech_stack: ["Python 3.12", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Pydantic"]
    },
    'project-3': {
        image: "/static/images/tab3.jpg",
        demo_url: "#",
        github_url: "#",
        tech_stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "JavaScript"]
    }
};

// ============================================
// Portfolio Modal System
// ============================================

// Открытие модалки
function openPortfolioModal(projectId) {
    const project = portfolioProjects[projectId];
    if (!project) return;

    // Берём переводы из глобальной переменной
    const trans = window.portfolioTranslations && window.portfolioTranslations[projectId];

    const title = trans ? trans.title : projectId;
    const category = trans ? trans.category : '';
    const description = trans ? trans.description : '';

    document.getElementById('modalImg').src = project.image;
    document.getElementById('modalImg').alt = title;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalCategory').textContent = category;
    document.getElementById('modalDescription').innerHTML = description;

    const demoBtn = document.getElementById('modalDemo');
    const githubBtn = document.getElementById('modalGitHub');

    if (project.demo_url && project.demo_url !== '#') {
        demoBtn.href = project.demo_url;
        demoBtn.style.display = 'inline-block';
    } else {
        demoBtn.style.display = 'none';
    }

    if (project.github_url && project.github_url !== '#') {
        githubBtn.href = project.github_url;
        githubBtn.style.display = 'inline-block';
    } else {
        githubBtn.style.display = 'none';
    }

    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = project.tech_stack
        .map(tech => `<span>${tech}</span>`)
        .join('');

    document.getElementById('portfolioModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрытие модалки
function closePortfolioModal() {
    document.getElementById('portfolioModal').classList.remove('active');
    document.body.style.overflow = '';
}

// Инициализация СРАЗУ, без ожидания jQuery
(function initModal() {
    var modal = document.getElementById('portfolioModal');
    if (!modal) {
        return setTimeout(initModal, 50);
    }

    // Закрытие по крестику
    modal.querySelector('.modal-close').addEventListener('click', function(e) {
        e.preventDefault();
        closePortfolioModal();
    });

    // Закрытие по фону
    modal.querySelector('.modal-backdrop').addEventListener('click', function(e) {
        e.preventDefault();
        closePortfolioModal();
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closePortfolioModal();
    });

    // Карточки
    var figures = document.querySelectorAll('.tab-element figure[data-project-id]');
    figures.forEach(function(figure) {
        var projectId = figure.getAttribute('data-project-id');

        figure.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openPortfolioModal(projectId);
        });

        // Блокируем ссылки внутри
        var links = figure.querySelectorAll('a');
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                openPortfolioModal(projectId);
            });
        });
    });
})();

//модалка для contact формы

document.addEventListener('DOMContentLoaded', function () {

    const contactModal = document.getElementById('contactModal');
    const contactForm = document.getElementById('contactForm');

    // Кнопки открытия модалки
    const contactBtns = document.querySelectorAll('.open-contact-modal');

    contactBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            contactModal.classList.add('active');
        });
    });

    // Закрытие по крестику
    const closeBtn = document.querySelector('.close-modal');

    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            contactModal.classList.remove('active');
        });
    }

    // Закрытие по клику вне окна
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.classList.remove('active');

            if (typeof hcaptcha !== 'undefined') {
                hcaptcha.reset();
            }
        }
    });

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            contactModal.classList.remove('active');
        }
    });

    // Отправка формы
    if (contactForm) {

        contactForm.addEventListener('submit', async function(e) {

            e.preventDefault();

            const ft = window.formTranslations || {
                captcha: '⚠️ Подтвердите что вы не робот',
                success: '✅ Сообщение отправлено',
                error: 'Ошибка соединения',
                sending: '⏳ Отправка...',
                submit: 'Отправить'
            };

            const captchaResponse =
                document.querySelector('[name="h-captcha-response"]')?.value;

            if (!captchaResponse) {
                alert(ft.captcha);
                return;
            }

            const formData = {
                name: document.getElementById('contactName').value.trim(),
                email: document.getElementById('contactEmail').value.trim(),
                description: document.getElementById('contactMessage').value.trim(),
                'h-captcha-response': captchaResponse
            };

            const submitBtn =
                contactForm.querySelector('button[type="submit"]');

            submitBtn.disabled = true;
            submitBtn.textContent = ft.sending;

            try {

                const response = await fetch('/api/v1/contacts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {

                    alert(ft.success);

                    contactForm.reset();

                    contactModal.classList.remove('active');

                    if (typeof hcaptcha !== 'undefined') {
                        hcaptcha.reset();
                    }

                } else {

                    const error = await response.json();

                    alert(error.detail || ft.error);

                    if (typeof hcaptcha !== 'undefined') {
                        hcaptcha.reset();
                    }
                }

            } catch (error) {

                console.error(error);

                alert(ft.error);

            } finally {

                submitBtn.disabled = false;
                submitBtn.textContent = ft.submit;
            }
        });
    }
});