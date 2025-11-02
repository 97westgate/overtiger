// Shared navigation component
const navHTML = `
<nav>
    <div class="nav-content">
        <a href="../../index.html" class="logo">
            <img src="../../intense.png" alt="Overtiger Logo" class="logo-image">
            <span>Overtiger</span>
        </a>
        <ul class="nav-links">
            <li><span class="game-title">Fruit Lines&nbsp;&nbsp;&nbsp;&nbsp;/</span></li>
            <li><a href="privacy-policy.html" id="nav-privacy">Privacy</a></li>
            <li><a href="support.html" id="nav-support">Support</a></li>
        </ul>
    </div>
</nav>
`;

// Insert navigation into page
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('nav-container');
    if (container) {
        container.innerHTML = navHTML;
    }
});

