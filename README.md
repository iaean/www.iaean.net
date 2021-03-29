My web representation via [GitHub Pages][0]...

It's a simple hand-crafted HTML/CSS/Javascript approach. Mostly inspired by [Jamie Zawinski][20] and [Levent Gülec][21].
That's why Jekyll is disabled. But I like the [Architect][10], [Cayman][11], [Minimal][12] and [Slate][13] themes.

I wanna utilize my favorite [site generator][1] and host my blog also on Github.

### Build

I'm using [Gulp][30]. That depends on [Node.js][31] and [NPM][32].

```bash
node --version
npm --version
gulp --version

npm install    # instantiate package.json deps
gulp [default] # HTML/CSS/Javascript linting and minifying
gulp publish   # copy minified stuff to Github pages docs/
gulp clean     # remove build dir
```

### Todo

- [ ] Adapt to small mobile displays
- [ ] Provide public keys inside app
- [x] Provide Ancestry and Fun stuff maybe via [Blocks][2]
- [ ] Feed sayings and citations from a service
- [ ] Let clickable URLs rain instead of random chars

[0]: https://docs.github.com/github/working-with-github-pages
[1]: https://gatsby.ghost.org/
[2]: https://bl.ocks.org/

[10]: https://pages-themes.github.io/architect/
[11]: https://pages-themes.github.io/cayman/
[12]: https://pages-themes.github.io/minimal/
[13]: https://pages-themes.github.io/slate/

[20]: https://www.jwz.org/
[21]: https://matrix.logic-wire.de/
[22]: https://codepen.io/P3R0/pen/MwgoKv

[30]: https://gulpjs.com/
[31]: https://nodejs.org/
[32]: https://www.npmjs.com/
