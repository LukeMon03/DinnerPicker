function loadStyles(): void {
  const links = [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity: "sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr",
      crossorigin: "anonymous"
    },
    {
      href: "../favicon.ico",
      rel: "icon",
      type: "image/x-icon"
    },
    {
      href: "./index.css",
      rel: "stylesheet"
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap",
      rel: "stylesheet"
    }
  ];

  links.forEach(attrs => {
    const link = document.createElement('link');
    Object.entries(attrs).forEach(([key, value]) => {
      link.setAttribute(key, value);
    });
    document.head.appendChild(link);
  });
}
loadStyles();


function enableBackgroundMusic(): void {
  document.body.addEventListener(
    'click',
    () => {
      const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
      if (audio?.muted) {
        audio.muted = false;
        audio.play();
      }
    },
    { once: true }
  );
}

fetch('\\componenets\\main-menu\\main-menu.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('currentPage')!.innerHTML = html;
  });

