// Enhanced Mock Data with Metadata
const yachtData = {
    "yacht1": {
        name: "80ft Luxury Sailing Catamaran",
        length: "80 ft",
        type: "Sailing Catamaran",
        status: "Completed",
        thumbnail: 'resources/yacht1-1.png',
        images: [
            { url: 'resources/yacht1-1.png', title: 'Original Design', type: 'image' },
            { url: 'resources/yacht1-2.png', title: 'Blue Sails Variant', type: 'image' },
            { url: 'resources/yacht1-3.png', title: 'Power Catamaran', type: 'image' },
            { url: 'resources/yacht1.gif', title: 'Animation', type: 'animation' }
        ],
        modelUrl: 'resources/yacht1.glb',
        history: [
            { type: 'user', text: "I want an 80-foot luxury sailing catamaran, sleek wave-piercing bows, carbon-fiber mast, white composite hulls, teak walk-around decks, minimalist glass saloon" },
            { type: 'ai', image: 'resources/yacht1-1.png' },
            { type: 'user', text: "change sails to vibrant electric-blue gradient with subtle geometric pattern" },
            { type: 'ai', image: 'resources/yacht1-2.png' },
            { type: 'user', text: "remove sails to convert into a power catamaran, lengthen central bridge deck and hulls visibly for a faster, sportier profile" },
            { type: 'ai', image: 'resources/yacht1-3.png' },
            { type: 'user', text: "Looks great show me 3D" },
            { type: 'ai', is3D: true, modelUrl: 'resources/yacht1.glb' },
        ]
    },
    "yacht2": {
        name: "60ft Modern Sport Yacht",
        length: "60 ft",
        type: "Sport Yacht",
        status: "In Progress",
        thumbnail: 'resources/yacht2-1.png',
        images: [
            { url: 'resources/yacht2-1.png', title: 'Pearl White Hull', type: 'image' },
            { url: 'resources/yacht2-2.png', title: 'Royal Blue Variant', type: 'image' },
            { url: 'resources/yacht2-3.png', title: 'Extended 70ft Design', type: 'image' },
            { url: 'resources/yacht2.gif', title: 'Animation', type: 'animation' }
        ],
        modelUrl: 'resources/yacht2.glb',
        history: [
            { type: 'user', text: "I want a luxury yacht with three-quarter bow view of a 60-foot modern sport yacht, sharp angular lines, low profile, metallic pearl-white hull, tinted wraparound windshield, teak foredeck detailing" },
            { type: 'ai', image: 'resources/yacht2-1.png' },
            { type: 'user', text: "change hull color to deep royal blue with silver accent stripe" },
            { type: 'ai', image: 'resources/yacht2-2.png' },
            { type: 'user', text: "extend hull to 70 ft, make it visibly longer and slimmer, add sleek integrated solar-panel roof over cockpit" },
            { type: 'ai', image: 'resources/yacht2-3.png' },
            { type: 'user', text: "show 3D" },
            { type: 'ai', is3D: true, modelUrl: 'resources/yacht2.glb' },
        ]
    },
    "yacht3": {
        name: "75ft Expedition Explorer",
        length: "75 ft",
        type: "Explorer Yacht",
        status: "Completed",
        thumbnail: 'resources/yacht3-1.png',
        images: [
            { url: 'resources/yacht3-1.png', title: 'Light Gray Explorer', type: 'image' },
            { url: 'resources/yacht3-2.png', title: 'Navy Blue Variant', type: 'image' },
            { url: 'resources/yacht3-3.png', title: 'Infinity Pool Design', type: 'image' },
            { url: 'resources/yacht3.gif', title: 'Animation', type: 'animation' }
        ],
        modelUrl: 'resources/yacht3.glb',
        history: [
            { type: 'user', text: "Design me a 75-foot expedition explorer yacht, robust plumb bow, ice-class hull, matte light-gray paint, aft helipad with folded drone, large rectangular windows, modern radar mast" },
            { type: 'ai', image: 'resources/yacht3-1.png' },
            { type: 'user', text: "repaint hull deep navy blue with a thin safety-orange waterline stripe" },
            { type: 'ai', image: 'resources/yacht3-2.png' },
            { type: 'user', text: "add an infinity pool on the aft deck, extend superstructure windows into a seamless panoramic glass band" },
            { type: 'ai', image: 'resources/yacht3-3.png' },
            { type: 'user', text: "Good, show me 3D" },
            { type: 'ai', is3D: true, modelUrl: 'resources/yacht3.glb' },
        ]
    },
    "yacht4": {
        name: "50ft Retro Wooden Yacht",
        length: "50 ft",
        type: "Classic Yacht",
        status: "Concept",
        thumbnail: 'resources/yacht4-1.png',
        images: [
            { url: 'resources/yacht4-1.png', title: 'Mahogany Classic', type: 'image' },
            { url: 'resources/yacht4-2.png', title: 'Extended Flybridge', type: 'image' },
            { url: 'resources/yacht4-3.png', title: 'Turquoise Finish', type: 'image' },
            { url: 'resources/yacht4.gif', title: 'Animation', type: 'animation' }
        ],
        modelUrl: 'resources/yacht4.glb',
        history: [
            { type: 'user', text: "Give me a 50-foot retro-inspired wooden yacht, curved mahogany topsides, white topside stripe, chrome portholes, classic tumblehome stern, art-deco cabin roof" },
            { type: 'ai', image: 'resources/yacht4-1.png' },
            { type: 'user', text: "add a streamlined flybridge, extend the bow by 8 feet for a sleeker silhouette, incorporate subtle winglets near stern" },
            { type: 'ai', image: 'resources/yacht4-2.png' },
            { type: 'user', text: "change hull finish to metallic turquoise with polished wood accent trim" },
            { type: 'ai', image: 'resources/yacht4-3.png' },
            { type: 'user', text: "Perfect, now make it 3D" },
            { type: 'ai', is3D: true, modelUrl: 'resources/yacht4.glb' },
        ]
    }
};

