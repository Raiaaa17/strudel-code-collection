// first-collection.js — my first Strudel pattern collection entry
// Punchcard visualizer; gain per layer via sliders.
// NOTE: sound aliases (ostinatobanjo, bass, maracas, ethera, bongos,
// violaostinato, mainbanjo, nomai) must be defined/loaded in the session
// before running — paste your sample-loading block first.
stack(
  ostinatobanjo.gain(
slider(0.5904,0,1.2)),
  bass.gain(
slider(0.924,0,2)),
  maracas.gain("<[<1
0.2>*16]>".mul(slider(0.504,0,1))),
  ethera.gain(
slider(0.2245,0,0.5)),
  bongos.gain(
slider(14.73458,0,30)),
  violaostinato.gain(
slider(1.072,0,2)),
  mainbanjo.gain(
slider(1.491,0,3)),
  nomai.gain(
slider(4.288,0,8))
)
  .punchcard({ vertical:1, labels: 1 })
