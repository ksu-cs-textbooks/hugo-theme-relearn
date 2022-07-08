Upgrade Guide:

1. Install New Theme via Git Submodule:

```bash
git submodule add https://github.com/K-State-Computational-Core/hugo-theme-relearn.git themes/hugo-theme-relearn
```

2. Update `config.toml`. Follow example here: https://github.com/russfeld/ksucs-hugo/blob/master/config.toml
  1. Update `docker.toml` if it exists as well

3. Update version of Hugo in `Dockerfile` to at least 0.101.0

4. Update `layouts/partials` files:
  1. `favicon.html` (may need to place icon file as well)

```html
<link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
```
  2. `logo.html`

```html
{{/* Place Logo Graphic or Text Here */}}
<a id="logo" href="{{ .Site.Home.RelPermalink | default ("/" | relLangURL) }}">
    <img src="/images/core-logo-on-purple.svg" alt="Computational Core Logo" style="width: 100%">
</a>

```

  3. `menu-footer.html`

```html
<style>
    #footer {
        font-size: 13px;
        margin-left: auto;
        margin-right: auto;
        padding: 2rem 1rem;
        min-width: 230px;
        max-width: 300px;
    }
    #footer p {
        margin: 0;
    }
</style>
    
<p>Built using <a href="http://gohugo.io/">Hugo</a> and <a href="https://github.com/K-State-Computational-Core/hugo-theme-relearn/tree/main">Hugo Relearn Theme</a>.</p>
<p><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0; margin: .5rem auto" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</a> See <a href="https://core.cs.ksu.edu/license">License & Attribution</a> for details.</p>
```

5. Update any `include` shortcodes from `{{% include <file> %}}` to `{{< include <file> >}}`

6. Any notices using custom titles need to be updated to remove the second argument