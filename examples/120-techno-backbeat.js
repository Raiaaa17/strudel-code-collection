// 120-techno-backbeat.js — starter groove: kick on quarters, offbeat bass
setCps(120 / 60 / 2);

stack(
  s("bd*4").bank("RolandTR909"),
  s("~ sd ~ sd").bank("RolandTR909"),
  s("hh*8").bank("RolandTR909").gain(0.6),
  note("c2 ~ c2 ~").s("sawtooth").lpf(400).gain(0.5),
).room(0.15)