// DOM Elements
const loginPage = document.getElementById('login-page');
const mainApp = document.getElementById('main-app');
const loginForm = document.getElementById('login-form');
const loginError = document.getElementById('login-error');
const logoutButton = document.getElementById('logout-button');
const projectList = document.getElementById('project-list');
const placeholderView = document.getElementById('placeholder-view');
const projectDetailView = document.getElementById('project-detail-view');
const chatHistory = document.getElementById('chat-history');
const designImage = document.getElementById('design-image');
const viewer2D = document.getElementById('viewer-2d');
const viewer3D = document.getElementById('viewer-3d');
const viewerGallery = document.getElementById('viewer-gallery');
const viewerAnimation = document.getElementById('viewer-animation');
const viewerLoader = document.getElementById('viewer-loader');
const galleryMainImg = document.getElementById('gallery-main-img');
const galleryThumbnails = document.getElementById('gallery-thumbnails');
const galleryLoading = document.getElementById('gallery-loading');
const galleryError = document.getElementById('gallery-error');
const animationImage = document.getElementById('animation-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxInfo = document.getElementById('lightbox-info');
const chatPanel = document.getElementById('chat-panel');
const chatResizer = document.getElementById('chat-resizer');
const currentProjectSpan = document.getElementById('current-project');
const resourcePanel = document.getElementById('resource-panel');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebarClose = document.getElementById('sidebar-close');
const brightnessControl = document.getElementById('brightness-control');
const brightnessSlider = document.getElementById('brightness-slider');
const brightnessValue = document.getElementById('brightness-value');

let threeScene, threeCamera, threeRenderer, threeControls;
let currentModel = null;
let animationId = null;
let sceneLights = {
    ambient: null,
    directional: null,
    fill: null,
    rim: null
};

let currentProject = null;
let currentViewMode = 'gallery';
let currentImageIndex = 0;
let lightboxIndex = 0;

// --- MOBILE SIDEBAR FUNCTIONALITY ---
function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
}

// Mobile sidebar event listeners
if (sidebarToggle) {
    sidebarToggle.addEventListener('click', toggleSidebar);
}

