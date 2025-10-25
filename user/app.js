/*
* Make-It-All Knowledge Base
* This file simulates a backend and user authentication for the prototype.
*/

/**
 * Shows a success notification message that auto-dismisses after 3 seconds
 * @param {string} message - The message to display
 */
function showSuccessNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'success-notification';
    notification.innerHTML = `
        <i data-feather="check-circle"></i>
        <span>${message}</span>
    `;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Replace feather icons
    feather.replace();
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Accounts created for the purpose of the prototype.
// In a real app, this data would come from a server and database.
// We use 'localStorage' to make new posts and replies persist during the session.

// Simulated User Accounts
const simUsers = {
    'user@makeitall.com': {
        name: 'Steve Adams',
        role: 'member',
        avatarClass: 'avatar-1'
    },
    'specialist@makeitall.com': {
        name: 'Jane Doe',
        role: 'specialist',
        avatarClass: 'avatar-4'
    },
    'manager@makeitall.com': {
        name: 'Ben Carter',
        role: 'manager',
        avatarClass: 'avatar-2'
    },
    'leader@makeitall.com': {
        name: 'Sarah Johnson',
        role: 'team_leader',
        avatarClass: 'avatar-3'
    }
};

// Initial hardcoded posts
const initialPosts = [
    // Software Issues
    {
        id: 1,
        topic: 'Software Issues',
        title: 'Jasmine software crashing on startup',
        author: 'Steve Adams',
        authorEmail: 'user@makeitall.com',
        date: '3 October 2025',
        content: "Every time I try to open the Jasmine client on my machine, it shows the splash screen and then immediately closes. \n\nI've tried: \n- Restarting my computer \n- Reinstalling the software \n\nNothing seems to work. Any ideas?",
        reactions: { up: 4, lightbulb: 1, comments: 1 },
        replies: [
            {
                id: 101,
                author: 'Jane Doe',
                authorRole: 'specialist',
                avatarClass: 'avatar-4',
                date: '3 October 2025',
                content: "Hi Steve, this is a known issue with the latest Windows update. The team is working on a patch. \n\nFor now, you can fix this by deleting the cache file at: \n`C:\\Users\\[YourName]\\AppData\\Local\\Jasmine\\cache.dat` \n\nLet me know if that works!"
            }
        ]
    },
    {
        id: 3,
        topic: 'Software Issues',
        title: 'Cannot access shared drive',
        author: 'Maria Garcia',
        authorEmail: 'maria@makeitall.com',
        date: '1 October 2025',
        content: 'I keep getting a "Permission Denied" error when trying to access the //PROJECTS/ shared drive. I had access yesterday. Did something change?',
        reactions: { up: 7, lightbulb: 0, comments: 0 },
        replies: []
    },
    // Printing
    {
        id: 2,
        topic: 'Printing',
        title: 'Printer not connecting to WiFi',
        author: 'Steve Adams',
        authorEmail: 'user@makeitall.com',
        date: '2 October 2025',
        content: 'I have tried to connect my printer (HP LaserJet M404) to WiFi numerous times, even tried restarting it and the router. My laptop can see the WiFi, but the printer cannot. \n\nAny suggestions to fix it?',
        reactions: { up: 2, lightbulb: 0, comments: 0 },
        replies: []
    },
    // Network
    {
        id: 4,
        topic: 'Network',
        title: 'Company VPN is extremely slow today',
        author: 'Ben Carter',
        authorEmail: 'manager@makeitall.com',
        date: '4 October 2025',
        content: 'Is anyone else experiencing very slow speeds on the company VPN? My file transfers are timing out and video calls are impossible.',
        reactions: { up: 12, lightbulb: 0, comments: 0 },
        replies: []
    },
    // Security
    {
        id: 5,
        topic: 'Security',
        title: 'Suspicious Phishing Email Received',
        author: 'Steve Adams',
        authorEmail: 'user@makeitall.com',
        date: '4 October 2025',
        content: "I received an email from 'IT Support' asking me to validate my password by clicking a link. This looks like a phishing attempt. Forwarding to the security team, but wanted to warn others.",
        reactions: { up: 9, lightbulb: 3, comments: 1 },
        replies: [
             {
                id: 102,
                author: 'Jane Doe',
                authorRole: 'specialist',
                avatarClass: 'avatar-4',
                date: '4 October 2025',
                content: "Thanks, Steve. This is correct. That is a phishing email. **DO NOT** click the link. Our team is working to block it now. Well spotted!"
            }
        ]
    },
    // Database
    {
        id: 6,
        topic: 'Database',
        title: 'Query timeout on customer_report table',
        author: 'Jane Doe',
        authorEmail: 'specialist@makeitall.com',
        date: '1 October 2025',
        content: 'Running a standard SELECT query on the `customer_report` view is timing out after 30 seconds. This report is critical for month-end. Investigating now.',
        reactions: { up: 1, lightbulb: 1, comments: 0 },
        replies: []
    },
    // Finance
    {
        id: 7,
        topic: 'Finance',
        title: 'Question about new expense reporting tool',
        author: 'Maria Garcia',
        authorEmail: 'maria@makeitall.com',
        date: '29 September 2025',
        content: "Where can I find the training guide for the new 'Expensify' tool? The old Concur portal is now read-only.",
        reactions: { up: 3, lightbulb: 0, comments: 0 },
        replies: []
    }
];

