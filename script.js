document.addEventListener('DOMContentLoaded', () => {
    // Configuração dos links
    const linksData = [
        {
            title: 'Site Oficial Yalumê',
            url: 'https://yalume.com.br/',
            id: 'site-oficial'
        },
        {
            title: 'Acompanhar pedidos',
            url: 'https://yalume.com.br/central/pedidos/',
            id: 'pedidos'
        },
        {
            title: 'Parceria para criadores de conteúdo',
            url: 'https://mkt.yalume.com.br/f/15',
            id: 'criadores'
        }
    ];

    const linksList = document.getElementById('links-list');

    // Função para renderizar os links
    function renderLinks() {
        linksList.innerHTML = '';

        linksData.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = `link-item fade-in`;
            linkElement.style.animationDelay = `${(index + 1) * 0.1}s`;
            linkElement.target = '_blank';
            linkElement.textContent = link.title;
            linkElement.id = link.id;

            linksList.appendChild(linkElement);
        });
    }

    renderLinks();
});
