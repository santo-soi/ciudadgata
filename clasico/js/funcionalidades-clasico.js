const video = document.querySelector("video");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play(); // Reproducir el video
      } else {
        video.pause(); // Pausar el video
      }
    });
  });

  observer.observe(video);