// Load posts from localStorage or use initial set
let simPosts = JSON.parse(localStorage.getItem('simPosts')) || initialPosts;
if (!localStorage.getItem('simPosts')) {
    localStorage.setItem('simPosts', JSON.stringify(simPosts));
}

// Initial hardcoded tasks
const initialTasks = [
    {
        id: 1,
        title: 'Write onboarding documentation',
        project: 'Project Apollo',
        projectId: 'apollo',
        assignedTo: ['user@makeitall.com'],
        priority: 'medium',
        status: 'todo',
        deadline: '2025-10-22',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 2,
        title: 'Fix login bug',
        project: 'Project Apollo',
        projectId: 'apollo',
        assignedTo: ['user@makeitall.com'],
        priority: 'urgent',
        status: 'inprogress',
        deadline: '2025-10-20',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 3,
        title: 'Prepare client presentation',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['user@makeitall.com'],
        priority: 'urgent',
        status: 'todo',
        deadline: '2025-10-20',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 4,
        title: 'Code review for API integration',
        project: 'Project Apollo',
        projectId: 'apollo',
        assignedTo: ['user@makeitall.com'],
        priority: 'medium',
        status: 'todo',
        deadline: '2025-10-23',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 5,
        title: 'Update payment gateway tests',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['user@makeitall.com'],
        priority: 'high',
        status: 'todo',
        deadline: '2025-10-24',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 6,
        title: 'Schedule team retro',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['user@makeitall.com'],
        priority: 'low',
        status: 'completed',
        deadline: '2025-10-28',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 7,
        title: 'Design dashboard mockups',
        project: 'Project Apollo',
        projectId: 'apollo',
        assignedTo: ['user@makeitall.com'],
        priority: 'high',
        status: 'todo',
        deadline: '2025-10-30',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 8,
        title: 'Client demo',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['user@makeitall.com'],
        priority: 'urgent',
        status: 'todo',
        deadline: '2025-10-21',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 9,
        title: 'Design review',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['specialist@makeitall.com'],
        priority: 'medium',
        status: 'todo',
        deadline: '2025-10-24',
        createdBy: 'manager@makeitall.com'
    },
    {
        id: 10,
        title: 'Demo review',
        project: 'Project 15',
        projectId: 'project15',
        assignedTo: ['specialist@makeitall.com'],
        priority: 'low',
        status: 'inprogress',
        deadline: '2025-10-25',
        createdBy: 'manager@makeitall.com'
    }
];

// Load tasks from localStorage or use initial set
let simTasks = JSON.parse(localStorage.getItem('simTasks')) || initialTasks;
if (!localStorage.getItem('simTasks')) {
    localStorage.setItem('simTasks', JSON.stringify(simTasks));
}

function saveTasks() {
    localStorage.setItem('simTasks', JSON.stringify(simTasks));
}

// Notifications data
const initialNotifications = [
    {
        id: 1,
        type: 'task_completed',
        title: 'Task Completed',
        text: 'You finished task for Project Apollo',
        time: '12 hours ago',
        read: false
    },
    {
        id: 2,
        type: 'task_completed',
        title: 'Task Completed',
        text: 'You finished tasks for Project Apollo',
        time: '12 hours ago',
        read: false
    },
    {
        id: 3,
        type: 'new_post',
        title: 'New Post',
        text: 'New post added to printing',
        time: '3 minutes ago',
        read: true
    },
    {
        id: 4,
        type: 'task_completed',
        title: 'Task Completed',
        text: 'You finished task for Project Apollo',
        time: '12 hours ago',
        read: false
    },
    {
        id: 5,
        type: 'task_completed',
        title: 'Task Completed',
        text: 'You finished tasks for Project Apollo',
        time: '12 hours ago',
        read: false
    }
];

let simNotifications = JSON.parse(localStorage.getItem('simNotifications')) || initialNotifications;
if (!localStorage.getItem('simNotifications')) {
    localStorage.setItem('simNotifications', JSON.stringify(simNotifications));
}


// HELPER FUNCTIONS

/**
 * Gets the current simulated user from the URL query parameter.
 * This now correctly defaults and finds the user.
 */
function getCurrentUser() {
    const urlParams = new URLSearchParams(window.location.search);
    let userEmail = urlParams.get('user'); // Get email from URL

    //If not in URL, check sessionStorage (backup)
    if (!userEmail) {
        userEmail = sessionStorage.getItem('currentUserEmail');
        console.warn('User parameter missing from URL, using session backup:', userEmail);
    }

    //Find the user in our simulated DB
    if (userEmail && simUsers[userEmail]) {
        //Store in session as backup
        sessionStorage.setItem('currentUserEmail', userEmail);

        return {
            email: userEmail,
            ...simUsers[userEmail]
        };
    }

    //Fallback if absolutely no user info exists
    console.error('No valid user found! Defaulting to member account.');
    const fallbackEmail = 'user@makeitall.com';
    sessionStorage.setItem('currentUserEmail', fallbackEmail);

    return {
        email: fallbackEmail,
        ...simUsers[fallbackEmail]
    };
}

/**
 * Persists the current user's email in all internal links.
 * This simulates a "logged in" session as you navigate.
 */
