# Shared Layouts

The app uses one document shell in `index.html`. The persistent shell consists of the navigation, main page, footer, committee dossier, Dalal Street simulation, registration modal, and ID/payment studio.

## Navigation

```html
<header class="nav" id="nav">
  <a class="wordmark" href="#boardroom"><span>MU</span> Masters Union <b>Nation</b></a>
  <nav><a href="#boardroom">Boardroom</a><a href="#prizes">Prizes</a><a href="#applications">Applications</a><a href="#contact">Contact</a></nav>
  <button class="sound" id="soundToggle" aria-pressed="false"><i></i><span>Sound off</span></button>
  <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">Menu</button>
</header>
```

## Footer

```html
<footer>
  <div class="wordmark"><span>MU</span> Masters Union <b>Nation</b></div>
  <p>28—29 NOVEMBER 2026 · GURUGRAM</p>
  <p>© 2026 MUN</p>
</footer>
```
