// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // EmailJS Configuration
    emailjs.init('p-hYrNXBAljmO2v2h');

    const EMAIL_CONFIG = {
        serviceID: 'service_wh09gi7',
        templateID: 'template_tq4besv'
    };
    // ======= THEME TOGGLE FUNCTIONALITY WITH PERSISTENCE =======
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set theme
    function setTheme(theme) {
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(theme);

        // Update toggle button
        themeToggle.innerHTML = theme === 'dark-mode' ? '☀️' : '🌙';

        // Update label
        const themeLabel = document.querySelector('.theme-label');
        if (themeLabel) {
            themeLabel.textContent = theme === 'dark-mode' ? 'Light Mode' : 'Dark Mode';
        }
    }

    // Always start in dark mode
    setTheme('dark-mode');

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        const isDarkMode = body.classList.contains('dark-mode');
        setTheme(isDarkMode ? 'light-mode' : 'dark-mode');
    });


    // ======= TYPING ANIMATION =======
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        const phrases = [
            "an AI enthusiast",
            "a Masters Student",
            "a software engineer"
        ];
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;

        function type() {
            const currentPhrase = phrases[currentPhraseIndex];

            // Update text
            if (isDeleting) {
                currentCharIndex--;
                typingDelay = 50;
            } else {
                currentCharIndex++;
                typingDelay = 120;
            }

            const currentText = currentPhrase.substring(0, currentCharIndex);

            // Set the text content excluding the cursor span
            const cursorElement = typedTextElement.querySelector('.cursor-blink');
            typedTextElement.textContent = currentText;

            // Re-append the cursor if it exists
            if (cursorElement) {
                typedTextElement.appendChild(cursorElement);
            }

            // When finished typing
            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                typingDelay = 1500; // pause at end
            }
            // When finished deleting
            else if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingDelay = 500; // pause before typing next phrase
            }

            // Repeat typing
            setTimeout(type, typingDelay);
        }

        // Start typing effect after short delay
        setTimeout(type, 1000);
    }

    // ======= INTERACTIVE TERMINAL FUNCTIONALITY =======
    function setupInteractiveTerminal() {
        const terminal = document.querySelector('.terminal');
        const terminalContent = document.querySelector('.terminal-content');


        if (!terminal || !terminalContent) return;

        // Force monospace font
        terminal.style.fontFamily = "'Fira Code', monospace";
        terminalContent.style.fontFamily = "'Fira Code', monospace";
        if (!terminal || !terminalContent) return;

        // Terminal state
        let commandHistory = [];
        let historyIndex = -1;
        let currentInput = '';

        // Available commands and their outputs
        const commands = {
            'cat about_me.txt': `Passionate about protecting organizations through offensive and defensive security. With hands-on experience in penetration testing, AI-powered phishing detection, and cloud security hardening, I aim to blend technical depth and innovation to create safer digital ecosystems. 
When not working on projects, I enjoy competing in CTFs and exploring the latest in AI security.`,
            'clear': 'CLEAR'
        };

        // Clear existing content and set up interactive terminal
        terminalContent.innerHTML = `
            <div class="command-line">
                <span class="prompt">$</span>
                <span class="command">Welcome to my portfolio terminal! Please type 'cat about_me.txt' for more information.</span>
            </div>
            <div class="command-output"></div>
            <div class="command-line active">
                <span class="prompt">$</span>
                <input type="text" class="terminal-input" autofocus />
            </div>
        `;

        const terminalInput = terminalContent.querySelector('.terminal-input');
        const commandOutput = terminalContent.querySelector('.command-output');

        // Style the input (if not already in CSS)
        const existingStyle = document.querySelector('#terminal-input-style');
        if (!existingStyle) {
            const style = document.createElement('style');
            style.id = 'terminal-input-style';
            style.textContent = `
                .terminal-input {
                    background: transparent;
                    border: none;
                    outline: none;
                    color: var(--light-text);
                    font-family: 'Fira Code', monospace;
                    font-size: 0.875rem;
                    width: calc(100% - 1rem);
                }
                
                body.dark-mode .terminal-input {
                    color: var(--dark-text);
                }
                
                .command-line.active {
                    display: flex;
                    align-items: baseline;
                }
            `;
            document.head.appendChild(style);
        }

        // Handle input
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const command = terminalInput.value.trim();

                if (command) {
                    // Add to history
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;

                    // Process command
                    processCommand(command);

                    // Clear input
                    terminalInput.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    terminalInput.value = '';
                }
            }
        });

        function processCommand(command) {
            // Display the command
            const commandLine = document.createElement('div');
            commandLine.className = 'command-line';
            commandLine.innerHTML = `
                <span class="prompt">$</span>
                <span class="command">${command}</span>
            `;
            commandOutput.appendChild(commandLine);

            // Execute command
            const output = commands[command.toLowerCase()];

            if (output === 'CLEAR') {
                // Clear terminal
                commandOutput.innerHTML = '';
            } else if (output) {
                // Display output
                const outputDiv = document.createElement('div');
                outputDiv.className = 'command-output-text';
                outputDiv.textContent = output;
                commandOutput.appendChild(outputDiv);
            } else {
                // Command not found
                const errorDiv = document.createElement('div');
                errorDiv.className = 'command-output-text error';
                errorDiv.textContent = `Command not found: ${command}. Try 'cat about_me.txt' or 'clear'.`;
                commandOutput.appendChild(errorDiv);
            }

            // Scroll to bottom
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }

        // Focus input when clicking on terminal
        terminal.addEventListener('click', () => {
            terminalInput.focus();
        });
    }

    // ======= REVEAL ANIMATION ON SCROLL =======
    function handleScrollAnimations() {
        // Handle fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in:not(.visible)');
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });

        // Handle timeline items
        const timelineItems = document.querySelectorAll('.timeline-item:not(.visible)');
        timelineItems.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
    }

    // ======= ENHANCED SCROLL ANIMATIONS FOR SKILL CARDS =======
    function setupSkillCardAnimations() {
        const skillCards = document.querySelectorAll('.tech-card');
        const skillsSection = document.querySelector('.skills-section');

        // Reset animation on scroll
        function checkSkillCards() {
            const triggerBottom = window.innerHeight * 0.8;
            const sectionTop = skillsSection.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                skillCards.forEach((card, index) => {
                    // Re-trigger animation by removing and adding class
                    if (!card.classList.contains('animated')) {
                        setTimeout(() => {
                            card.style.animation = 'none';
                            card.offsetHeight; // Trigger reflow
                            card.style.animation = null;
                            card.classList.add('animated');
                        }, index * 100);
                    }
                });
            }
        }

        // Add intersection observer for better performance
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    checkSkillCards();
                }
            });
        }, {
            threshold: 0.1
        });

        if (skillsSection) {
            observer.observe(skillsSection);
        }


    }

    // ======= ENHANCED EXPERIENCE SECTIONFsetu ANIMATIONS =======
    function setupExperienceAnimations() {
        const timelineItems = document.querySelectorAll('.timeline-item');
        const logos = document.querySelectorAll('.timeline-logo');

        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Trigger logo animation
                    const logo = entry.target.querySelector('.timeline-logo');
                    if (logo) {
                        logo.style.animation = 'none';
                        logo.offsetHeight; // Trigger reflow
                        logo.style.animation = null;
                    }
                }
            });
        }, observerOptions);

        // Observe all timeline items
        timelineItems.forEach(item => {
            observer.observe(item);
        });

        // Parallax effect for logos on scroll


        // Throttled scroll event for performance
        let scrollTimeout;
        window.addEventListener('scroll', () => {
            if (scrollTimeout) {
                window.cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = window.requestAnimationFrame(updateLogoParallax);
        });



        // Magnetic effect on mouse move
        logos.forEach(logo => {
            logo.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;

                this.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1)`;
            });

            logo.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }

    // ======= CONVERSATIONAL CONTACT SECTION =======
    function initConversationalContact() {
        const chatMessages = document.getElementById('chatMessages');
        const quickReplies = document.getElementById('quickReplies');
        const chatForm = document.getElementById('chatForm');
        const chatInput = document.getElementById('chatInput');

        if (!chatMessages || !quickReplies || !chatForm || !chatInput) return;

        // Bot responses configuration
        const botResponses = {
            'discuss-project': {
                message: "That's exciting! I'd love to hear about your project. What kind of project do you have in mind?",
                followUp: 'project-details'
            },
            'job-opportunity': {
                message: "Thank you for considering me! I'm interested in full-time, part-time, and internship opportunities. Could you tell me more about the role?",
                followUp: 'job-details'
            },
            'collaboration': {
                message: "I'm always open to interesting collaborations! What kind of collaboration are you thinking about?",
                followUp: 'collab-details'
            },
            'just-saying-hi': {
                message: "Hey there! Thanks for stopping by! 😊 Is there anything specific you'd like to know about me or my work?",
                followUp: 'general-chat'
            }
        };
        // Add these functions inside initConversationalContact(), after showRestartOption()

        // Function to ask for email
        function askForEmail() {
            const emailDiv = document.createElement('div');
            emailDiv.className = 'message bot-message';

            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'message-bubble';

            const questionText = document.createElement('p');
            questionText.textContent = 'Great! To make sure I can respond to you, could you please share your email address?';
            questionText.style.marginBottom = '10px';

            const emailForm = document.createElement('form');
            emailForm.className = 'email-input-form';
            emailForm.innerHTML = `
        <input type="email" class="email-input" placeholder="your.email@example.com" required style="
            width: 100%; 
            padding: 8px 12px; 
            border: 1px solid #e2e8f0; 
            border-radius: 15px; 
            margin-bottom: 10px;
            font-size: 14px;
        ">
        <button type="submit" style="
            background: var(--light-accent); 
            color: white; 
            border: none; 
            border-radius: 15px; 
            padding: 8px 16px; 
            cursor: pointer;
            font-size: 14px;
        ">Continue</button>
    `;

            bubbleDiv.appendChild(questionText);
            bubbleDiv.appendChild(emailForm);
            emailDiv.appendChild(bubbleDiv);

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            timeSpan.textContent = 'just now';
            emailDiv.appendChild(timeSpan);

            chatMessages.appendChild(emailDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Handle email form submission
            emailForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const emailInput = emailForm.querySelector('.email-input');
                const email = emailInput.value.trim();

                if (email) {
                    // Store email for later use
                    window.userEmail = email;

                    // Add user message showing the email
                    addMessage(email, true);

                    // Remove the email form
                    emailDiv.remove();

                    // Continue with the chat
                    setTimeout(() => {
                        proceedToMainChat();
                    }, 1000);
                }
            });
        }

        // Function to proceed to main chat after email collection
        function proceedToMainChat() {
            addMessage("Perfect! Now please tell me more about what you'd like to discuss:");

            // Show the main chat form
            setTimeout(() => {
                quickReplies.style.display = 'none';
                chatForm.style.display = 'flex';
                chatInput.focus();
            }, 1000);
        }
        // Typewriter effect
        function typeWriter(element, text, speed = 50) {
            element.textContent = '';
            let i = 0;

            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                }
            }

            type();
        }
        function showFollowUpOptions() {
            const followUpDiv = document.createElement('div');
            followUpDiv.className = 'message bot-message';

            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'message-bubble';

            // Create the question text and buttons
            const questionText = document.createElement('p');
            questionText.textContent = 'Is there anything else I can help you with?';
            questionText.style.marginBottom = '10px';

            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'follow-up-options';
            buttonContainer.innerHTML = `
                <button class="follow-up-btn" data-follow="yes">Yes</button>
                <button class="follow-up-btn" data-follow="no">No</button>
            `;

            // Append question and buttons to bubble
            bubbleDiv.appendChild(questionText);
            bubbleDiv.appendChild(buttonContainer);
            followUpDiv.appendChild(bubbleDiv);

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            timeSpan.textContent = 'just now';
            followUpDiv.appendChild(timeSpan);

            chatMessages.appendChild(followUpDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Add event listeners to the buttons
            const followUpButtons = buttonContainer.querySelectorAll('.follow-up-btn');
            followUpButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    const response = btn.dataset.follow;

                    // Add user message showing what they clicked
                    addMessage(btn.textContent, true);

                    // Remove the follow-up options
                    followUpDiv.remove();

                    // Bot responses based on user choice
                    if (response === 'yes') {
                        setTimeout(() => {
                            addMessage("Great! What else can I help you with? Feel free to type your question below.");
                            if (chatForm.style.display === 'none') {
                                chatForm.style.display = 'flex';
                                chatInput.focus();
                            }
                        }, 1000);
                    } else {
                        setTimeout(() => {
                            addMessage("Perfect! Thanks for stopping by and getting to know me better. Have a wonderful day! 👋");
                            setTimeout(() => {
                                showRestartOption();
                            }, 2000);
                        }, 1000);
                    }
                });
            });
        }
        // Function to show restart chat option
        function showRestartOption() {
            const restartDiv = document.createElement('div');
            restartDiv.className = 'message bot-message';

            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'message-bubble restart-bubble';

            const restartText = document.createElement('p');
            restartText.textContent = 'Want to start a new conversation?';
            restartText.style.marginBottom = '10px';

            const restartButton = document.createElement('button');
            restartButton.className = 'restart-chat-btn';
            restartButton.innerHTML = ' Restart Chat';

            bubbleDiv.appendChild(restartText);
            bubbleDiv.appendChild(restartButton);
            restartDiv.appendChild(bubbleDiv);

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            timeSpan.textContent = 'just now';
            restartDiv.appendChild(timeSpan);

            chatMessages.appendChild(restartDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Add event listener to restart button
            restartButton.addEventListener('click', () => {
                restartChat();
            });
        }

        // Function to restart the chat
        function restartChat() {
            // Clear all messages except the initial one
            chatMessages.innerHTML = `
                <div class="message bot-message">
                    <div class="message-bubble">
                        <span class="typing-text">Hey there! 👋 I'm Harsh. What brings you here today?</span>
                    </div>
                    <span class="message-time">just now</span>
                </div>
            `;

            // Show quick replies again
            quickReplies.style.display = 'flex';
            chatForm.style.display = 'none';

            // Clear input
            chatInput.value = '';

            // Scroll to top
            chatMessages.scrollTop = 0;
        }
        // Add message to chat
        function addMessage(message, isUser = false, animate = true, askFollowUp = false) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

            const bubbleDiv = document.createElement('div');
            bubbleDiv.className = 'message-bubble';

            if (!isUser && animate) {
                bubbleDiv.innerHTML = `
                    <div class="typing-dots">
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                        <span class="typing-dot"></span>
                    </div>`;
                messageDiv.appendChild(bubbleDiv);
                chatMessages.appendChild(messageDiv);

                setTimeout(() => {
                    bubbleDiv.innerHTML = '';
                    const textSpan = document.createElement('span');
                    textSpan.className = 'typing-text';
                    bubbleDiv.appendChild(textSpan);
                    typeWriter(textSpan, message);

                    if (askFollowUp) {
                        setTimeout(() => {
                            showFollowUpOptions();
                        }, message.length * 50 + 1000); // wait after message is typed
                    }
                }, 1000);
            } else {
                bubbleDiv.textContent = message;
                messageDiv.appendChild(bubbleDiv);
                chatMessages.appendChild(messageDiv);

                if (askFollowUp) {
                    setTimeout(() => {
                        showFollowUpOptions();
                    }, 500);
                }
            }

            const timeSpan = document.createElement('span');
            timeSpan.className = 'message-time';
            timeSpan.textContent = 'just now';
            messageDiv.appendChild(timeSpan);

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Function to send email via EmailJS
        function sendEmailNotification(userMessage, topic) {
            // Create proper subject based on topic
            const subjectMap = {
                'discuss-project': 'Project Discussion - Portfolio Contact',
                'job-opportunity': 'Job Opportunity - Portfolio Contact',
                'collaboration': 'Collaboration Request - Portfolio Contact',
                'just-saying-hi': 'General Inquiry - Portfolio Contact'
            };

            const subject = subjectMap[topic] || 'Portfolio Contact';

            const templateParams = {
                topic: subject,
                message: userMessage,
                timestamp: new Date().toLocaleString(),
                from_email: window.userEmail || 'No email provided',
                reply_to: window.userEmail || 'noreply@example.com'
            };

            return emailjs.send(EMAIL_CONFIG.serviceID, EMAIL_CONFIG.templateID, templateParams)
                .then(function (response) {
                    console.log('Email sent successfully:', response);
                    return true;
                })
                .catch(function (error) {
                    console.error('Failed to send email:', error);
                    return false;
                });
        }

        // Handle quick reply clicks
        // Handle quick reply clicks
        quickReplies.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply-btn')) {
                const reply = e.target.dataset.reply;
                const replyText = e.target.textContent;

                // Store the selected topic for later use
                window.selectedTopic = reply;

                // Add user message
                addMessage(replyText, true);

                // Add bot response
                if (botResponses[reply]) {
                    setTimeout(() => {
                        addMessage(botResponses[reply].message);

                        // Ask for email after bot response
                        setTimeout(() => {
                            askForEmail();
                        }, 2000);
                    }, 1000);
                }
            }
        });

        // Handle form submission
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const message = chatInput.value.trim();
            if (message) {
                // Add user message
                addMessage(message, true);
                const userMessage = message;
                chatInput.value = '';

                // Show sending message
                setTimeout(() => {
                    addMessage("Sending your message...", false, true, false);

                    // Send email with collected topic and email
                    const topicToSend = window.selectedTopic || 'general-inquiry';
                    sendEmailNotification(userMessage, topicToSend)
                        .then(success => {
                            if (success) {
                                setTimeout(() => {
                                    addMessage("Message sent! Harsh will get back to you within 24 hours. 📧", false, true, true);
                                }, 1000);
                            } else {
                                setTimeout(() => {
                                    addMessage("Sorry, there was an issue sending your message. Please try the email link below.", false, true, true);
                                }, 1000);
                            }
                        });
                }, 1000);
            }
        });

        // Initialize typewriter for first message
        const firstMessage = document.querySelector('.typing-text');
        if (firstMessage) {
            const text = firstMessage.dataset.text;
            typeWriter(firstMessage, text);
        }

        // Animate chat container on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out';
                }
            });
        }, { threshold: 0.1 });

        const chatContainer = document.querySelector('.chat-container');
        if (chatContainer) {
            observer.observe(chatContainer);
        }
    }

    // ======= INITIALIZE ALL FUNCTIONS =======
    setupInteractiveTerminal();
    setupSkillCardAnimations();
    setupExperienceAnimations();
    initConversationalContact();

    // Run animations on initial load
    handleScrollAnimations();

    // Run animations on scroll
    window.addEventListener('scroll', handleScrollAnimations);

});