function persistUserQueryParam(currentUser) {
    const userQuery = `user=${currentUser.email}`;
    document.querySelectorAll('a').forEach(a => {
        // Check if it's an internal link
        if (a.href && a.hostname === window.location.hostname && !a.href.includes('user=')) {
            // Check if it already has query params
            if (a.search) {
                // Check if it's a mailto link, if so, skip
                if(a.protocol === "mailto:") return;
                a.href += `&${userQuery}`;
            } else {
                a.href += `?${userQuery}`;
            }
        }
    });
}

/**
 * Generates the HTML for a single post card.
 * @param {object} post - The post object.
 * @param {string} currentUserEmail - The email of the current user.
 */
function createPostCardHTML(post, currentUserEmail) {
    const postLink = `knowledge-base-post.html?id=${post.id}&user=${currentUserEmail}`;
    const topicClass = post.topic.toLowerCase().split(' ')[0]; // 'software issues' -> 'software'

    // Determine avatar class
    let avatarClass = 'avatar-3'; // Default avatar
    if (post.authorEmail === 'user@makeitall.com') avatarClass = 'avatar-1';
    if (post.authorEmail === 'specialist@makeitall.com') avatarClass = 'avatar-4';
    if (post.authorEmail === 'manager@makeitall.com') avatarClass = 'avatar-2';

    return `
        <div class="post-card">
            <div class="post-card-header">
                <div class="post-card-avatar ${avatarClass}"></div>
                <div>
                    <span class="post-card-author">${post.author}</span>
                    <span class="post-card-date">${post.date}</span>
                </div>
                <span class="post-card-tag ${topicClass}">${post.topic}</span>
            </div>
            <a href="${postLink}" class="post-card-body">
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </a>
            <div class="post-card-footer">
                <span><i data-feather="thumbs-up"></i> ${post.reactions.up}</span>
                <span><i data-feather="message-circle"></i> ${post.reactions.comments}</span>
                <span><i data-feather="zap"></i> ${post.reactions.lightbulb}</span>
            </div>
        </div>
    `;
}

/**
 * Saves the current state of simPosts to localStorage.
 */
function savePosts() {
    localStorage.setItem('simPosts', JSON.stringify(simPosts));
}

/* ===========================
   TOPICS STORE (persist custom topics)
   =========================== */
const MAIN_TOPICS = ["Printing", "Software Issues", "Network", "Security", "Database", "Finance"];
let customTopics = JSON.parse(localStorage.getItem('customTopics')) || [];

function getAllTopics() {
    return [...MAIN_TOPICS, ...customTopics];
}
function saveCustomTopics() {
    localStorage.setItem('customTopics', JSON.stringify(customTopics));
}


/* ===========================
   PAGE-SPECIFIC LOGIC
   =========================== */

/**
 * Renders a list of posts into the container.
 * @param {Array} posts - An array of post objects to render.
 * @param {string} currentUserEmail - The email of the current user.
 */
function renderPostList(posts, currentUserEmail) {
    const postListContainer = document.getElementById('post-list-container');
    if (posts.length > 0) {
        const postsHtml = posts
            .map(post => createPostCardHTML(post, currentUserEmail))
            .join('');
        postListContainer.innerHTML = postsHtml;
    } else {
        postListContainer.innerHTML = '<p>No posts found for this topic.</p>';
    }
    // Re-activate icons after rendering
    feather.replace();
}

/**
 * Switches the main KB page to show a specific topic.
 * @param {string} topicName - The name of the topic, e.g., "Software Issues".
 * @param {object} currentUser - The current user object.
 */
function showTopicView(topicName, currentUser) {
    // 1. Hide the topic grid and its parent section
    document.getElementById('kb-topics-section').style.display = 'block';

    // 2. Hide the main page sidebar (Announcements)
    document.getElementById('announcements-widget').style.display = 'none';

    // 3. Show the topic-specific sidebar
    document.getElementById('topic-sidebar-widgets').style.display = 'block';

    // 4. Update the header to show breadcrumbs and new title
    const titleContainer = document.getElementById('kb-title-container');
    titleContainer.innerHTML = `
        <p class="breadcrumbs">
            <a href="knowledge-base.html?user=${currentUser.email}">Knowledge Base</a> > ${topicName}
        </p>
        <h1>${topicName}</h1>
    `;

    // Pass the topic to the create page via query param (FIXED: reference the element directly)
    const createHref = `knowledge-base-create.html?user=${currentUser.email}&topic=${encodeURIComponent(topicName)}`;
    const createBtnEl = document.getElementById('create-post-btn-topic');
    if (createBtnEl) createBtnEl.href = createHref;

    // Also update the "Start new discussion" link in the sidebar
    const startDiscussionLink = document.getElementById('start-discussion-link');
    if (startDiscussionLink) startDiscussionLink.href = createHref;

    // 6. Update the "Posts" list title and hide tabs
    document.getElementById('posts-list-title').textContent = 'All Posts';
    document.getElementById('post-tabs-container').style.display = 'none';

    // 7. Filter and render the posts for this topic
    const topicPosts = simPosts.filter(post => post.topic === topicName);
    renderPostList(topicPosts, currentUser.email);
}

