# Splash Transition — Efecto Clip-Path (versión anterior)

Código del efecto de transición original que usaba un clip-path con forma de barbería (tijera/clipper) expandiéndose desde el centro.

---

## Constantes

```ts
const SPLASH_WAIT_MS = 2200;
const DURATION_MS    = 1300;
const MAX_SCALE      = 45;
```

---

## Funciones del script

```ts
function cubicEaseIn(t: number): number {
  return t * t * t;
}

function buildClipperPath(s: number, cx: number, cy: number): string {
  const p = (px: number, py: number) =>
    `${cx + s * (px - 28)},${cy + s * (py - 53)}`;
  return [
    `M ${p(12,4)} Q ${p(4,4)} ${p(4,12)}`,
    `L ${p(4,80)} L ${p(2,80)} L ${p(2,92)}`,
    `L ${p(6,92)} L ${p(6,102)} L ${p(11,102)} L ${p(11,92)}`,
    `L ${p(12,92)} L ${p(12,102)} L ${p(17,102)} L ${p(17,92)}`,
    `L ${p(18,92)} L ${p(18,102)} L ${p(23,102)} L ${p(23,92)}`,
    `L ${p(24,92)} L ${p(24,102)} L ${p(29,102)} L ${p(29,92)}`,
    `L ${p(30,92)} L ${p(30,102)} L ${p(35,102)} L ${p(35,92)}`,
    `L ${p(36,92)} L ${p(36,102)} L ${p(41,102)} L ${p(41,92)}`,
    `L ${p(42,92)} L ${p(42,102)} L ${p(47,102)} L ${p(47,92)}`,
    `L ${p(54,92)} L ${p(54,80)} L ${p(52,80)} L ${p(52,12)}`,
    `Q ${p(52,4)} ${p(44,4)} Z`,
  ].join(' ');
}

function startTransition(): void {
  const bg = document.getElementById('transition-bg');
  if (bg) bg.style.opacity = '1';

  const wrapper = document.getElementById('splash-wrapper');
  if (wrapper) wrapper.style.clipPath = 'url(#splashClip)';

  const clipPathEl = document.getElementById('splash-clip-path');
  if (!clipPathEl) return;
  const clipEl = clipPathEl as Element;

  const W  = window.innerWidth;
  const H  = window.innerHeight;
  const cx = W / 2;
  const cy = H / 2;
  let startTime: number | null = null;

  const borderPathEl = document.getElementById('clipper-border-path') as SVGPathElement | null;
  if (borderPathEl) borderPathEl.setAttribute('opacity', '0.85');

  function tick(now: number): void {
    if (startTime === null) startTime = now;
    const t = Math.min((now - startTime) / DURATION_MS, 1);
    const s = cubicEaseIn(t) * MAX_SCALE;

    const clipperPath = buildClipperPath(s, cx, cy);
    clipEl.setAttribute('d', `M 0 0 H ${W} V ${H} H 0 Z ${clipperPath}`);
    borderPathEl?.setAttribute('d', clipperPath);

    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      sessionStorage.setItem('splashSeen', '1');
      removeSplash();
    }
  }

  requestAnimationFrame(tick);
}
```

---

## SVGs necesarios en el HTML (dentro de `<body>`)

```html
<!-- Clip path para la transición -->
<svg
  id="splash-clip-svg"
  style="position:fixed;width:0;height:0;overflow:hidden;pointer-events:none;"
  aria-hidden="true"
>
  <defs>
    <clipPath id="splashClip" clipPathUnits="userSpaceOnUse">
      <path
        id="splash-clip-path"
        clip-rule="evenodd"
        d="M 0 0 H 10000 V 10000 H 0 Z"
      />
    </clipPath>
  </defs>
</svg>

<!-- Borde animado del clipper -->
<svg
  id="clipper-border-svg"
  style="position:fixed;inset:0;width:100%;height:100%;z-index:62;pointer-events:none;overflow:visible;"
  aria-hidden="true"
>
  <path
    id="clipper-border-path"
    fill="none"
    stroke="#E59E48"
    stroke-width="2.5"
    stroke-linejoin="round"
    opacity="0"
  />
</svg>

<!-- Fondo de transición -->
<div id="transition-bg" aria-hidden="true"></div>
```

---

## CSS relevante

```css
#splash-wrapper {
  position: fixed;
  inset: 0;
  z-index: 61;
  background: #0D0D0D;
  will-change: clip-path;
  contain: layout style;
}

#transition-bg {
  position: fixed;
  inset: 0;
  z-index: 60;
  background: #0D0D0D;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
```