if (sidebarClose) {
    sidebarClose.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// --- RESOURCE PANEL FUNCTIONALITY ---
function toggleResourcePanel() {
    resourcePanel.classList.toggle('open');
    // Update button state
    if (resourcePanel.classList.contains('open')) {
        infoToggle.classList.add('active');
    } else {
        infoToggle.classList.remove('active');
    }
}

function closeResourcePanel() {
    resourcePanel.classList.remove('open');
    // Update button state
    infoToggle.classList.remove('active');
}

const infoToggle = document.getElementById('info-toggle');
const resourcePanelClose = document.getElementById('resource-panel-close');

if (infoToggle) {
    infoToggle.addEventListener('click', toggleResourcePanel);
}

if (resourcePanelClose) {
    resourcePanelClose.addEventListener('click', closeResourcePanel);
}

// --- KEYBOARD SHORTCUTS ---
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        closeResourcePanel();
        closeSidebar();
    }
    
    // View mode shortcuts (only when project is loaded)
    if (currentProject && !e.ctrlKey && !e.altKey && !e.metaKey) {
        if (e.key === '1') {
            e.preventDefault();
            switchViewMode('gallery');
        } else if (e.key === '2') {
            e.preventDefault();
            switchViewMode('3d');
        } else if (e.key === '3') {
            e.preventDefault();
            switchViewMode('animation');
        } else if (e.key === 'f' || e.key === 'F') {
            e.preventDefault();
            toggleFullscreen();
        } else if (e.key === 'i' || e.key === 'I') {
            e.preventDefault();
            toggleResourcePanel();
        }
    }
});

// --- FULLSCREEN FUNCTIONALITY ---
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

const fullscreenBtn = document.getElementById('fullscreen-btn');
const fullscreenViewer = document.getElementById('fullscreen-viewer');

if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', toggleFullscreen);
}

if (fullscreenViewer) {
    fullscreenViewer.addEventListener('click', toggleFullscreen);
}

// --- DOWNLOAD FUNCTIONALITY ---
window.downloadFile = function(format) {
    if (!currentProject) return;
    
    const projectId = Object.keys(yachtData).find(key => yachtData[key] === currentProject);
    if (!projectId) return;
    
    const filename = `${projectId}.${format}`;
    const url = `resources/${filename}`;
    
    // Create temporary download link
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// --- SHARE FUNCTIONALITY ---
const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share && currentProject) {
            navigator.share({
                title: `Check out this yacht design: ${currentProject.name}`,
                text: `${currentProject.name} - ${currentProject.type}`,
                url: window.location.href
            });
        } else {
            // Fallback: copy URL to clipboard
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Link copied to clipboard!');
            });
        }
    });
}

// --- HELP FUNCTIONALITY ---
const helpBtn = document.getElementById('help-btn');
if (helpBtn) {
    helpBtn.addEventListener('click', () => {
        alert(`Keyboard Shortcuts:

1, 2, 3 - Switch between Gallery, 3D, and Animation views
F - Toggle fullscreen
I - Toggle info panel
ESC - Close modals/panels

Mouse Controls (3D View):
- Left click + drag: Rotate
- Scroll wheel: Zoom in/out
- Click on images: Open lightbox`);
    });
}

// --- UPDATE RESOURCE PANEL INFO ---
function updateResourcePanel(project) {
    if (!project) return;
    
    // Update specifications
    const specGrid = document.querySelector('.spec-grid');
    if (specGrid) {
        specGrid.innerHTML = `
            <div class="spec-item">
                <div class="spec-label">Length</div>
                <div class="spec-value">${project.length || '--'}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">Type</div>
                <div class="spec-value">${project.type || '--'}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">Status</div>
                <div class="spec-value">${project.status || '--'}</div>
            </div>
            <div class="spec-item">
                <div class="spec-label">Images</div>
                <div class="spec-value">${project.images ? project.images.length : 0}</div>
            </div>
        `;
    }

    // Update file list
    const fileList = document.querySelector('.file-list');
    if (fileList && project) {
        const projectId = Object.keys(yachtData).find(key => yachtData[key] === project);
        fileList.innerHTML = `
            <div class="file-item">
                <div class="file-info">
                    <div class="file-name">${projectId}.glb</div>
                    <div class="file-size">3D Model</div>
                </div>
                <button class="download-btn" onclick="downloadFile('glb')">Download</button>
            </div>
            <div class="file-item">
                <div class="file-info">
                    <div class="file-name">${projectId}.stl</div>
                    <div class="file-size">STL Format</div>
                </div>
                <button class="download-btn" onclick="downloadFile('stl')">Download</button>
            </div>
            <div class="file-item">
                <div class="file-info">
                    <div class="file-name">${projectId}.usdz</div>
                    <div class="file-size">AR Model</div>
                </div>
                <button class="download-btn" onclick="downloadFile('usdz')">Download</button>
            </div>
        `;
    }
}