/**
 * Renders the topic cards into the grid for the main page ONLY (main topics + Add New Topic).
 * @param {boolean} showAll If true, render all topics (unused for main page now). If false, render main topics only.
 * @param {object} currentUser Current user (for click-through)
 */
function renderTopicGrid(showAll, currentUser) {
    const grid = document.getElementById('topic-grid');
    if (!grid) return;

    // For main page we always show only MAIN_TOPICS
    const topics = MAIN_TOPICS;

    // Build cards
    const topicCardsHtml = topics.map(t => `
        <a href="#" class="topic-card" data-topic="${t}">
            <i data-feather="${iconForTopic(t)}"></i>
            <span>${t}</span>
        </a>
    `).join('');

    // “Add New Topic” card
    const addCardHtml = `
        <a href="knowledge-base-create-topic.html?user=${currentUser.email}" class="topic-card add-topic-card" id="add-topic-card">
            <i data-feather="plus"></i>
            <span>Add New Topic</span>
        </a>
    `;

    grid.innerHTML = topicCardsHtml + addCardHtml;

    // Hook up topic clicks
    grid.querySelectorAll('.topic-card:not(.add-topic-card)').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const topicName = card.dataset.topic;
            showTopicView(topicName, currentUser);
        });
    });

    // Note: Add New Topic now links to form page instead of prompt

    feather.replace();
}

/** Pick an icon per topic (fallback: tag) */
function iconForTopic(topic) {
    const map = {
        "Printing": "printer",
        "Software Issues": "alert-triangle",
        "Network": "wifi",
        "Security": "shield",
        "Database": "database",
        "Finance": "shopping-cart"
    };
    return map[topic] || "tag";
}

/**
 * Runs on the Knowledge Base Index page (knowledge-base.html)
 */
 function loadKbIndex(currentUser) {
     // Make sure the Create Post button is visible
     const createBtn = document.getElementById('create-post-btn-topic');
     if (createBtn) createBtn.style.display = 'inline-flex';

     // Load and render popular posts
     const popularPosts = [...simPosts].sort((a, b) => b.reactions.up - a.reactions.up);
     renderPostList(popularPosts, currentUser.email);

     // Render the main topics grid (main topics + Add New Topic)
     document.body.dataset.topicsView = 'main';
     renderTopicGrid(false, currentUser);

     // Update "View more topics" link to All Topics page
     const viewMoreLink = document.getElementById('view-more-topics');
     if (viewMoreLink) {
         viewMoreLink.setAttribute('href', 'all-topics.html');
     }
 }


/**
 * Runs on the single Knowledge Base Post page (knowledge-base-post.html)
 */
function loadKbPost(currentUser) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = simPosts.find(p => p.id === postId);

    if (!post) {
        document.getElementById('post-title-placeholder').textContent = 'Post not found';
        document.getElementById('post-full-content').innerHTML = '<p>Could not find a post with that ID. <a href="knowledge-base.html">Go back to Knowledge Base</a></p>';
        return;
    }

    // --- Determine avatar class for post author
    let avatarClass = 'avatar-3'; // Default
    if (post.authorEmail === 'user@makeitall.com') avatarClass = 'avatar-1';
    if (post.authorEmail === 'specialist@makeitall.com') avatarClass = 'avatar-4';
    if (post.authorEmail === 'manager@makeitall.com') avatarClass = 'avatar-2';

    // --- Fill in post details ---
    document.getElementById('post-title-placeholder').textContent = post.title;
    document.getElementById('post-breadcrumbs').innerHTML = `
        <a href="knowledge-base.html?user=${currentUser.email}">Knowledge Base</a> >
        <a href="knowledge-base.html?user=${currentUser.email}" onclick="sessionStorage.setItem('returnToTopic', '${post.topic}');">${post.topic}</a> >
        Post
    `;
    document.title = `Make-It-All - ${post.title}`; // Update browser tab title

    const postContentEl = document.getElementById('post-full-content');
    postContentEl.innerHTML = `
        <div class="post-card">
            <div class="post-card-header">
                <div class="post-card-avatar ${avatarClass}"></div>
                <div>
                    <span class="post-card-author">${post.author}</span>
                    <span class="post-card-date">${post.date}</span>
                </div>
            </div>
            <div class="post-card-body">
                <p>${post.content.replace(/\n/g, '<br>')}</p>
            </div>
            <div class="post-card-footer">
                <span><i data-feather="thumbs-up"></i> ${post.reactions.up}</span>
                <span><i data-feather="message-circle"></i> ${post.reactions.comments}</span>
                <span><i data-feather="zap"></i> ${post.reactions.lightbulb}</span>
            </div>
        </div>
    `;

    // --- Fill in replies ---
    const repliesListEl = document.getElementById('post-replies-list');
    if (post.replies.length > 0) {
        const repliesHtml = post.replies.map(reply => `
            <div class="reply-card">
                <div class="reply-avatar ${reply.avatarClass}"></div>
                <div class="reply-content">
                    <div class="reply-header">
                        <span class="reply-author">${reply.author} ${reply.authorRole === 'specialist' ? '(Specialist)' : ''}</span>
                        <span class="reply-date">${reply.date}</span>
                    </div>
                    <div class="reply-body">
                        <p>${reply.content.replace(/\n/g, '<br>')}</p>
                    </div>
                </div>
            </div>
        `).join('');
        repliesListEl.innerHTML = repliesHtml;
    } else {
        repliesListEl.innerHTML = '<p>No replies yet.</p>';
    }

    // --- Handle Role-Based Permissions (Replying) ---
    //Define technical vs non-technical topics
    const technicalTopics = ['Printing', 'Software Issues', 'Network', 'Security', 'Database'];
    const isTechnicalTopic = technicalTopics.includes(post.topic);

    //Determine if current user can reply
    let canReply = false;

    if (isTechnicalTopic) {
        //Technical topics: Only specialists can reply
        canReply = (currentUser.role === 'specialist');
    } else {
        //Non-technical topics: Anyone can reply
        canReply = true;
    }

    if (canReply) {
        const replyForm = document.getElementById('reply-form');
        replyForm.style.display = 'block';

        replyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const replyContent = document.getElementById('reply-content').value;

            if (!replyContent) return;

            //Create the new reply object
            const newReply = {
                id: new Date().getTime(), //Unique ID
                author: currentUser.name,
                authorRole: currentUser.role,
                avatarClass: currentUser.avatarClass,
                date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
                content: replyContent
            };

            //Add reply to the post and save
            post.replies.push(newReply);
            post.reactions.comments = post.replies.length; //Update comment count
            savePosts();

            //Reload the page to show the new reply
            window.location.reload();
        });
    } else {
        //Show a message explaining why they can't reply
        const replyForm = document.getElementById('reply-form');
        replyForm.style.display = 'block';
        replyForm.innerHTML = `
            <div style="padding: 20px; background: #FFF3CD; border: 1px solid #FFE69C; border-radius: 8px; text-align: center;">
                <p style="margin: 0; color: #856404; font-weight: 500;">
                    <i data-feather="alert-circle" style="width: 18px; height: 18px; vertical-align: middle;"></i>
                    Only Technical Specialists can reply to technical posts.
                </p>
            </div>
        `;
        feather.replace(); //Re-render the icon
    }
}

