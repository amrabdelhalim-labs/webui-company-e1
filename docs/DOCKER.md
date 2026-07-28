# Docker preview

This image builds the existing multi-page Webpack project and serves its
generated static files with NGINX. It has no runtime dependencies.

```sh
docker pull ghcr.io/amrabdelhalim-labs/webui-company-e1:v1.0.1
docker run --rm -p 8080:80 ghcr.io/amrabdelhalim-labs/webui-company-e1:v1.0.1
```

Open `http://localhost:8080`.


For automatic port selection and browser launch, see [the zero-config launcher guide](./LAUNCHER.md).