// --- AUTHENTICATION ---
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '3YY7wB7RY6uxgNx!') {
        loginPage.classList.add('hidden');
        mainApp.classList.remove('hidden');
        populateProjectList();
    } else {
        loginError.textContent = 'Invalid credentials. Use admin/admin';
    }
});

logoutButton.addEventListener('click', () => {
    mainApp.classList.add('hidden');
    loginPage.classList.remove('hidden');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    loginError.textContent = '';
    showPlaceholderView();
});

// --- CHAT RESIZER LOGIC ---
let isResizing = false;
chatResizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    e.preventDefault();
    document.body.style.cursor = 'ns-resize';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', () => {
        isResizing = false;
        document.body.style.cursor = '';
        document.removeEventListener('mousemove', handleMouseMove);
    });
});

function handleMouseMove(e) {
    if (!isResizing) return;
    
    const container = document.getElementById('project-detail-view');
    const viewerContainer = document.getElementById('viewer-container');
    const rect = container.getBoundingClientRect();
    const innerContainer = container.querySelector('.flex-grow.flex.flex-col');
    const innerRect = innerContainer.getBoundingClientRect();
    
    // Calculate the new heights
    const mouseY = e.clientY - innerRect.top;
    const totalHeight = innerRect.height;
    const minViewerHeight = 300;
    const minChatHeight = 200;
    
    // Calculate viewer height (distance from top to mouse)
    let viewerHeight = mouseY - 10; // 10px for the resizer
    let chatHeight = totalHeight - mouseY - 10;
    
    // Apply constraints
    if (viewerHeight < minViewerHeight) {
        viewerHeight = minViewerHeight;
        chatHeight = totalHeight - minViewerHeight - 10;
    } else if (chatHeight < minChatHeight) {
        chatHeight = minChatHeight;
        viewerHeight = totalHeight - minChatHeight - 10;
    }
    
    // Apply the new heights
    viewerContainer.style.flex = `0 0 ${viewerHeight}px`;
    chatPanel.style.height = `${chatHeight}px`;
}

// --- BRIGHTNESS CONTROL ---
brightnessSlider.addEventListener('input', (e) => {
    const brightness = parseFloat(e.target.value);
    updateSceneBrightness(brightness);
    brightnessValue.textContent = Math.round(brightness * 100) + '%';
});

function updateSceneBrightness(multiplier) {
    if (sceneLights.ambient) sceneLights.ambient.intensity = 0.8 * multiplier;
    if (sceneLights.directional) sceneLights.directional.intensity = 1.2 * multiplier;
    if (sceneLights.fill) sceneLights.fill.intensity = 0.6 * multiplier;
    if (sceneLights.rim) sceneLights.rim.intensity = 0.4 * multiplier;
}

// --- GALLERY FUNCTIONALITY ---
function switchViewMode(mode) {
    if (!currentProject) return;
    
    // Update button states
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        }
    });
    
    currentViewMode = mode;
    
    // Hide all viewers
    viewer2D.classList.add('hidden');
    viewer3D.classList.add('hidden');
    viewerGallery.classList.add('hidden');
    viewerAnimation.classList.add('hidden');
    viewerLoader.classList.add('hidden');
    
    // Show/hide brightness control based on mode
    if (mode === '3d') {
        brightnessControl.classList.add('flex');
    } else {
        brightnessControl.classList.remove('flex');
    }
    
    // Show appropriate viewer
    switch (mode) {
        case 'gallery':
            viewerGallery.classList.remove('hidden');
            populateGallery(currentProject);
            break;
        case '3d':
            show3DView(currentProject.modelUrl);
            break;
        case 'animation':
            showAnimationView(currentProject);
            break;
    }
}