/**
 * Runs on the Create Post page (knowledge-base-create.html)
 */
function setupCreateForm(currentUser) {
    const createForm = document.getElementById('create-post-form');

    // --- Populate the topics dropdown dynamically (mains + any custom) ---
    const topicSelect = document.getElementById('post-topic');
    if (topicSelect) {
      const allTopics = getAllTopics();
      topicSelect.innerHTML = '<option value="">Select a topic...</option>' +
      allTopics.map(t => `<option value="${t}">${t}</option>`).join('');
    }

    // --- NEW: Pre-select topic from URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const topicFromUrl = urlParams.get('topic');
    if (topicFromUrl) {
        document.getElementById('post-topic').value = topicFromUrl;
    }
    // --- End of new code ---

    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('post-title').value;
        const topic = document.getElementById('post-topic').value;
        const details = document.getElementById('post-details').value;

        if (!title || !topic || !details) {
            alert('Please fill out all fields.');
            return;
        }

        // Create new post object
        const newPost = {
            id: new Date().getTime(), // Unique ID
            topic: topic,
            title: title,
            author: currentUser.name, // This now works thanks to the fixed login
            authorEmail: currentUser.email,
            date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
            content: details,
            reactions: { up: 0, lightbulb: 0, comments: 0 },
            replies: []
        };

        // Add new post to our simulated database
        simPosts.unshift(newPost); // Add to the beginning of the array
        savePosts();

        // Store success message
        sessionStorage.setItem('postCreated', 'Post created successfully!');

        // Store the topic to return to
        sessionStorage.setItem('returnToTopic', topic);
        
        // Redirect
        window.location.href = `knowledge-base.html?user=${currentUser.email}`;
    });
}

/**
 * Runs on the Settings page (settings.html)
 */
function loadSettingsPage(currentUser) {
    // 1. Populate user data
    document.getElementById('profile-name').value = currentUser.name;
    document.getElementById('profile-email').value = currentUser.email;

    // Capitalize the first letter of the role
    const role = currentUser.role.charAt(0).toUpperCase() + currentUser.role.slice(1);
    document.getElementById('profile-role').value = role;

    // 2. Add form submit listeners (prototype alerts)
    document.getElementById('profile-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // In a real app, you'd save this new name
        const newName = document.getElementById('profile-name').value;
        alert(`Profile updated! (Name changed to ${newName})`);
    });

    document.getElementById('password-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Password updated! (This is a demo)');
    });

    document.getElementById('notifications-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Notification preferences saved!');
    });

    // 3. Add Sign Out logic
    document.getElementById('sign-out-btn').addEventListener('click', (e) => {
        e.preventDefault();

        // Clear the simulated session
        // This clears the posts you created, etc.
        localStorage.clear();
        sessionStorage.clear();

        alert('Signing out...');

        // Redirect to the login page (assuming it's index.html)
        window.location.href = '../index.html';
    });
}

/* ===========================
   ALL TOPICS PAGE (all-topics.html)
   =========================== */
