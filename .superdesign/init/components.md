# Shared UI Components

The project is buildless vanilla HTML/CSS/JavaScript and has no separate component directory. Reusable primitives are authored in `index.html` and `assets/css/style.css`.

## Primary and secondary buttons

Source: `assets/css/style.css`

```css
.primary,.secondary{display:flex;justify-content:space-between;align-items:center;width:100%;border:0;border-radius:2px;padding:16px 20px;background:var(--lime);color:#0a130f;font-weight:700;cursor:pointer;transition:.25s}
.primary:hover{filter:brightness(1.08);transform:translateY(-2px)}
.secondary{border:1px solid var(--line);background:transparent;color:var(--ink);padding:10px;cursor:pointer}
```

## Modal shell

Source: `assets/css/style.css`

```css
.modal{width:min(720px,calc(100% - 30px));max-height:90vh;overflow:auto;border:1px solid var(--line);border-radius:5px;padding:3rem;background:#0b1714;color:var(--ink);box-shadow:0 30px 100px #000}
.modal::backdrop{background:#020604d9;backdrop-filter:blur(8px)}
.close{position:absolute;right:25px;top:25px;z-index:3;border:1px solid var(--line);border-radius:30px;background:#07100e88;color:var(--ink);padding:10px 15px;font:500 .58rem var(--mono);cursor:pointer}
```
