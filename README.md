# Strudel Code Collection

My collection of [Strudel](https://strudel.cc/) patterns — live-coding music in
the browser (JavaScript port of TidalCycles).

## How to play

1. Open <https://strudel.cc/>
2. Paste any pattern from `examples/` into the editor
3. Hit <kbd>Ctrl</kbd>+<kbd>Enter</kbd> (or the play button) to listen
4. Tweak numbers, then re-run — live

## Layout

```
examples/          runnable patterns, one per file (.js)
```

Each file is self-contained: paste the whole thing into the Strudel editor.

## Naming

`examples/<bpm>-<name>.js` — e.g. `120-techno-backbeat.js`

## New pattern template

```js
// <name> — <one-line description>
const bpm = 120;
setCps(bpm / 60 / 2);

stack(
  s("bd*4"),                          // kick
  s("~ sd ~ sd"),                     // snare
  s("hh*8").bank("RolandTR909"),      // hats
  n("0 3 5 7").scale("C:major"),      // melody
).room(0.2)
```
