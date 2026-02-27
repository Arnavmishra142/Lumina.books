// ===== Book Data =====
const books = [
    {
        id: 1,
        title: "The Republic",
        author: "Plato",
        category: "philosophy",
        content: `
            <p>I went down yesterday to the Piraeus with Glaucon the son of Ariston, that I might offer up my prayers to the goddess; and also because I wanted to see in what manner they would celebrate the festival, which was a new thing. I was delighted with the procession of the inhabitants; but that of the Thracians was equally, if not more, beautiful.</p>
            <p>When we had finished our prayers and seen the spectacle, we turned in the direction of the city; and at that instant Polemarchus the son of Cephalus chanced to catch sight of us from a distance as we were starting on our way home, and told his servant to run and bid us wait for him. The servant took hold of me by the cloak behind, and said: Polemarchus desires you to wait.</p>
            <p>I turned round, and asked him where his master was. There he is, said the youth, coming after you, if you will only wait. Certainly we will, said Glaucon; and in a few minutes Polemarchus appeared, and with him Adeimantus, Glaucon's brother, Niceratus the son of Nicias, and several others who had been at the procession.</p>
            <p>Polemarchus said to me: I perceive, Socrates, that you and your companion are already on your way to the city. You are not far wrong, I said. But do you see, he rejoined, how many we are? Of course. And are you stronger than all these? for if not, you will have to remain where you are.</p>
            <p>May there not be the alternative, I said, that we may persuade you to let us go? But can you persuade us, if we refuse to listen to you? he said. Certainly not, replied Glaucon. Then we are not going to listen; and you may as well make up your minds to it.</p>
        `
    },
    {
        id: 2,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "classic",
        content: `
            <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.</p>
            <p>However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.</p>
            <p>"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"</p>
            <p>Mr. Bennet replied that he had not.</p>
            <p>"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."</p>
            <p>Mr. Bennet made no answer.</p>
            <p>"Do you not want to know who has taken it?" cried his wife impatiently.</p>
            <p>"You want to tell me, and I have no objection to hearing it."</p>
            <p>This was invitation enough.</p>
        `
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        content: `
            <p>It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.</p>
            <p>The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features.</p>
            <p>Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week. The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way.</p>
        `
    },
    {
        id: 4,
        title: "The Prince",
        author: "Niccolò Machiavelli",
        category: "politics",
        content: `
            <p>All states, all powers, that have held and hold rule over men have been and are either republics or principalities.</p>
            <p>Principalities are either hereditary, in which the family has been long established; or they are new. The new are either entirely new, as was Milan to Francesco Sforza, or they are, as it were, members annexed to the hereditary state of the prince who has acquired them, as was the kingdom of Naples to that of the King of Spain.</p>
            <p>Such dominions thus acquired are either accustomed to live under a prince, or to live in freedom; and are acquired either by the arms of the prince himself, or of others, or else by fortune or by ability.</p>
        `
    },
    {
        id: 5,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "philosophy",
        content: `
            <p>Of my grandfather Verus I have learned to be gentle and meek, and to refrain from all anger and passion. From the fame and memory of him that begot me I have learned both shamefastness and manlike behaviour.</p>
            <p>Of my mother I have learned to be religious, and bountiful; and to forbear, not only to do, but to intend any evil; to content myself with a spare diet, and to fly all such excess as is incidental to great wealth.</p>
            <p>Of my great-grandfather, both to frequent public schools and auditories, and to have me instructed in the arts that properly belong to the education of a gentleman; and yet not to addict myself to any particular study, or to rest in it.</p>
        `
    },
    {
        id: 6,
        title: "Moby Dick",
        author: "Herman Melville",
        category: "classic",
        content: `
            <p>Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.</p>
            <p>It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off—then, I account it high time to get to sea as soon as I can.</p>
        `
    },
    {
        id: 7,
        title: "Brave New World",
        author: "Aldous Huxley",
        category: "fiction",
        content: `
            <p>A squat grey building of only thirty-four stories. Over the main entrance the words, CENTRAL LONDON HATCHERY AND CONDITIONING CENTRE, and, in a shield, the World State's motto, COMMUNITY, IDENTITY, STABILITY.</p>
            <p>The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure, some pallid shape of academic goose-flesh, but finding only the glass and nickel and bleakly shining porcelain of a laboratory.</p>
        `
    },
    {
        id: 8,
        title: "The Art of War",
        author: "Sun Tzu",
        category: "politics",
        content: `
            <p>Sun Tzu said: The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.</p>
            <p>The art of war, then, is governed by five constant factors, to be taken into account in one's deliberations, when seeking to determine the conditions obtaining in the field. These are: (1) The Moral Law; (2) Heaven; (3) Earth; (4) The Commander; (5) Method and discipline.</p>
        `
    }
];

// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const categoriesBtn = document.getElementById('categoriesBtn');
const categoriesMenu = document.getElementById('categoriesMenu');
const searchInput = document.getElementById('searchInput');
const booksGrid = document.getElementById('booksGrid');
const noResults = document.getElementById('noResults');
const readerOverlay = document.getElementById('readerOverlay');
const closeReader = document.getElementById('closeReader');
const readerBookTitle = document.getElementById('readerBookTitle');
const readerContent = document.getElementById('readerContent');
const downloadCheckerBtn = document.getElementById('downloadCheckerBtn');
const navDownloadCount = document.getElementById('navDownloadCount');
const downloadCheckerSection = document.getElementById('downloadCheckerSection');
const closeDownloadChecker = document.getElementById('closeDownloadChecker');
const downloadCheckerContent = document.getElementById('downloadCheckerContent');
const mobileDownloadChecker = document.getElementById('mobileDownloadChecker');
const creditsBtn = document.getElementById('creditsBtn');
const creditsModal = document.getElementById('creditsModal');
const closeCredits = document.getElementById('closeCredits');
const mobileCreditsLink = document.getElementById('mobileCreditsLink');

// ===== State =====
let currentCategory = 'all';
let searchQuery = '';
let lastScrollY = window.scrollY;
let ticking = false;
let downloadedBooks = JSON.parse(localStorage.getItem('luminaDownloads')) || [];

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    setupEventListeners();
    setupScrollHandler();
    updateDownloadCount();
});

// ===== Event Listeners =====
function setupEventListeners() {
    // Mobile menu toggle
    menuToggle?.addEventListener('click', toggleMobileMenu);
    
    // Categories dropdown
    categoriesBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleDropdown();
    });
    
    // Category selection
    document.querySelectorAll('[data-category]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            selectCategory(category);
            
            // Update active states
            document.querySelectorAll('[data-category]').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`[data-category="${category}"]`).forEach(l => l.classList.add('active'));
            
            // Close menus
            closeDropdown();
            closeMobileMenu();
        });
    });
    
    // Search input
    searchInput?.addEventListener('input', debounce((e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        renderBooks();
    }, 300));
    
    // Close reader
    closeReader?.addEventListener('click', closeReaderOverlay);
    readerOverlay?.addEventListener('click', (e) => {
        if (e.target === readerOverlay) {
            closeReaderOverlay();
        }
    });
    
    // Download checker
    downloadCheckerBtn?.addEventListener('click', toggleDownloadChecker);
    closeDownloadChecker?.addEventListener('click', closeDownloadCheckerSection);
    mobileDownloadChecker?.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        toggleDownloadChecker();
    });
    
    // Credits modal
    creditsBtn?.addEventListener('click', openCredits);
    closeCredits?.addEventListener('click', closeCreditsModal);
    mobileCreditsLink?.addEventListener('click', (e) => {
        e.preventDefault();
        closeMobileMenu();
        openCredits();
    });
    creditsModal?.addEventListener('click', (e) => {
        if (e.target === creditsModal) {
            closeCreditsModal();
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeReaderOverlay();
            closeDropdown();
            closeMobileMenu();
            closeDownloadCheckerSection();
            closeCreditsModal();
        }
        
        // Focus search on /
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput?.focus();
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            closeDropdown();
        }
    });
}

