document.addEventListener('DOMContentLoaded', () => {
    const aboutMeLink = document.getElementById('about-me-link');
    const portfolioLink = document.getElementById('portfolio-link');
    const blogLink = document.getElementById('blog-link');

    const aboutMeSection = document.getElementById('about-me');
    const portfolioSection = document.getElementById('portfolio');
    const blogSection = document.getElementById('blog');

    aboutMeLink.addEventListener('click', (event) => {
        event.preventDefault();
        aboutMeSection.style.display = 'block';
        portfolioSection.style.display = 'none';
        blogSection.style.display = 'none';
    });

    portfolioLink.addEventListener('click', (event) => {
        event.preventDefault();
        aboutMeSection.style.display = 'none';
        portfolioSection.style.display = 'block';
        blogSection.style.display = 'none';
    });

    blogLink.addEventListener('click', (event) => {
        event.preventDefault();
        aboutMeSection.style.display = 'none';
        portfolioSection.style.display = 'none';
        blogSection.style.display = 'block';
    });
});
