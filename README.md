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

You can clone a [sample site](https://gitlab.cs.ksu.edu/russfeld/ksucs-hugo) that is already pre-configured to use this template. 

---

# Quick Start Guide

This is a quick start guide for using this theme within a new Hugo website. 

1. [Install Hugo](https://gohugo.io/getting-started/installing/) using the method of your choice. You will need a version of Hugo at 0.100.0 or later.
  1. I prefer to use [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10) on Windows 10 coupled with [Visual Studio Code](https://code.visualstudio.com/) and the [WSL Extension](https://code.visualstudio.com/docs/remote/wsl). This allows native editing coupled with a Linux terminal. 
  1. On WSL, I usually download the .deb package from [Hugo Releases](https://github.com/gohugoio/hugo/releases) and install it using `sudo dpkg -i <.deb file>`
2. Use Hugo to create a new site. See the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-2-create-a-new-site). 
  1. `hugo new site <website name>`
3. Install this repository as the theme. See the [Hugo Quick Start Guide](https://gohugo.io/getting-started/quick-start/#step-3-add-a-theme). 
  1. I recommend using Git submodules as directed in the Quick Start Guide. This allows you to pull updated versions of this template onto your site. 
  1. `git init`
  1. `git submodule add https://github.com/K-State-Computational-Core/hugo-theme-relearn /themes/hugo-theme-relearn`
4. Copy the contents of `config.toml.sample` in this repository to your `config.toml` file in the root of your Hugo website, and edit accordingly. 

---

# Original README Below

---

# Hugo Relearn Theme

A theme for [Hugo](https://gohugo.io/) designed for documentation.

![Overview](https://github.com/McShelby/hugo-theme-relearn/raw/main/images/screenshot.png)

## Motivation

The theme is a fork of the great [Learn theme](https://github.com/matcornic/hugo-theme-learn) with the aim of fixing long outstanding bugs and adepting to latest Hugo features. As far as possible this theme tries to be a drop-in replacement for the Learn theme.

## Main features

- Usable offline, no external dependencies
- Support for Internet Explorer 11
- Responsive design
- Configurable hidden pages
- Automatic next/prev buttons to navigate through menu entries
- Automatic Search
- Print whole chapters or even the complete site
- Multilingual mode for English, Arabic, Simplified Chinese, Traditional Chinesse, Dutch, French, German, Hindi, Indonesian, Italian, Japanese, Korean, Polish, Portuguese, Russian, Spanish, Turkish, Vietnamese
- Unrestricted menu configuration relating to amount of items and level of nesting
- Font Awesome icons
- Tagging support
- Image resizing, shadow…
- Syntax highlighting
- Attachments files
- List child pages
- Math and chemical formulae using the MathJax library
- Mermaid diagrams for flowcharts, sequences, gantts, pie, etc.
- Swagger UI for OpenAPI Specifications
- Customizable look and feel
- Predefined (light, dark) and customizable color variants
- Buttons
- Tip/Note/Info/Warning boxes
- Expand
- Tabs
- File inclusion
## Installation

Visit the [installation instructions](https://mcshelby.github.io/hugo-theme-relearn/basics/installation) to learn how to setup the theme in your Hugo installation.

## Usage

Visit the [documentation](https://mcshelby.github.io/hugo-theme-relearn/) to learn about all available features and how to use them.

## Changelog

See the [changelog](https://mcshelby.github.io/hugo-theme-relearn/basics/history) for a complete list of releases.

## Contribution

You are most welcome to contribute to the source code but please visit the [contribution guidelines](https://github.com/McShelby/hugo-theme-relearn/blob/main/.github/contributing.md) first.

## License

This theme is licensed under the [MIT License](https://github.com/McShelby/hugo-theme-relearn/blob/main/LICENSE).

## Credits

Special thanks to [everyone who has contributed](https://github.com/McShelby/hugo-theme-relearn/graphs/contributors) to this project.

Many thanks to [Mathieu Cornic](https://github.com/matcornic) for his work on porting the [Learn theme](https://github.com/matcornic/hugo-theme-learn) to Hugo.

Many thanks to [Andy Miller](https://github.com/rhukster) for initially creating the [Learn theme](https://github.com/getgrav/grav-theme-learn2) for Grav.