// ===== Scroll Handler (Hide/Show Navbar) =====
function setupScrollHandler() {
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

function handleScroll() {
    const currentScrollY = window.scrollY;
    
    // Add/remove scrolled class for styling
    if (currentScrollY > 10) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
}

// ===== Mobile Menu =====
function toggleMobileMenu() {
    const isOpen = mobileMenu.classList.contains('active');
    
    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    mobileMenu.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Dropdown =====
function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

function closeDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown?.classList.remove('active');
}

// ===== Category Selection =====
function selectCategory(category) {
    currentCategory = category;
    renderBooks();
}

// ===== Render Books =====
function renderBooks() {
    // Filter books
    const filteredBooks = books.filter(book => {
        const matchesCategory = currentCategory === 'all' || book.category === currentCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery) || 
                             book.author.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });
    
    // Show/hide no results message
    if (filteredBooks.length === 0) {
        booksGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    // Render book cards
    booksGrid.innerHTML = filteredBooks.map(book => {
        const isDownloaded = downloadedBooks.includes(book.id);
        return `
            <article class="book-card" data-id="${book.id}">
                <div class="book-cover">
                    <span class="book-cover-placeholder">${book.title}</span>
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author}</p>
                    <span class="book-category">${book.category}</span>
                    <div class="book-actions">
                        <button class="book-btn read" onclick="openReader(${book.id})" aria-label="Read ${book.title}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            Read
                        </button>
                        <button class="book-btn download ${isDownloaded ? 'downloaded' : ''}" onclick="toggleDownload(${book.id})" aria-label="${isDownloaded ? 'Downloaded' : 'Download'} ${book.title}">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                            ${isDownloaded ? 'Saved' : 'Download'}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// ===== Reader Overlay =====
function openReader(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    readerBookTitle.textContent = book.title;
    readerContent.innerHTML = `
        <article class="reader-book">
            <h2>${book.title}</h2>
            <p class="author">by ${book.author}</p>
            <div class="content">${book.content}</div>
        </article>
    `;
    
    readerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReaderOverlay() {
    readerOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Download Functionality =====
function toggleDownload(bookId) {
    const index = downloadedBooks.indexOf(bookId);
    const book = books.find(b => b.id === bookId);
    
    if (index === -1) {
        // Add to downloads
        downloadedBooks.push(bookId);
        showNotification(`"${book.title}" added to your downloads`);
    } else {
        // Remove from downloads
        downloadedBooks.splice(index, 1);
        showNotification(`"${book.title}" removed from your downloads`);
    }
    
    // Save to localStorage
    localStorage.setItem('luminaDownloads', JSON.stringify(downloadedBooks));
    
    // Update UI
    updateDownloadCount();
    renderBooks();
    renderDownloadChecker();
}

function updateDownloadCount() {
    const count = downloadedBooks.length;
    navDownloadCount.textContent = count;
    navDownloadCount.style.display = count > 0 ? 'flex' : 'none';
}

// ===== Download Checker =====
function toggleDownloadChecker() {
    const isOpen = downloadCheckerSection.classList.contains('active');
    
    if (isOpen) {
        closeDownloadCheckerSection();
    } else {
        openDownloadChecker();
    }
}

function openDownloadChecker() {
    renderDownloadChecker();
    downloadCheckerSection.classList.add('active');
    downloadCheckerSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeDownloadCheckerSection() {
    downloadCheckerSection.classList.remove('active');
}

function renderDownloadChecker() {
    if (downloadedBooks.length === 0) {
        downloadCheckerContent.innerHTML = `
            <p class="no-downloads">No downloads yet. Start exploring and download your favorite books!</p>
        `;
        return;
    }
    
    const downloadedBooksData = books.filter(book => downloadedBooks.includes(book.id));
    
    downloadCheckerContent.innerHTML = downloadedBooksData.map(book => `
        <div class="download-item">
            <div class="download-item-info">
                <span class="download-item-title">${book.title}</span>
                <span class="download-item-author">${book.author}</span>
            </div>
            <div class="download-item-actions">
                <button class="download-item-btn read" onclick="openReader(${book.id})" aria-label="Read ${book.title}">
                    Read
                </button>
                <button class="download-item-btn remove" onclick="toggleDownload(${book.id})" aria-label="Remove ${book.title}">
                    Remove
                </button>
            </div>
        </div>
    `).join('');
}

// ===== Credits Modal =====
function openCredits() {
    creditsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCreditsModal() {
    creditsModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== Notification =====
function showNotification(message) {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        background: var(--color-card-bg);
        color: var(--color-text);
        padding: 1rem 2rem;
        border-radius: 100px;
        border: 1px solid var(--color-border);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        z-index: 5000;
        font-size: 0.9rem;
        font-weight: 500;
        opacity: 0;
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===== Utility Functions =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ===== Smooth Scroll Polyfill for older browsers =====
if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
async function searchBooks() {
    const query = document.getElementById("searchInput").value;

    if (!query) return;

    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );

    const data = await response.json();
    const container = document.getElementById("booksContainer");

    container.innerHTML = "";

    if (!data.items) {
        container.innerHTML = "<p>No books found.</p>";
        return;
    }

    data.items.forEach(book => {
        const title = book.volumeInfo.title || "No Title";
        const authors = book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : "Unknown Author";
        const thumbnail = book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : "";
        const previewLink = book.volumeInfo.previewLink || "#";

        const bookCard = `
            <div class="book-card">
                <img src="${thumbnail}" alt="${title}" />
                <h3>${title}</h3>
                <p>${authors}</p>
                <a href="${previewLink}" target="_blank">Read Preview</a>
            </div>
        `;

        container.innerHTML += bookCard;
    });
}
