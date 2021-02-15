
function HexFlow() {
  var f = this;
  f.enabled = !1,
  f.delay = 192, f.s = -1, f.lh = 12, f.offset = 12, f.n = 384, f.p = 0,
  f.dump = document.getElementById("hex"),
  f.links = f.dump.getElementsByTagName("b"),
  f.hex = function() {
    f.dump.style.top = ((f.p - f.offset) * f.lh) + "pt"
    for (var e in f.links) {
      if (f.links[e].style) f.links[e].style.top = -((f.p - f.offset) * f.lh) + "pt" }
    f.p += f.s
    if (f.p <= -f.n || f.p >= 0) f.s = -f.s
  },
  f.stop = function(e) {
    if (e.target.nodeName != 'A') {
      f.enabled = 0, window.clearInterval(f.timer) } },
  f.run = function() { f.enabled = 1, f.timer = window.setInterval(f.hex, f.delay) },
  f.toggle = function(e) {
    if (e.target.nodeName != 'A') {
      f.enabled ? f.stop() : f.run() } } }

function UserInterface() {
  var i = this;
  i.elements = {
    wrapper: document.getElementById("wrapper"),
    message: document.getElementById("messageBoxInner"),
    messageBox: document.getElementById("messageBox"),
    dump: document.getElementById("dump"),
    dumpTrigger: document.getElementById("dumpTrigger") },
  i.show = {
    message: function(t) {
      i.elements.message.innerHTML = t,
      i.elements.messageBox.classList.remove("hidden"),
      console.log(t) } },
  i.close = {
    message: function() {
      i.elements.messageBox.classList.add("hidden") },
    dump: function(e) {
      if (e.target.nodeName != 'A') {
        i.elements.dump.classList.add("hidden"),
        i.elements.dumpTrigger.classList.add("hidden") } } },
  i.toggle = {
    dump: function(e) {
      if (e.target.nodeName != 'A') {
        i.elements.dump.classList.toggle("hidden"),
        i.elements.dumpTrigger.classList.toggle("hidden") } } } }

// https://fonts.google.com/specimen/Jura
// https://fonts.google.com/specimen/Recursive
function Font() {
  var f = this;
  f.family = "Jura",
  f.size = 30,
  f.sizeDefault = 30,
  f.sizeVariable = function() {
    return Math.floor((.7 * Math.random() + .5) * f.size) },
  f.setZoom = function(t) {
    f.size = Math.floor(t * f.sizeDefault) } }

function Direction() {
  var d = this;
  d.currentX = "none",
  d.currentY = "down",
  d.directionX = {
    left: -1,
    right: 1,
    none: 0 },
  d.directionY = {
    down: 1,
    up: -1,
    none: 0 } }

function Color() {
  var c = this;
  c.default = "#1E90FF",
  c.current = "#1E90FF",
  c.palette = {
    lime: "#00FF00",
    olive: "#999900",
    mediumseagreen: "#3CB371",
    red: "#FF1A1A",
    deeppink: "#FF1493",
    fuchsia: "#FF00FF",
    orange: "#FFA500",
    yellow: "#FFFF00",
    blue: "#3333FF",
    dodgerblue: "#1E90FF",
    aqua: "#00FFFF",
    whitesmoke: "#F5F5F5"
  },
  c.set = function(e) { Object.prototype.hasOwnProperty.call(c.palette, e) && (c.current = c.palette[e]) } }

