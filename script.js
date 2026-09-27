// ==========================================
// TARUN CHANDRA - PORTFOLIO SCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1. FOOTER YEAR
    // ==========================================

    const footerText = document.querySelector("footer p");

    if (footerText) {
        footerText.innerHTML =
            `©️ ${new Date().getFullYear()} Tarun Chandra. All rights reserved.`;
    }


    // ==========================================
    // 2. NAVBAR SHADOW ON SCROLL
    // ==========================================

    const navbar = document.querySelector(".navbar");

    function updateNavbar() {
        if (!navbar) return;

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateNavbar);
    updateNavbar();


    // ==========================================
    // 3. ACTIVE NAVIGATION LINK
    // ==========================================

    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 160;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {

            link.style.color = "";

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.style.color = "#38bdf8";
            }
        });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    // ==========================================
    // 4. SMOOTH SCROLL
    // ==========================================

    navLinks.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });

    });


    // ==========================================
    // 5. SCROLL REVEAL ANIMATION
    // ==========================================

    const revealElements = document.querySelectorAll(
        ".section, .stat, .skill-category, .project-card, " +
        ".experience-card, .education-card, .certification-card, " +
        ".contact-box"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    // ==========================================
    // 6. PROFILE IMAGE CHECK
    // ==========================================

    const profileImage = document.querySelector(".profile-image-wrapper img");

    if (profileImage) {

        profileImage.addEventListener("error", () => {

            console.log("Profile image could not be loaded.");

            profileImage.style.display = "none";
        });

        profileImage.addEventListener("load", () => {

            profileImage.style.display = "block";
        });
    }


    // ==========================================
    // 7. CHATBOT
    // ==========================================

    const chatbotToggle = document.getElementById("chatbot-toggle");
    const chatbot = document.getElementById("chatbot");
    const chatbotClose = document.getElementById("chatbot-close");

    const chatbotMessages =
        document.getElementById("chatbot-messages");

    const chatbotInput =
        document.getElementById("chatbot-input");

    const chatbotSend =
        document.getElementById("chatbot-send");


    // Open chatbot
    if (chatbotToggle && chatbot) {

        chatbotToggle.addEventListener("click", () => {

            chatbot.style.display = "flex";

            setTimeout(() => {
                chatbotInput?.focus();
            }, 100);
        });
    }


    // Close chatbot
    if (chatbotClose && chatbot) {

        chatbotClose.addEventListener("click", () => {

            chatbot.style.display = "none";
        });
    }


    // ==========================================
    // CHATBOT MESSAGE FUNCTION
    // ==========================================

    function addBotMessage(message) {

        if (!chatbotMessages) return;

        const messageElement = document.createElement("div");

        messageElement.className = "bot-message";

        messageElement.innerHTML = message;

        chatbotMessages.appendChild(messageElement);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    function addUserMessage(message) {

        if (!chatbotMessages) return;

        const messageElement = document.createElement("div");

        messageElement.className = "user-message";

        messageElement.textContent = message;

        chatbotMessages.appendChild(messageElement);

        chatbotMessages.scrollTop =
            chatbotMessages.scrollHeight;
    }


    // ==========================================
    // CHATBOT RESPONSE
    // ==========================================

    function getBotResponse(message) {

        const text = message.toLowerCase().trim();


        // Greeting
        if (
            text.includes("hello") ||
            text.includes("hi") ||
            text.includes("hey") ||
            text.includes("namaste")
        ) {
            return `
                👋 Hello! I'm Tarun's portfolio assistant.
                <br><br>
                You can ask me about <b>Tarun's skills, projects,
                internship, education, certificates</b> or contact details.
            `;
        }


        // About
        if (
            text.includes("about") ||
            text.includes("tarun") ||
            text.includes("who are you")
        ) {
            return `
                👨‍💻 <b>Tarun Chandra</b> is a Computer Science &
                Engineering student and Data Analytics Intern.
                <br><br>
                He is focused on <b>Data Analytics, Python, SQL,
                Excel and Data Visualization.</b>
            `;
        }


        // Skills
        if (
            text.includes("skill") ||
            text.includes("technology") ||
            text.includes("tech stack")
        ) {
            return `
                🛠️ <b>Key Skills:</b>
                <br><br>
                • Python<br>
                • SQL<br>
                • Excel<br>
                • Power BI<br>
                • Tableau<br>
                • Pandas<br>
                • NumPy<br>
                • Matplotlib<br>
                • Seaborn<br>
                • Plotly<br>
                • Streamlit<br>
                • Git & GitHub
            `;
        }


        // Projects
        if (
            text.includes("project") ||
            text.includes("portfolio")
        ) {
            return `
                🚀 <b>Featured Projects:</b>
                <br><br>

                <b>1. AI-Powered Data Cleaning & Analysis Tool</b>
                <br>
                Built using Python, Pandas, NumPy,
                Plotly and Streamlit.
                <br><br>

                <b>2. Sales Data Analysis</b>
                <br>
                Data analysis project using Python,
                Excel and Pandas.
            `;
        }


        // Internship / Experience
        if (
            text.includes("experience") ||
            text.includes("internship") ||
            text.includes("intern")
        ) {
            return `
                💼 <b>Current Experience:</b>
                <br><br>

                <b>Data Analytics Intern</b><br>
                Sortiq Solutions
                <br><br>

                Internship started on
                <b>1 July 2026</b> and is currently ongoing.
            `;
        }


        // Education
        if (
            text.includes("education") ||
            text.includes("college") ||
            text.includes("degree") ||
            text.includes("university")
        ) {
            return `
                🎓 <b>Education:</b>
                <br><br>

                <b>B.Tech in Computer Science & Engineering</b>
                <br>
                BRCM College of Engineering & Technology
                <br>
                Maharshi Dayanand University
                <br>
                2023 – 2027
            `;
        }


        // Certificates
        if (
            text.includes("certificate") ||
            text.includes("certification")
        ) {
            return `
                📜 Tarun's portfolio includes certificates
                related to:
                <br><br>

                • British Airways Data Science<br>
                • Data Analytics Essentials<br>
                • Fundamentals of Machine Learning<br>
                • Building with Artificial Intelligence<br>
                • English for IT
            `;
        }


        // GitHub
        if (
            text.includes("github") ||
            text.includes("source code") ||
            text.includes("repository")
        ) {
            return `
                💻 You can view Tarun's projects and source code
                on GitHub.
                <br><br>

                <a
                    href="https://github.com/tarunchandra-data"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit GitHub →
                </a>
            `;
        }


        // LinkedIn
        if (
            text.includes("linkedin") ||
            text.includes("profile")
        ) {
            return `
                🔗 You can connect with Tarun on LinkedIn.
                <br><br>

                <a
                    href="https://www.linkedin.com/in/tarunchandra4126"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visit LinkedIn →
                </a>
            `;
        }


        // Email / Contact
        if (
            text.includes("email") ||
            text.includes("contact") ||
            text.includes("hire") ||
            text.includes("reach")
        ) {
            return `
                📧 <b>Contact Tarun:</b>
                <br><br>

                Email:
                <a href="mailto:chandratarun858585@gmail.com">
                    chandratarun858585@gmail.com
                </a>
                <br><br>

                You can also connect through LinkedIn.
            `;
        }


        // Python
        if (text.includes("python")) {
            return `
                🐍 Tarun uses Python for
                <b>data analysis, data cleaning,
                automation and analytics projects.</b>
                <br><br>
                Common libraries include Pandas, NumPy,
                Matplotlib, Plotly and Streamlit.
            `;
        }


        // SQL
        if (text.includes("sql") || text.includes("database")) {
            return `
                🗄️ SQL is one of Tarun's core data analytics skills.
                <br><br>
                It is used for querying, filtering,
                aggregating and analyzing structured data.
            `;
        }


        // Excel
        if (text.includes("excel") || text.includes("spreadsheet")) {
            return `
                📊 Excel is used for data cleaning,
                analysis, formulas, pivot tables,
                charts and reporting.
            `;
        }


        // Data Analytics
        if (
            text.includes("data analytics") ||
            text.includes("data analyst") ||
            text.includes("analytics")
        ) {
            return `
                📈 <b>Data Analytics</b> involves examining
                and transforming data to discover useful
                insights and support decision-making.
                <br><br>

                Tarun's current focus is Python, SQL,
                Excel, visualization and practical analytics projects.
            `;
        }


        // Help
        if (
            text.includes("help") ||
            text.includes("what can i ask") ||
            text.includes("menu")
        ) {
            return `
                🤖 You can ask me:
                <br><br>

                • About Tarun<br>
                • Skills<br>
                • Projects<br>
                • Internship<br>
                • Education<br>
                • Certificates<br>
                • Python<br>
                • SQL<br>
                • Excel<br>
                • GitHub<br>
                • LinkedIn<br>
                • Contact
            `;
        }


        // Default response
        return `
            🤔 I'm not sure about that.
            <br><br>

            Try asking about:
            <b>skills, projects, internship,
            education, certificates, GitHub,
            LinkedIn or contact.</b>
        `;
    }


    // ==========================================
    // SEND CHAT MESSAGE
    // ==========================================

    function sendMessage() {

        if (!chatbotInput) return;

        const message = chatbotInput.value.trim();

        if (!message) return;


        // Add user message
        addUserMessage(message);


        // Clear input
        chatbotInput.value = "";


        // Small typing delay
        setTimeout(() => {

            const response = getBotResponse(message);

            addBotMessage(response);

        }, 400);
    }


    // Send button
    if (chatbotSend) {

        chatbotSend.addEventListener(
            "click",
            sendMessage
        );
    }


    // Enter key
    if (chatbotInput) {

        chatbotInput.addEventListener(
            "keydown",
            (event) => {

                if (event.key === "Enter") {

                    event.preventDefault();

                    sendMessage();
                }
            }
        );
    }


    // ==========================================
    // 8. ESC KEY CLOSE CHATBOT
    // ==========================================

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (chatbot) {
                chatbot.style.display = "none";
            }
        }
    });


    // ==========================================
    // 9. BUTTON HOVER EFFECT
    // ==========================================

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .nav-button"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {
            button.style.transform = "translateY(-2px)";
        });

        button.addEventListener("mouseleave", () => {
            button.style.transform = "";
        });
    });


    // ==========================================
    // 10. CONSOLE MESSAGE
    // ==========================================

    console.log(
        "%c🚀 Tarun Chandra Portfolio Loaded Successfully!",
        "color:#38bdf8;font-size:16px;font-weight:bold;"
    );

});