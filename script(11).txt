/**
 * Lumina E-Book Library
 * Vanilla JavaScript - No Frameworks
 */

// ========================================
// Book Data - Public Domain Classics
// ========================================

const books = [
    {
        id: 1,
        title: "Meditations",
        author: "Marcus Aurelius",
        category: "philosophy",
        cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        excerpt: `
            <h2>Meditations</h2>
            <p class="chapter-start">Book I</p>
            <p>Of my grandfather Verus I have learned to be gentle and meek, and to refrain from all anger and passion. From the fame and memory of him that begot me I have learned both shamefastness and manlike behaviour.</p>
            <p>Of my mother I have learned to be religious, and bountiful; and to forbear, not only to do, but to intend any evil; to content myself with a spare diet, and to fly all such excess as is incidental to great wealth.</p>
            <p>Of my great-grandfather I have learned to be used to a study and school, and not to think it a matter of any great moment, whether I do a thing or do it not; but to have a good will and sincere intention.</p>
            <h3>On the Nature of the Mind</h3>
            <p>Begin the morning by saying to thyself, I shall meet with the busy-body, the ungrateful, arrogant, deceitful, envious, unsocial. All these things happen to them by reason of their ignorance of what is good and evil.</p>
            <p>But I who have seen the nature of the good that it is beautiful, and of the bad that it is ugly, and the nature of him who does wrong, that it is akin to me, not only of the same blood or seed, but that it participates in the same intelligence and the same portion of the divinity, I can neither be injured by any of them, for no one can fix on me what is ugly, nor can I be angry with my kinsman, nor hate him.</p>
        `
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        cover: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop",
        excerpt: `
            <h2>1984</h2>
            <p class="chapter-start">Part One</p>
            <h3>Chapter 1</h3>
            <p>It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.</p>
            <p>The hallway smelt of boiled cabbage and old rag mats. At one end of it a coloured poster, too large for indoor display, had been tacked to the wall. It depicted simply an enormous face, more than a metre wide: the face of a man of about forty-five, with a heavy black moustache and ruggedly handsome features.</p>
            <p>Winston made for the stairs. It was no use trying the lift. Even at the best of times it was seldom working, and at present the electric current was cut off during daylight hours. It was part of the economy drive in preparation for Hate Week.</p>
            <p>The flat was seven flights up, and Winston, who was thirty-nine and had a varicose ulcer above his right ankle, went slowly, resting several times on the way. On each landing, opposite the lift-shaft, the poster with the enormous face gazed from the wall. It was one of those pictures which are so contrived that the eyes follow you about when you move. BIG BROTHER IS WATCHING YOU, the caption beneath it ran.</p>
        `
    },
    {
        id: 3,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        category: "classic",
        cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        excerpt: `
            <h2>Pride and Prejudice</h2>
            <p class="chapter-start">Chapter 1</p>
            <p>It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.</p>
            <p>However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered the rightful property of some one or other of their daughters.</p>
            <p>"My dear Mr. Bennet," said his lady to him one day, "have you heard that Netherfield Park is let at last?"</p>
            <p>Mr. Bennet replied that he had not.</p>
            <p>"But it is," returned she; "for Mrs. Long has just been here, and she told me all about it."</p>
            <p>Mr. Bennet made no answer.</p>
            <p>"Do you not want to know who has taken it?" cried his wife impatiently.</p>
            <p>"You want to tell me, and I have no objection to hearing it."</p>
            <p>This was invitation enough.</p>
            <p>"Why, my dear, you must know, Mrs. Long says that Netherfield is taken by a young man of large fortune from the north of England; that he came down on Monday in a chaise and four to see the place, and was so much delighted with it, that he agreed with Mr. Morris immediately; that he is to take possession before Michaelmas, and some of his servants are to be in the house by the end of next week."</p>
        `
    },
    {
        id: 4,
        title: "The Art of War",
        author: "Sun Tzu",
        category: "philosophy",
        cover: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
        excerpt: `
            <h2>The Art of War</h2>
            <p class="chapter-start">Chapter I: Laying Plans</p>
            <p>Sun Tzu said: The art of war is of vital importance to the State. It is a matter of life and death, a road either to safety or to ruin. Hence it is a subject of inquiry which can on no account be neglected.</p>
            <p>The art of war, then, is governed by five constant factors, to be taken into account in one's deliberations, when seeking to determine the conditions obtaining in the field. These are: (1) The Moral Law; (2) Heaven; (3) Earth; (4) The Commander; (5) Method and discipline.</p>
            <h3>The Moral Law</h3>
            <p>The Moral Law causes the people to be in complete accord with their ruler, so that they will follow him regardless of their lives, undismayed by any danger.</p>
            <h3>Heaven</h3>
            <p>Heaven signifies night and day, cold and heat, times and seasons.</p>
            <h3>Earth</h3>
            <p>Earth comprises distances, great and small; danger and security; open ground and narrow passes; the chances of life and death.</p>
            <h3>The Commander</h3>
            <p>The Commander stands for the virtues of wisdom, sincerely, benevolence, courage and strictness.</p>
            <h3>Method and Discipline</h3>
            <p>By Method and discipline are to be understood the marshaling of the army in its proper subdivisions, the graduations of rank among the officers, the maintenance of roads by which supplies may reach the army, and the control of military expenditure.</p>
        `
    },
    {
        id: 5,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "classic",
        cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        excerpt: `
            <h2>The Great Gatsby</h2>
            <p class="chapter-start">Chapter 1</p>
            <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.</p>
            <p>"Whenever you feel like criticizing any one," he told me, "just remember that all the people in this world haven't had the advantages that you've had."</p>
            <p>He didn't say any more, but we've always been unusually communicative in a reserved way, and I understood that he meant a great deal more than that. In consequence, I'm inclined to reserve all judgments, a habit that has opened up many curious natures to me and also made me the victim of not a few veteran bores.</p>
            <p>The abnormal mind is quick to detect and attach itself to this quality when it appears in a normal person, and so it came about that in college I was unjustly accused of being a politician, because I was privy to the secret griefs of wild, unknown men. Most of the confidences were unsought—frequently I have feigned sleep, preoccupation, or a hostile levity when I realized by some unmistakable sign that an intimate revelation was quivering on the horizon; for the intimate revelations of young men, or at least the terms in which they express them, are usually plagiaristic and marred by obvious suppressions.</p>
        `
    },
    {
        id: 6,
        title: "The Prince",
        author: "Niccolò Machiavelli",
        category: "politics",
        cover: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=400&h=600&fit=crop",
        excerpt: `
            <h2>The Prince</h2>
            <p class="chapter-start">Chapter I: How Many Kinds Of Principalities There Are</p>
            <p>All states, all powers, that have held and hold rule over men have been and are either republics or principalities. Principalities are either hereditary, in which the family has been long established; or they are new. The new are either entirely new, as was Milan to Francesco Sforza, or they are, as it were, members annexed to the hereditary state of the prince who has acquired them, as was the kingdom of Naples to that of the King of Spain.</p>
            <p>Such dominions thus acquired are either accustomed to live under a prince, or to live in freedom; and are acquired either by the arms of the prince himself, or of others, or else by fortune or by ability.</p>
            <h3>Chapter II: Concerning Hereditary Principalities</h3>
            <p>I will leave out all discussion on republics, inasmuch as in another place I have written of them at length, and will address myself only to principalities. In doing so I will keep to the order indicated above, and discuss how such principalities are to be ruled and preserved.</p>
            <p>I say at once there are fewer difficulties in holding hereditary states, and those long accustomed to the family of their prince, than new ones; for it is sufficient only not to transgress the customs of his ancestors, and to deal prudently with circumstances as they arise, for a prince of average powers to maintain himself in his state, unless he be deprived of it by some extraordinary and excessive force.</p>
        `
    }
];