/**
 * Runs on All Topics page (all-topics.html)
 * Shows a plain list (no buttons) of all topics: main + custom.
 */
 function loadAllTopicsPage(currentUser) {
   // Title + breadcrumbs
   const titleContainer = document.getElementById('kb-title-container');
   if (titleContainer) {
     titleContainer.innerHTML = `
       <p class="breadcrumbs">
         <a href="knowledge-base.html?user=${currentUser.email}">Knowledge Base</a> > All Topics
       </p>
       <h1>All Topics</h1>
     `;
   }

   // Build clickable rows
   const listEl = document.getElementById('all-topics-list');
   if (listEl) {
     const topics = getAllTopics();
     if (topics.length === 0) {
       listEl.innerHTML = '<p>No topics yet.</p>';
     } else {
       listEl.innerHTML = topics
         .map(
           (t) => `
           <div class="topic-row" data-topic="${t}">
             <span class="topic-name">${t}</span>
             <i data-feather="arrow-right"></i>
           </div>
         `
         )
         .join('');
     }

     // Make each row clickable
     listEl.querySelectorAll('.topic-row').forEach((row) => {
       row.addEventListener('click', () => {
         const topicName = row.dataset.topic;
         sessionStorage.setItem('returnToTopic', topicName);
         window.location.href = `knowledge-base.html?user=${currentUser.email}`;
       });
     });
   }

   feather.replace();
 }

/**
 * Runs on the Home page (index.html)
 */
function loadHomePage(currentUser) {
    // Render Total Tasks Chart
    renderTotalTasksChart(currentUser);
    
    // Render To-Do List
    renderToDoList(currentUser);
    
    // Render Trending Posts
    renderTrendingPosts(currentUser);
    
    // Render Notifications
    renderNotifications();
    
    feather.replace();
}

/**
 * Renders the total tasks donut chart
 */
function renderTotalTasksChart(currentUser) {
    const userTasks = simTasks.filter(task => 
        task.assignedTo.includes(currentUser.email)
    );
    
    const todoCount = userTasks.filter(t => t.status === 'todo').length;
    const inProgressCount = userTasks.filter(t => t.status === 'inprogress').length;
    const reviewCount = userTasks.filter(t => t.status === 'review').length;
    const completedCount = userTasks.filter(t => t.status === 'completed').length;
    
    const totalCount = userTasks.length;
    document.getElementById('totalTasksCount').textContent = totalCount;
    
    const ctx = document.getElementById('totalTasksChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['To Do', 'In Progress', 'In Review', 'Completed'],
                datasets: [{
                    data: [todoCount, inProgressCount, reviewCount, completedCount],
                    backgroundColor: ['#1E3A5F', '#E6A100', '#F4A261', '#FF8C42'],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

/**
 * Renders the to-do list with tasks
 */
function renderToDoList(currentUser) {
    const projectSelect = document.getElementById('project-select');
    const todoItemsList = document.getElementById('todo-items-list');
    
    // Populate project filter
    const projects = [...new Set(simTasks.map(t => t.project))];
    projects.forEach(project => {
        const option = document.createElement('option');
        option.value = project;
        option.textContent = project;
        projectSelect.appendChild(option);
    });
    
    // Get user tasks
    let userTasks = simTasks.filter(task => 
        task.assignedTo.includes(currentUser.email) && task.status !== 'completed'
    );
    
    // Sort by priority (default)
    const priorityOrder = { urgent: 0, high: 1, medium: 2, low: 3 };
    userTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    // Render tasks
    renderTodoItems(userTasks);
    
    // Add event listeners
    projectSelect.addEventListener('change', (e) => {
        const selectedProject = e.target.value;
        let filteredTasks = simTasks.filter(task => 
            task.assignedTo.includes(currentUser.email) && task.status !== 'completed'
        );
        if (selectedProject) {
            filteredTasks = filteredTasks.filter(t => t.project === selectedProject);
        }
        renderTodoItems(filteredTasks);
    });
    
    // Sort buttons
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const sortBy = btn.dataset.sort;
            let sortedTasks = [...userTasks];
            
            if (sortBy === 'priority') {
                sortedTasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
            } else if (sortBy === 'deadline') {
                sortedTasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
            }
            
            renderTodoItems(sortedTasks);
        });
    });
}