function populateGallery(project) {
    if (!project.images || project.images.length === 0) return;
    
    const staticImages = project.images.filter(img => img.type === 'image');
    if (staticImages.length === 0) return;
    
    // Set the first image as main
    currentImageIndex = 0;
    loadGalleryMainImage(staticImages[0].url, staticImages[0].title);
    
    // Populate thumbnails
    galleryThumbnails.innerHTML = '';
    staticImages.forEach((image, index) => {
        const thumbnail = createThumbnail(image, index, false);
        galleryThumbnails.appendChild(thumbnail);
    });
    
    // Add animation thumbnail if available
    const animationImage = project.images.find(img => img.type === 'animation');
    if (animationImage) {
        const animThumbnail = createThumbnail(animationImage, staticImages.length, true);
        galleryThumbnails.appendChild(animThumbnail);
    }
}

function createThumbnail(image, index, isAnimation) {
    const thumbnail = document.createElement('div');
    thumbnail.className = `gallery-thumbnail ${isAnimation ? 'animation' : ''}`;
    thumbnail.dataset.index = index;
    
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.title;
    img.onerror = () => {
        thumbnail.innerHTML = '<div class="thumbnail-overlay">Error</div>';
    };
    
    const overlay = document.createElement('div');
    overlay.className = 'thumbnail-overlay';
    overlay.textContent = image.title;
    
    thumbnail.appendChild(img);
    thumbnail.appendChild(overlay);
    
    if (index === currentImageIndex && !isAnimation) {
        thumbnail.classList.add('active');
    }
    
    thumbnail.addEventListener('click', () => {
        if (isAnimation) {
            switchViewMode('animation');
        } else {
            selectGalleryImage(index, image);
        }
    });
    
    return thumbnail;
}

function selectGalleryImage(index, image) {
    currentImageIndex = index;
    loadGalleryMainImage(image.url, image.title);
    
    // Update thumbnail states
    document.querySelectorAll('.gallery-thumbnail:not(.animation)').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function loadGalleryMainImage(url, title) {
    galleryLoading.classList.remove('hidden');
    galleryError.classList.add('hidden');
    galleryMainImg.classList.add('hidden');
    
    const img = new Image();
    img.onload = () => {
        galleryMainImg.src = url;
        galleryMainImg.alt = title;
        galleryMainImg.classList.remove('hidden');
        galleryLoading.classList.add('hidden');
    };
    img.onerror = () => {
        galleryLoading.classList.add('hidden');
        galleryError.classList.remove('hidden');
    };
    img.src = url;
    
    // Add click handler for lightbox
    galleryMainImg.onclick = () => openLightbox(url, title);
}

function showAnimationView(project) {
    const animationImg = project.images.find(img => img.type === 'animation');
    if (animationImg) {
        viewerAnimation.classList.remove('hidden');
        animationImage.src = animationImg.url;
        animationImage.alt = animationImg.title;
        animationImage.onclick = () => openLightbox(animationImg.url, animationImg.title);
    }
}

// --- LIGHTBOX FUNCTIONALITY ---
function openLightbox(imageSrc, title) {
    lightboxImage.src = imageSrc;
    lightboxImage.alt = title;
    lightboxInfo.textContent = title;
    lightbox.classList.add('active');
    
    // Find current image index for navigation
    if (currentProject && currentProject.images) {
        lightboxIndex = currentProject.images.findIndex(img => img.url === imageSrc);
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    if (!currentProject || !currentProject.images) return;
    
    const images = currentProject.images.filter(img => img.type !== 'animation');
    lightboxIndex = (lightboxIndex + direction + images.length) % images.length;
    
    const nextImage = images[lightboxIndex];
    if (nextImage) {
        lightboxImage.src = nextImage.url;
        lightboxImage.alt = nextImage.title;
        lightboxInfo.textContent = nextImage.title;
    }
}

// Lightbox event listeners
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            navigateLightbox(-1);
        } else if (e.key === 'ArrowRight') {
            navigateLightbox(1);
        }
    }
});

