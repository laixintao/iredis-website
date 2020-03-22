### Source Code for iredis.io

[Deploy Guide](https://docusaurus.io/docs/en/publishing#hosting-on-netlify)


[![Netlify Status](https://api.netlify.com/api/v1/badges/7e921e84-12fd-47d1-a587-c8e3be6b4d56/deploy-status)](https://app.netlify.com/sites/iredis/deploys)

build command(do not compress svg):

```
cd website; npm install; npm run build;cp -rv static/img/casts/* build/iredis/img/casts
```

publish dir:

```
website/build/iredis
```

### Dev

1. `yarn install` in website.
2. `npm start`