function renderTodoItems(tasks) {
    const todoItemsList = document.getElementById('todo-items-list');
    
    if (tasks.length === 0) {
        todoItemsList.innerHTML = '<p style="text-align: center; color: #8C8C8C;">No tasks to display</p>';
        return;
    }
    
    todoItemsList.innerHTML = tasks.map(task => {
        const deadline = new Date(task.deadline);
        const formattedDate = deadline.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        
        return `
            <div class="todo-item ${task.status === 'completed' ? 'completed' : ''}" data-task-id="${task.id}">
                <div class="todo-checkbox ${task.status === 'completed' ? 'checked' : ''}">
                    ${task.status === 'completed' ? '<i data-feather="check"></i>' : ''}
                </div>
                <div class="todo-content">
                    <p class="todo-title">${task.title}</p>
                    <div class="todo-meta">
                        <span class="todo-priority">
                            <span class="priority-dot ${task.priority}"></span>
                            ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                        </span>
                        <span class="todo-date">${formattedDate}</span>
                        <span class="todo-project">${task.project}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add checkbox click handlers
    document.querySelectorAll('.todo-checkbox').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            const taskId = parseInt(checkbox.closest('.todo-item').dataset.taskId);
            const task = simTasks.find(t => t.id === taskId);
            if (task) {
                task.status = task.status === 'completed' ? 'todo' : 'completed';
                saveTasks();
                location.reload();
            }
        });
    });
    
    feather.replace();
}

/**
 * Renders trending posts
 */
function renderTrendingPosts(currentUser) {
    const trendingPostsList = document.getElementById('trending-posts-list');
    const topPosts = [...simPosts].sort((a, b) => b.reactions.up - a.reactions.up).slice(0, 3);
    
    trendingPostsList.innerHTML = topPosts.map(post => {
        let avatarClass = 'avatar-3';
        if (post.authorEmail === 'user@makeitall.com') avatarClass = 'avatar-1';
        if (post.authorEmail === 'specialist@makeitall.com') avatarClass = 'avatar-4';
        if (post.authorEmail === 'manager@makeitall.com') avatarClass = 'avatar-2';
        
        const topicClass = post.topic.toLowerCase().split(' ')[0];
        
        return `
            <div class="trending-post">
                <div class="post-header">
                    <div class="post-avatar ${avatarClass}">${post.author.split(' ').map(n => n[0]).join('')}</div>
                    <div class="post-author-info">
                        <p class="post-author-name">${post.author}</p>
                        <span class="post-date">${post.date.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                    <span class="post-tag ${topicClass}">${post.topic}</span>
                </div>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.content.substring(0, 100)}...</p>
                <div class="post-stats">
                    <span class="post-stat"><i data-feather="thumbs-up"></i> ${post.reactions.up}</span>
                    <span class="post-stat"><i data-feather="message-circle"></i> ${post.reactions.comments}</span>
                    <span class="post-stat"><i data-feather="zap"></i> ${post.reactions.lightbulb}</span>
                </div>
            </div>
        `;
    }).join('');
    
    feather.replace();
}

/**
 * Renders notifications
 */
function renderNotifications() {
    const notificationsList = document.getElementById('notifications-list');
    
    notificationsList.innerHTML = simNotifications.map(notif => {
        return `
            <div class="notification-item ${!notif.read ? 'unread' : ''}">
                ${!notif.read ? '<span class="notification-badge"></span>' : ''}
                <div class="notification-icon ${notif.type === 'task_completed' ? 'completed' : 'post'}">
                    <i data-feather="${notif.type === 'task_completed' ? 'check-circle' : 'file-text'}"></i>
                </div>
                <div class="notification-content">
                    <p class="notification-title">${notif.title}</p>
                    <p class="notification-text">${notif.text}</p>
                    <span class="notification-time">${notif.time}</span>
                </div>
            </div>
        `;
    }).join('');
    
    // Mark all as read button
    document.querySelector('.mark-read-btn').addEventListener('click', () => {
        simNotifications.forEach(n => n.read = true);
        localStorage.setItem('simNotifications', JSON.stringify(simNotifications));
        renderNotifications();
    });
    
    feather.replace();
}

/**
 * Runs on the Progress page (progress.html)
 */
function loadProgressPage(currentUser) {
    const userTasks = simTasks.filter(task => 
        task.assignedTo.includes(currentUser.email)
    );
    
    // Calculate task progress
    const completedTasks = userTasks.filter(t => t.status === 'completed').length;
    const totalTasks = userTasks.length;
    const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    document.getElementById('task-progress-fill').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = 
        `You have completed ${progressPercent}% of your assigned tasks.`;
    
    // Render upcoming deadlines
    renderUpcomingDeadlines(userTasks);
    
    // Render workload
    renderWorkload(currentUser, userTasks);
    
    // Render urgent tasks
    renderUrgentTasks(userTasks, currentUser);
    
    // Render task distribution chart
    renderTaskDistributionChart(userTasks);
    
    feather.replace();
}

function renderUpcomingDeadlines(userTasks) {
    const deadlinesList = document.getElementById('deadlines-list');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const upcomingTasks = userTasks
        .filter(t => t.status !== 'completed')
        .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
        .slice(0, 3);
    
    deadlinesList.innerHTML = upcomingTasks.map(task => {
        const deadline = new Date(task.deadline);
        const formattedDate = deadline.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
        
        let status = 'on-track';
        let statusText = 'On track';
        
        if (deadline < today) {
            status = 'overdue';
            statusText = 'Overdue';
        } else {
            const daysUntil = Math.ceil((deadline - today) / (1000 * 60 * 60 * 24));
            if (daysUntil <= 2) {
                status = 'at-risk';
                statusText = 'At risk';
            }
        }
        
        return `
            <div class="deadline-item">
                <p class="deadline-title">${task.title}</p>
                <div class="deadline-info">
                    <span class="deadline-date">${formattedDate}</span>
                    <span class="deadline-status ${status}">${statusText}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderWorkload(currentUser, userTasks) {
    const userTaskCount = userTasks.filter(t => t.status !== 'completed').length;
    
    // Calculate team average (simplified)
    const allTasks = simTasks.filter(t => t.status !== 'completed');
    const uniqueUsers = [...new Set(allTasks.flatMap(t => t.assignedTo))];
    const teamAverage = Math.round(allTasks.length / uniqueUsers.length);
    
    const maxTasks = Math.max(userTaskCount, teamAverage, 10);
    const userPercent = (userTaskCount / maxTasks) * 100;
    const teamPercent = (teamAverage / maxTasks) * 100;
    
    document.getElementById('user-workload').style.width = userPercent + '%';
    document.getElementById('team-workload').style.width = teamPercent + '%';
    document.getElementById('user-task-count').textContent = `${userTaskCount} tasks`;
    document.getElementById('team-task-count').textContent = `${teamAverage} tasks`;
}

function renderUrgentTasks(userTasks, currentUser) {
    const urgentTasksList = document.getElementById('urgent-tasks-list');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const urgentTasks = userTasks.filter(task => {
        if (task.status === 'completed') return false;
        const deadline = new Date(task.deadline);
        return task.priority === 'urgent' || deadline < today || 
               (deadline - today) / (1000 * 60 * 60 * 24) <= 2;
    }).slice(0, 3);
    
    urgentTasksList.innerHTML = urgentTasks.map(task => {
        const deadline = new Date(task.deadline);
        const formattedDate = deadline.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' });
        
        const isOverdue = deadline < today;
        
        return `
            <div class="urgent-task">
                <p class="urgent-task-title">${task.title}</p>
                <div class="urgent-task-meta">
                    <span class="urgent-task-date">${formattedDate}</span>
                    <span class="urgent-task-status">${isOverdue ? 'Overdue' : 'At risk'}</span>
                </div>
            </div>
        `;
    }).join('');
}

function renderTaskDistributionChart(userTasks) {
    const todoCount = userTasks.filter(t => t.status === 'todo').length;
    const inProgressCount = userTasks.filter(t => t.status === 'inprogress').length;
    const reviewCount = userTasks.filter(t => t.status === 'review').length;
    const completedCount = userTasks.filter(t => t.status === 'completed').length;
    
    document.getElementById('todo-count').textContent = `To Do: ${todoCount}`;
    document.getElementById('inprogress-count').textContent = `In Progress: ${inProgressCount}`;
    document.getElementById('review-count').textContent = `Review: ${reviewCount}`;
    document.getElementById('completed-count').textContent = `Completed: ${completedCount}`;
    
    const ctx = document.getElementById('taskDistributionChart');
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['To Do', 'In Progress', 'Review', 'Completed'],
                datasets: [{
                    data: [todoCount, inProgressCount, reviewCount, completedCount],
                    backgroundColor: ['#FF8C8C', '#FFD166', '#A8DADC', '#81C5D4'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }
}

/**
 * Runs on the Create Topic page (knowledge-base-create-topic.html)
 */
function setupCreateTopicForm(currentUser) {
    const createTopicForm = document.getElementById('create-topic-form');
    
    if (!createTopicForm) return;
    
    createTopicForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const topicName = document.getElementById('topic-name').value.trim();
        const topicDescription = document.getElementById('topic-description').value.trim();
        
        if (!topicName) {
            alert('Please enter a topic name.');
            return;
        }
        
        // Check for duplicates (case-insensitive)
        if (getAllTopics().some(t => t.toLowerCase() === topicName.toLowerCase())) {
            alert('A topic with that name already exists. Please choose a different name.');
            return;
        }
        
        // Add the new topic to custom topics
        customTopics.push(topicName);
        saveCustomTopics();
        
        // Store success message to show on next page
        sessionStorage.setItem('topicCreated', `Topic "${topicName}" created successfully!`);
        
        // Redirect to knowledge base
        window.location.href = `knowledge-base.html?user=${currentUser.email}`;
    });
}

document.addEventListener('DOMContentLoaded', () => {

    // Get the "logged in" user
    const currentUser = getCurrentUser();

    // Make all links on the page keep the user "logged in"
    persistUserQueryParam(currentUser);

    // Run page-specific logic based on body ID
    const pageId = document.body.id;

    if (pageId === 'kb-index') {
        const returnTopic = sessionStorage.getItem('returnToTopic');
        const showCreatedNotification = sessionStorage.getItem('topicCreated');
        const showPostNotification = sessionStorage.getItem('postCreated');
        
        // Show any pending notifications
        if (showCreatedNotification) {
            showSuccessNotification(showCreatedNotification);
            sessionStorage.removeItem('topicCreated');
        }
        if (showPostNotification) {
            showSuccessNotification(showPostNotification);
            sessionStorage.removeItem('postCreated');
        }
        
        if (returnTopic) {
            sessionStorage.removeItem('returnToTopic'); // Clear it after use
            loadKbIndex(currentUser); // Load index to attach listeners
            showTopicView(returnTopic, currentUser); // Immediately switch to topic view
        } else {
            loadKbIndex(currentUser);
        }
    } else if (pageId === 'kb-post') {
        loadKbPost(currentUser);
    } else if (pageId === 'kb-create') {
        setupCreateForm(currentUser);
    } else if (pageId === 'settings-page') {
        loadSettingsPage(currentUser);
    } else if (pageId === 'kb-topics-all') {
        // NEW: dedicated "All Topics" page
        loadAllTopicsPage(currentUser);
    } else if (pageId === 'kb-create-topic') {
        // NEW: Create Topic form page
        setupCreateTopicForm(currentUser);
    } else if (pageId === 'home-page') {
        // NEW: Home page with to-do list
        loadHomePage(currentUser);
    } else if (pageId === 'progress-page') {
        // NEW: Progress page
        loadProgressPage(currentUser);
    }

    // Finally, activate all Feather icons
    feather.replace();
});