// --- PROJECT NAVIGATION ---
function populateProjectList() {
    Object.keys(yachtData).forEach(key => {
        const project = yachtData[key];
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item focus-ring';
        projectItem.tabIndex = 0;
        
        const badgeClass = project.status === 'Completed' ? '' : 
                          project.status === 'In Progress' ? 'in-progress' : 'concept';
        
        projectItem.innerHTML = `
            <div class="project-thumbnail">
                <img src="${project.thumbnail}" alt="${project.name}" loading="lazy">
            </div>
            <div class="project-info">
                <div class="project-name">${project.name}</div>
                <div class="project-meta">
                    <span class="project-badge ${badgeClass}">${project.status}</span>
                    <span>${project.length}</span>
                </div>
            </div>
        `;
        
        projectItem.addEventListener('click', () => {
            // Remove active class from all items
            document.querySelectorAll('.project-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked item
            projectItem.classList.add('active');
            
            loadProject(key);
        });
        
        projectItem.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                projectItem.click();
            }
        });
        
        projectList.appendChild(projectItem);
    });
}

function loadProject(projectId) {
    placeholderView.classList.add('hidden');
    projectDetailView.classList.remove('hidden');
    
    currentProject = yachtData[projectId];
    
    // Update breadcrumbs
    if (currentProjectSpan) {
        currentProjectSpan.textContent = currentProject.name;
    }
    
    // Update resource panel with project info
    updateResourcePanel(currentProject);
    
    // Open resource panel by default
    resourcePanel.classList.add('open');
    infoToggle.classList.add('active');
    
    // Close mobile sidebar if open
    closeSidebar();
    
    chatHistory.innerHTML = '';
    let lastImage = '';
    let is3DReady = false;
    let modelUrl = '';

    currentProject.history.forEach(item => {
        const bubble = document.createElement('div');
        bubble.className = 'p-3 rounded-lg max-w-md animate-fade-in';

        if (item.type === 'user') {
            bubble.classList.add('chat-bubble-user', 'self-end');
            bubble.textContent = item.text;
        } else if (item.type === 'ai') {
            bubble.classList.add('chat-bubble-ai', 'self-start');
            if (item.image) {
                const img = document.createElement('img');
                img.src = item.image;
                img.alt = "AI Generated Yacht Design";
                img.className = 'rounded-lg w-full cursor-pointer hover:scale-105 transition-transform duration-200';
                img.onclick = () => openLightbox(item.image, "AI Generated Yacht Design");
                bubble.appendChild(img);
                lastImage = item.image;
            }
            if (item.is3D) {
                const p = document.createElement('p');
                p.textContent = "Here is the 3D model you requested.";
                bubble.appendChild(p);
                is3DReady = true;
                modelUrl = item.modelUrl;
            }
        }
        chatHistory.appendChild(bubble);
    });
    
    setupViewModeHandlers();
    
    // Start with gallery view by default
    switchViewMode('gallery');
}

function setupViewModeHandlers() {
    document.querySelectorAll('.view-mode-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            switchViewMode(btn.dataset.mode);
        });
    });
}

function updateDesignView(imageUrl) {
    // Legacy function - now redirects to lightbox
    openLightbox(imageUrl, "Yacht Design");
}

function show3DView(modelUrl) {
    // Hide all other viewers
    viewer2D.classList.add('hidden');
    viewerGallery.classList.add('hidden');
    viewerAnimation.classList.add('hidden');
    viewer3D.classList.remove('hidden');
    viewerLoader.classList.remove('hidden');
    
    // Debounce to allow loader to show
    setTimeout(() => {
        init3DViewer(modelUrl);
    }, 100);
}

function showPlaceholderView() {
    placeholderView.classList.remove('hidden');
    projectDetailView.classList.add('hidden');
    currentProject = null;
}