// ========================================
// DOM Elements
// ========================================

const booksGrid = document.getElementById('booksGrid');
const searchInput = document.getElementById('searchInput');
const categoriesBtn = document.getElementById('categoriesBtn');
const categoriesMenu = document.getElementById('categoriesMenu');
const readerOverlay = document.getElementById('readerOverlay');
const closeReader = document.getElementById('closeReader');
const readerBookTitle = document.getElementById('readerBookTitle');
const readerContent = document.getElementById('readerContent');

// ========================================
// Render Books
// ========================================

function renderBooks(booksToRender) {
    if (booksToRender.length === 0) {
        booksGrid.innerHTML = `
            <div class="no-results">
                <p>No books found matching your search.</p>
            </div>
        `;
        return;
    }

    booksGrid.innerHTML = booksToRender.map(book => `
        <article class="book-card" data-id="${book.id}">
            <div class="book-cover-wrapper">
                <img src="${book.cover}" alt="${book.title}" class="book-cover" loading="lazy">
                <div class="book-overlay">
                    <button class="book-btn book-btn-primary" onclick="openReader(${book.id})">Read Online</button>
                    <button class="book-btn book-btn-secondary" onclick="downloadBook(${book.id})">Download ePub</button>
                </div>
            </div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
            </div>
        </article>
    `).join('');
}

