# iredis.io

[![Netlify Status](https://api.netlify.com/api/v1/badges/7e921e84-12fd-47d1-a587-c8e3be6b4d56/deploy-status)](https://app.netlify.com/sites/iredis/deploys)


## Develop

```
$ cactus serve
```

### Record casts

Record using [termtosvg](https://github.com/nbedos/termtosvg). Terminal size 
80x25 .

Move cast file to ./static/casts/features

### Compiling casts

```
ls *.cast | xargs -I{} termtosvg render {}  {}.svg -D 2 -m40 -M300 -t gjm8
```

### Info

- Bootstrap CDN: https://www.bootstrapcdn.com/