// --- 3D VIEWER FUNCTIONALITY ---
function init3DViewer(modelUrl) {
    if (!modelUrl) {
        console.error('No model URL provided');
        viewerLoader.classList.add('hidden');
        return;
    }

    // Clear existing scene
    if (threeRenderer) {
        viewer3D.removeChild(threeRenderer.domElement);
    }

    // Scene setup
    threeScene = new THREE.Scene();
    threeScene.background = new THREE.Color(0x1f2937);

    // Camera setup
    threeCamera = new THREE.PerspectiveCamera(75, viewer3D.offsetWidth / viewer3D.offsetHeight, 0.1, 1000);
    threeCamera.position.set(5, 3, 5);

    // Renderer setup
    threeRenderer = new THREE.WebGLRenderer({ antialias: true });
    threeRenderer.setSize(viewer3D.offsetWidth, viewer3D.offsetHeight);
    threeRenderer.shadowMap.enabled = true;
    threeRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    threeRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    threeRenderer.toneMappingExposure = 1.2;
    threeRenderer.outputEncoding = THREE.sRGBEncoding;
    viewer3D.appendChild(threeRenderer.domElement);

    // Controls
    threeControls = new THREE.OrbitControls(threeCamera, threeRenderer.domElement);
    threeControls.enableDamping = true;
    threeControls.dampingFactor = 0.05;
    threeControls.minDistance = 2;
    threeControls.maxDistance = 50;

    // Enhanced Lighting setup
    sceneLights.ambient = new THREE.AmbientLight(0xffffff, 0.8);
    threeScene.add(sceneLights.ambient);

    sceneLights.directional = new THREE.DirectionalLight(0xffffff, 1.2);
    sceneLights.directional.position.set(10, 10, 5);
    sceneLights.directional.castShadow = true;
    sceneLights.directional.shadow.mapSize.width = 2048;
    sceneLights.directional.shadow.mapSize.height = 2048;
    threeScene.add(sceneLights.directional);

    // Additional fill lights for better illumination
    sceneLights.fill = new THREE.DirectionalLight(0xffffff, 0.6);
    sceneLights.fill.position.set(-10, 5, -5);
    threeScene.add(sceneLights.fill);

    sceneLights.rim = new THREE.DirectionalLight(0xffffff, 0.4);
    sceneLights.rim.position.set(0, -10, 10);
    threeScene.add(sceneLights.rim);

    // Load model
    const loader = new THREE.GLTFLoader();
    loader.load(
        modelUrl,
        (gltf) => {
            if (currentModel) {
                threeScene.remove(currentModel);
            }

            currentModel = gltf.scene;
            currentModel.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                    
                    // Enhance materials
                    if (child.material) {
                        child.material.envMapIntensity = 1;
                        if (child.material.metalness !== undefined) {
                            child.material.metalness = Math.min(child.material.metalness * 1.2, 1);
                        }
                    }
                }
            });

            // Center and scale the model
            const box = new THREE.Box3().setFromObject(currentModel);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            const maxSize = Math.max(size.x, size.y, size.z);
            const scale = 3 / maxSize;
            
            currentModel.scale.setScalar(scale);
            currentModel.position.sub(center.multiplyScalar(scale));

            threeScene.add(currentModel);
            viewerLoader.classList.add('hidden');

            // Start animation loop
            animate();
        },
        (progress) => {
            console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
        },
        (error) => {
            console.error('Error loading model:', error);
            viewerLoader.classList.add('hidden');
            
            // Show error message
            const errorDiv = document.createElement('div');
            errorDiv.className = 'absolute inset-0 flex items-center justify-center text-red-400';
            errorDiv.innerHTML = `
                <div class="text-center">
                    <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                    </svg>
                    <p>Failed to load 3D model</p>
                    <p class="text-sm mt-2">Please check if the file exists</p>
                </div>
            `;
            viewer3D.appendChild(errorDiv);
        }
    );
}

function animate() {
    if (!threeRenderer || !threeScene || !threeCamera) return;
    
    requestAnimationFrame(animate);
    
    if (threeControls) {
        threeControls.update();
    }
    
    threeRenderer.render(threeScene, threeCamera);
}

// Handle window resize
window.addEventListener('resize', () => {
    if (threeRenderer && threeCamera && viewer3D.offsetWidth > 0) {
        threeCamera.aspect = viewer3D.offsetWidth / viewer3D.offsetHeight;
        threeCamera.updateProjectionMatrix();
        threeRenderer.setSize(viewer3D.offsetWidth, viewer3D.offsetHeight);
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Focus username field on load
    document.getElementById('username').focus();
});