// https://www.fesliyanstudios.com/royalty-free-music/
function Music() {
  var m = this;
  m.panel = document.getElementById("musicPanel"),
  m.player = document.getElementById("music"),
  m.playerSource = document.getElementById("musicSource"),
  m.index = 0,
  m.tracks = [
    { author: "David Fesliyan",
      title: "New Heights",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=368" },
    { author: "David Fesliyan",
      title: "Journey To The Promise",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=263" },
    { author: "David Fesliyan",
      title: "Powerful",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=539" },
    { author: "David Fesliyan",
      title: "Forever",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=494" },
    { author: "Steve Oxen",
      title: "The Last Time",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=863" },
    { author: "Steve Oxen",
      title: "Beyond The Stars",
      source: "https://www.fesliyanstudios.com/download-link.php?src=i&id=1332" } ],
  m.set = function(i = 0) {
    console.log("Playing #"+i+": "+m.tracks[i].author+" | "+m.tracks[i].title),
    m.panel.innerHTML = m.tracks[i].author+" | "+m.tracks[i].title,
    m.panel.href = m.tracks[i].source
    if (i != m.index) {
      m.index = i,
      !m.player.paused && m.player.pause(),
      m.playerSource.setAttribute("src", m.tracks[i].source),
      m.player.load(), m.player.play() }
    else m.player.paused && m.player.play() }
  m.set()
}

function Ticker(e, t = 0, n = 0) {
  var o = this;
  o.last = !1,
  o.interval = e,
  o.intervalDefault = e,
  o.duration = t,
  o.delay = n,
  o.setSpeed = function(e) { o.interval = Math.floor(1 / e * o.intervalDefault) } }

function Message(e, t) {
  var m = this;
  m.enabled = !0,
  m.index = 0,
  m.ticker = new Ticker(e, t),
  m.pool = [
    "<i>e</i>&thinsp;<sup>i&pi;</sup>&thinsp;+1=&thinsp;0<br/>&mdash;Euler's identity",
    "Follow the white rabbit.<br/>&mdash;The Matrix",
    "It’s probably better to have him inside the tent pissing out, than outside the tent pissing in.<br/>&mdash;Lyndon B. Johnson about J. Edgar Hoover",
    "There is a difference between knowing the path and walking the path.<br/>&mdash;Morpheus, The Matrix",
    "Hello everybody out there...<br/>&mdash;Linus Torvalds",
    "2<sup>&thinsp;&alefsym;<sub>0</sub></sup>&thinsp;&#8799;&thinsp;&alefsym;<sub>1</sub>&thinsp;&#8799;&thinsp;&#8493;<br/>&mdash;Cantor's continuum",
    "I want to belive.<br/>&mdash;Bureau Fox Mulder, X-Files" ] }

function Matrix(e) {
  var t = this;
  t.m = [],
  t.chars = "!\"#$%&'()*+,-./:;<=>?[\\]^_{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),
  t.density = 1.2,
  t.canvas = document.getElementById(e),
  t.context = t.canvas.getContext("2d"),
  t.canvas.width = window.innerWidth,
  t.canvas.height = window.innerHeight,
  t.hex = new HexFlow,
  t.font = new Font,
  t.ui = new UserInterface,
  t.direction = new Direction,
  t.color = new Color,
  t.music = new Music,
  t.ticker = new Ticker(40, 0),
  t.message = new Message(40000, 30000),
  t.numCols = Math.floor(t.density * t.canvas.width / t.font.size),
  t.numRows = Math.floor(t.density * t.canvas.height / t.font.size),
  t.randomInt = function(e) { return Math.floor(Math.random() * e) },
  t.randomChar = function() { return t.chars[t.randomInt(t.chars.length)] },
  t.createChar = function(e = 0) {
    var n = t.font.sizeVariable(), o = t.randomInt(t.canvas.width),
        posY = -n - e, stopX = 0,
        stopY = (stopY = Math.floor(t.randomInt(1.2 * t.canvas.height)),
                 stopY > t.canvas.height && (stopY = t.canvas.height),
                 stopY += n);
    return {
      posX: o,
      posY: posY,
      stopX: stopX,
      stopY: stopY,
      fontSize: n,
      prev: {
        posX: 0,
        posY: 0,
        char: "" } }
  },
  t.init = function() {
    t.m = [];
    for (var e = 0; e < t.numCols; e++) t.m.push(t.createChar(2 * t.randomInt(t.canvas.height)));
    window.requestAnimationFrame(t.draw) },
  t.resize = function() {
    t.canvas.width = window.innerWidth,
    t.canvas.height = window.innerHeight,
    t.numCols = Math.floor(t.density * t.canvas.width / t.font.size),
    t.numRows = Math.floor(t.density * t.canvas.height / t.font.size),
    t.init() },
  t.clearScreen = function() { t.context.clearRect(0, 0, t.canvas.width, t.canvas.height) },
  t.drawCharPrev = function(e) {
    t.context.font = e.fontSize + "px " + t.font.family,
    t.context.fillStyle = t.color.current,
    t.context.globalCompositeOperation = "hard-light",
    t.context.fillText(e.prev.char, e.prev.posX, e.prev.posY) },
  t.drawChar = function(e) {
    var n = t.randomChar();
    return t.context.globalCompositeOperation = "source-atop",
           t.context.fillStyle = "rgba(0, 0, 0, 0.5)",
           t.context.fillRect(e.posX - Math.floor(.25 * e.fontSize), e.posY - Math.floor(.8 * e.fontSize), e.fontSize, e.fontSize),
           t.drawCharPrev(e),
           t.context.font = e.fontSize + "px " + t.font.family,
           t.context.globalCompositeOperation = "source-over",
           t.context.fillStyle = "white",
           t.context.fillText(n, e.posX, e.posY), n },
  t.draw = function(e) {
    if (e > t.ticker.delay) {
      if (!t.ticker.last || e >= t.ticker.last + t.ticker.interval) {
        t.ticker.last = e,
        t.context.fillStyle = "rgba(0, 0, 0, 0.09)",
        t.context.fillRect(0, 0, t.canvas.width, t.canvas.height);
        for (var n = 0; n < t.m.length; n++) {
          var o = 0, i = 0, r = !0;
          t.m[n].posX += t.direction.directionX[t.direction.currentX] * t.m[n].fontSize + o,
          t.m[n].posY += t.direction.directionY[t.direction.currentY] * t.m[n].fontSize + i,
          t.m[n].posY < t.m[n].stopY && (
            t.m[n].posY >= 0 && (t.m[n].prev.char = t.drawChar(t.m[n]) ),
            r = !1 ),
          r ? (t.drawCharPrev(t.m[n]), t.m[n] = t.createChar())
            : (t.m[n].prev.posX = t.m[n].posX, t.m[n].prev.posY = t.m[n].posY)
        }
      }
      t.message.enabled && (
        (!t.message.ticker.last &&
         e > t.message.ticker.interval ||
         e >= t.message.ticker.last + t.message.ticker.interval) &&
        (t.message.ticker.last = e,
         t.ui.show.message(t.message.pool[t.message.index]),
         t.message.index++,
         t.message.index >= t.message.pool.length && (t.message.index = 0)),
        e >= t.message.ticker.last + t.message.ticker.duration && t.ui.close.message())
    }
    window.requestAnimationFrame(t.draw)
  };

  t.ui.elements.dump.addEventListener("click", t.ui.close.dump),
  t.ui.elements.dump.addEventListener("click", t.hex.stop),
  t.ui.elements.dumpTrigger.addEventListener("click", t.ui.toggle.dump),
  t.ui.elements.dumpTrigger.addEventListener("click", t.hex.toggle),

  t.music.player.addEventListener("ended", function() {
    t.music.set(t.music.index < t.music.tracks.length - 1 ? t.music.index + 1 : 0) }),
  window.addEventListener("resize", function() { t.resize() }),
  t.init()
}

new Matrix("matrix");