// ========================================
// Search Functionality
// ========================================

function filterBooks(query) {
    const normalizedQuery = query.toLowerCase().trim();
    
    if (!normalizedQuery) {
        renderBooks(books);
        return;
    }
    
    const filtered = books.filter(book => 
        book.title.toLowerCase().includes(normalizedQuery) ||
        book.author.toLowerCase().includes(normalizedQuery) ||
        book.category.toLowerCase().includes(normalizedQuery)
    );
    
    renderBooks(filtered);
}

// ========================================
// Category Filter
// ========================================

function filterByCategory(category) {
    if (category === 'all') {
        renderBooks(books);
    } else {
        const filtered = books.filter(book => book.category === category);
        renderBooks(filtered);
    }
}

// ========================================
// Reader Overlay
// ========================================

function openReader(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    readerBookTitle.textContent = book.title;
    readerContent.innerHTML = `<div class="reader-text">${book.excerpt}</div>`;
    readerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeReaderOverlay() {
    readerOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// ========================================
// Download Function (Mock)
// ========================================

function downloadBook(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;
    
    // Create a mock download notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 50%;
        transform: translateX(-50%);
        background: var(--bg-surface);
        color: var(--text-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        border: 1px solid var(--border);
        font-family: var(--font-sans);
        font-size: 0.875rem;
        z-index: 300;
        box-shadow: var(--shadow-soft);
        animation: slideUp 0.3s ease;
    `;
    notification.textContent = `Downloading "${book.title}"...`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.textContent = `"${book.title}" downloaded successfully!`;
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }, 1500);
}

// ========================================
// Event Listeners
// ========================================

// Search input
type="text"
searchInput.addEventListener('input', (e) => {
    filterBooks(e.target.value);
});

// Categories dropdown
categoriesBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    categoriesBtn.parentElement.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    categoriesBtn.parentElement.classList.remove('active');
});

// Category selection
categoriesMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category;
        filterByCategory(category);
        categoriesBtn.parentElement.classList.remove('active');
        
        // Update button text temporarily
        const originalText = categoriesBtn.innerHTML;
        const categoryName = e.target.textContent;
        categoriesBtn.innerHTML = `${categoryName} <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"></path></svg>`;
        
        // Reset after 3 seconds if "All Books" wasn't selected
        if (category !== 'all') {
            setTimeout(() => {
                categoriesBtn.innerHTML = originalText;
            }, 3000);
        }
    });
});

// Reader close button
closeReader.addEventListener('click', closeReaderOverlay);

// Close reader on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && readerOverlay.classList.contains('active')) {
        closeReaderOverlay();
    }
});

// Close reader when clicking outside content
readerOverlay.addEventListener('click', (e) => {
    if (e.target === readerOverlay) {
        closeReaderOverlay();
    }
});

// ========================================
// Add CSS animations for notifications
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }
`;
document.head.appendChild(style);

// ========================================
// Initialize
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    renderBooks(books);
});
