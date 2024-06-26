# K-State CS Hugo Theme V2

## [DEMO SITE](https://ksucs-hugo.russfeld.me/)

This is an adaptation of the [Hugo Relearn Theme](https://mcshelby.github.io/hugo-theme-relearn/) that has been customized for use by K-State Computer Science to build online textbooks. It contains some features that are unique to our use case, but they may be useful to others.

Some unique features to this theme:
* Fonts and layouts customized to match K-State's websites and color scheme, as well as [Instructure Canvas](https://canvas.instructure.com/).
* Each page generates an embeddable version that strips menus, headers and footers (add /embed.html to almost any URL). This is meant to be embedded in an iFrame within another page, such as an HTML wiki page in Canvas. 
  * By doing so, we can embed course content in Canvas while editing it via Hugo, taking advantage of tools such as git for versioning. In addition, by updating the source website, all versions of the course in Canvas are updated immediately. 
* Each page also generates a teleprompter version to allow creation of course videos (add /tele.html to almost any URL). Many pages are used as a video script for multi-modal learning. 
  * The teleprompter pages include auto-scroll capabilities. It is compatible with an [IKAN Teleprompter Remote](https://ikancorp.com/shop/teleprompters/tablet-teleprompters-accessories/ikan-elite-remote-bluetooth-teleprompter-remote-for-pt-elite-prompters/), but can be controlled using the number keys or easily customized. See /static/js/tele-scroll.js for details.

See below for the original README information from [Hugo Relearn Theme](https://mcshelby.github.io/hugo-theme-relearn/).

---

# Sample Site

You can clone a [starter book](https://github.com/ksu-cs-textbooks/hugo-starter) that is already pre-configured to use this template. You can also clone the code for the [demo site](https://github.com/russfeld/ksucs-hugo).

---

# Quick Start Guide

This is a quick start guide for using this theme within a new Hugo website. 

1. [Install Hugo](https://gohugo.io/getting-started/installing/) using the method of your choice. You will need a version of Hugo at 0.121.0 or later.
  1. I prefer to use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on Windows 11 coupled with [Visual Studio Code](https://code.visualstudio.com/) and the [WSL Extension](https://code.visualstudio.com/docs/remote/wsl). This allows native editing coupled with a Linux terminal. 
  1. On WSL, I usually download the .deb package from [Hugo Releases](https://github.com/gohugoio/hugo/releases) and install it using `sudo dpkg -i <.deb file>`
2. Use Hugo to create a new site. See the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/). 
  1. `hugo new site <website name>`
3. Install this repository as the theme. See the [Hugo Theme Relearn Installation Instructions](https://mcshelby.github.io/hugo-theme-relearn/basics/installation/index.html). 
  1. I recommend using Hugo Modules as directed in the Installation Guide. This allows you to pull updated versions of this template onto your site. 
  1. `hugo mod init github.com/<username>/<repo>` (use the path to your site on GitHub, or `example.com` if you aren't using GitHub)
  1. `hugo mod get github.com/ksu-cs-textbooks/hugo-theme-relearn`
4. Copy the contents of `hugo.toml.sample` in this repository to your `hugo.toml` file in the root of your Hugo website, and edit accordingly. 

---

# Original README Below

---

# Hugo Relearn Theme

A theme for [Hugo](https://gohugo.io/) designed for documentation.

[★ What's new in the latest release ★](https://mcshelby.github.io/hugo-theme-relearn/basics/migration)

![Image of the Relearn theme in light and dark mode on phone, tablet and desktop](https://github.com/McShelby/hugo-theme-relearn/raw/main/images/hero.png)

## Motivation

The Relearn theme is a fork of the great [Learn theme](https://github.com/matcornic/hugo-theme-learn) with the aim of fixing long outstanding bugs and adapting to latest Hugo features. As far as possible this theme tries to be a drop-in replacement for the Learn theme.

## Features

- **Wide set of usage scenarios**
  - Responsive design for mobile usage
  - Looks nice on paper (if it has to)
  - Usable offline, no external dependencies
  - [Usable from your local file system via `file://` protocol](https://mcshelby.github.io/hugo-theme-relearn/basics/customization#file-system)
  - Support for the [VSCode Front Matter extension](https://github.com/estruyf/vscode-front-matter) for on-premise CMS capabilities
  - [Support for Open Graph, Schema and Twitter Cards](https://mcshelby.github.io/hugo-theme-relearn/basics/customization#social-media-meta-tags)
- **Configurable theming and visuals**
  - [Configurable brand images](https://mcshelby.github.io/hugo-theme-relearn/basics/branding#change-the-logo)
  - [Automatic switch for light/dark variant depending on your OS settings](https://mcshelby.github.io/hugo-theme-relearn/basics/branding#adjust-to-os-settings)
  - Predefined light, dark and color variants
  - [User selectable variants](https://mcshelby.github.io/hugo-theme-relearn/basics/branding#multiple-variants)
  - [Stylesheet generator](https://mcshelby.github.io/hugo-theme-relearn/basics/generator)
  - [Configurable syntax highlighting](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/highlight)
- **Unique theme features**
  - [Print whole chapters or even the complete site](https://mcshelby.github.io/hugo-theme-relearn/basics/customization#activate-print-support)
  - In page search
  - [Site search](https://mcshelby.github.io/hugo-theme-relearn/basics/customization#activate-search)
  - [Dedicated search page](https://mcshelby.github.io/hugo-theme-relearn/basics/customization#activate-dedicated-search-page)
  - [Taxonomy support](https://mcshelby.github.io/hugo-theme-relearn/cont/taxonomy)
  - [Configurable topbar buttons](https://mcshelby.github.io/hugo-theme-relearn/basics/topbar)
  - [Unlimited nested menu items](https://mcshelby.github.io/hugo-theme-relearn/cont/pages)
  - [Configurable shortcut links](https://mcshelby.github.io/hugo-theme-relearn/cont/menushortcuts)
  - Hidden pages
- **Multi language support**
  - [Full support for languages written right to left](https://mcshelby.github.io/hugo-theme-relearn/cont/i18n)
  - [Available languages](https://mcshelby.github.io/hugo-theme-relearn/cont/i18n#basic-configuration): Arabic, Simplified Chinese, Traditional Chinese, Czech, Dutch, English, Finnish, French, German, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Romanian, Russian, Spanish, Swahili, Turkish, Vietnamese
  - [Search support for mixed language content](https://mcshelby.github.io/hugo-theme-relearn/cont/i18n#search)
- **Additional Markdown features**
  - [Support for GFM (GitHub Flavored Markdown)](https://mcshelby.github.io/hugo-theme-relearn/cont/markdown)
  - [Image effects like sizing, shadow, border and alignment](https://mcshelby.github.io/hugo-theme-relearn/cont/markdown#image-effects)
  - [Image lightbox](https://mcshelby.github.io/hugo-theme-relearn/cont/markdown#lightbox)
- **Shortcodes galore**
  - [Display resources contained in a page bundle](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/resources)
  - [Marker badges](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/badge)
  - [Configurable buttons](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/button)
  - [List child pages](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/children)
  - [Expand areas to reveal content](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/expand)
  - [Font Awesome icons](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/icon)
  - [Inclusion of other files](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/include)
  - [Math and chemical formulae using MathJax](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/math)
  - [Mermaid diagrams for flowcharts, sequences, gantts, pie, etc.](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/mermaid)
  - [Colorful boxes](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/notice)
  - [OpenAPI specifications using Swagger UI](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/openapi)
  - [Reveal you site's configuration parameter](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/siteparam)
  - [Single tabbed panels](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/tab) and [multiple tabbed panels](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/tabs)

## Installation & Usage

For a detailed description of the theme's capabilities visit the [official documentation](https://mcshelby.github.io/hugo-theme-relearn/).

## Changelog

See the [What's New](https://mcshelby.github.io/hugo-theme-relearn/basics/migration) page for release highlights or the detailed [change history](https://mcshelby.github.io/hugo-theme-relearn/basics/history) for a complete list of changes.

## Contributions

You are most welcome to contribute bugfixes or new features. Check the [contribution guidelines](https://mcshelby.github.io/hugo-theme-relearn/dev/contributing) first before starting.

## License

The Relearn theme is licensed under the [MIT License](https://github.com/McShelby/hugo-theme-relearn/blob/main/LICENSE).

## Credits

This theme would not be possible without the work of [many others](https://mcshelby.github.io/hugo-theme-relearn/more/credits).
