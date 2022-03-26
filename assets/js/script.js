let mobile = 'ontouchstart' in document.documentElement;

console.log("   ██▓███ ▓██   ██▓ ██░ ██  ▒█████   ▒█████   ███▄ ▄███▓ ▄▄▄      ")
console.log("  ▓██░  ██▒▒██  ██▒▓██░ ██▒▒██▒  ██▒▒██▒  ██▒▓██▒▀█▀ ██▒▒████▄     ")
console.log("  ▓██░ ██▓▒ ▒██ ██░▒██▀▀██░▒██░  ██▒▒██░  ██▒▓██    ▓██░▒██  ▀█▄   ")
console.log("  ▒██▄█▓▒ ▒ ░ ▐██▓░░▓█ ░██ ▒██   ██░▒██   ██░▒██    ▒██ ░██▄▄▄▄██  ")
console.log("  ▒██▒ ░  ░ ░ ██▒▓░░▓█▒░██▓░ ████▓▒░░ ████▓▒░▒██▒   ░██▒ ▓█   ▓██▒ ")
console.log("  ▒▓▒░ ░  ░  ██▒▒▒  ▒ ░░▒░▒░ ▒░▒░▒░ ░ ▒░▒░▒░ ░ ▒░   ░  ░ ▒▒   ▓▒█░ ")
console.log("  ░▒ ░     ▓██ ░▒░  ▒ ░▒░ ░  ░ ▒ ▒░   ░ ▒ ▒░ ░  ░      ░  ▒   ▒▒ ░ ")
console.log("  ░░       ▒ ▒ ░░   ░  ░░ ░░ ░ ░ ▒  ░ ░ ░ ▒  ░      ░     ░   ▒    ")
console.log("           ░ ░      ░  ░  ░    ░ ░      ░ ░         ░         ░  ░ ")
console.log("           ░ ░                                                     ")
console.log(" ")
console.log(" ")
console.log(" ")
console.log("logged: root_pyhooma.")
console.log("password: mrcs_pyhooma")
console.log(" ")
console.log(" ")
console.log(" ")
console.log(" ")  

let switchAllowed = false;

const openSocial = type => {
  let url = 'about:blank';

  switch (type) {
    case 'discord':
      url = 'https://discord.com/users/715155658055352360';
      break;
    case 'github':
      url = 'https://github.com/Specteado';
      break;
    case 'twitter':
      url = 'https://twitter.com/Specteado1';
      break;
  }

  window.open(url);
}

const startIntroTyping = () => {
  new TypeIt('#intro-text', {
    speed: 50,
  })
    .type('Welcome.', { delay: 1200 })
    .delete(null, { delay: 1000 })
    .type(`${mobile ? 'Tap' : 'Press any key'} to enter.`)
    .go();

  setTimeout(() => {
    switchAllowed = true;
  }, 2500);
}

const typerStartTyping = typer => {
  typer.reset();

  let text = ['Node.js', 'Html', "Java"];

  text.forEach((language, index) => {
    typer.move(null);
    typer.type(language, { delay: 1000 });
    typer.pause(1000);

    typer.delete(language.length, { delay: 1000 });
  });

  typer.go();
}

const startMainTyping = () => {
  let typer = new TypeIt('#subtext', {
    speed: 50,
    afterComplete: async () => {
      typerStartTyping(typer);
    },
  });

  typerStartTyping(typer);
}

const switchScreen = () => {
  document.title = 'Specteadp | Home';

  $('.intro').fadeOut(1000, () => {
    $('.bg-image').fadeIn(1000);
    $('.main').fadeIn(1000, () => {
      startMainTyping();
    });
  });

  ['background', 'rain'].forEach(audioName => {
    let fullPath = `assets/audio/${audioName}.mp3`;

    let audioElement = document.createElement('audio');
    audioElement.setAttribute('src', fullPath);
    audioElement.style.display = 'none';

    audioElement.addEventListener('ended', () => {
      this.currentTime = 0;
      this.play();
    });

    audioElement.play();
  });
}

document.addEventListener('keydown', e => {
  if (switchAllowed) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('touchstart', e => {
  if (switchAllowed && mobile) {
    switchAllowed = false;
    switchScreen();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  startIntroTyping();
});
