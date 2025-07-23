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

[★ What's new in the latest version ★](https://mcshelby.github.io/hugo-theme-relearn/introduction/releasenotes)

![Image of the Relearn theme in light and dark mode on phone, tablet and desktop](https://mcshelby.github.io/hugo-theme-relearn/images/hero.png)

## Overview

The Relearn theme is an enhanced fork of the popular [Learn theme](https://github.com/matcornic/hugo-theme-learn). It aims to address long-standing issues and incorporate the latest Hugo features while trying to maintain compatibility with its predecessor.

## Key Features

- **Versatile Usage**
  - [Responsive design for mobile devices](https://mcshelby.github.io/hugo-theme-relearn/configuration/sidebar/width)
  - [Looks nice on paper](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/outputformats) - if it has to
  - [Usable offline with no external dependencies](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/deployment#offline-usage)
  - [Usable from your local file system without a web server](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/deployment#file-system) via `file://` protocol
  - [Integration with the VSCode Front Matter CMS extension](https://mcshelby.github.io/hugo-theme-relearn/introduction/tools#front-matter-cms) for on-premise CMS capabilities

- **Customizable Appearance**
  - [Flexible brand image configuration](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/logo#change-the-logo)
  - [Automatic light/dark mode switching based on OS settings](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/colors#adjust-to-os-settings)
  - [Many pre-defined color variants](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/colors#shipped-variants)
  - [User-selectable variants](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/colors#multiple-variants)
  - [Built-in stylesheet generator](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/generator)
  - [Customizable syntax highlighting](https://mcshelby.github.io/hugo-theme-relearn/configuration/branding/modules/#change-syntax-highlighting)

- **Advanced Functionality**
  - [Chapter and site-wide printing capabilities](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/outputformats#print-support)
  - [Versatile search options: in-page, popup, and dedicated search page](https://mcshelby.github.io/hugo-theme-relearn/configuration/sidebar/search)
  - [Customizable topbar buttons](https://mcshelby.github.io/hugo-theme-relearn/configuration/customization/topbar)
  - [Configurable sidebar menus](https://mcshelby.github.io/hugo-theme-relearn/configuration/sidebar/menus)
  - [Support for hidden pages](https://mcshelby.github.io/hugo-theme-relearn/configuration/content/hidden)
  - [Comprehensive taxonomy support](https://mcshelby.github.io/hugo-theme-relearn/configuration/customization/taxonomy)
  - [Versioning support](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/versioning)
  - [Social media integration](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/meta#social-media-images)

- **Multilingual Support**
  - [Full right-to-left (RTL) language support](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/multilingual)
  - [Extensive list of supported languages](https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/multilingual): Arabic, Chinese (Simplified and Traditional), Czech, Dutch, English, Finnish, French, German, Hindi, Hungarian, Indonesian, Italian, Japanese, Korean, Persian, Polish, Portuguese, Romanian, Russian, Spanish, Swahili, Turkish, Ukrainian, Vietnamese
  - [Multilingual content search capabilities](https://mcshelby.github.io/hugo-theme-relearn/configuration/sidebar/search#mixed-language-support)

- **Enhanced Markdown Features**
  - [CommonMark compliant](https://mcshelby.github.io/hugo-theme-relearn/authoring/markdown)
  - [Support for Markdown extensions like GitHub Flavored Markdown](https://mcshelby.github.io/hugo-theme-relearn/authoring/markdown#standard-and-extensions)
  - [Support for Obsidian callouts](https://mcshelby.github.io/hugo-theme-relearn/authoring/markdown#obsidian-callouts)
  - [Advanced link manipulation like download and target](https://mcshelby.github.io/hugo-theme-relearn/configuration/customization/linkeffects)
  - [Advanced image manipulation like lightbox, sizing, shadows, borders and alignment](https://mcshelby.github.io/hugo-theme-relearn/configuration/customization/imageeffects)

- **Rich Shortcode Library**
  - [Marker badges](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/badge)
  - [Flexible buttons](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/button)
  - [Child page listing](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/children)
  - [Expandable content areas](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/expand)
  - [Font Awesome icon integration](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/icon)
  - [File inclusion capabilities](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/include)
  - [Math support for mathematical and chemical formulae](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/math)
  - [Mermaid diagram integration](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/mermaid)
  - [Styled notice boxes](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/notice)
  - [OpenAPI specification rendering](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/openapi)
  - [Page bundle resource display](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/resources)
  - [Site configuration parameter display](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/siteparam)
  - [Tab-based content organization](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/tab) and [multi-tab panels](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/tabs)
  - [Nicely formatted tree lists](https://mcshelby.github.io/hugo-theme-relearn/shortcodes/tree)

## Getting Started

For a comprehensive guide on the theme's capabilities, please refer to the [official documentation](https://mcshelby.github.io/hugo-theme-relearn/introduction/quickstart).

## Updates and Changes

Visit the [What's New](https://mcshelby.github.io/hugo-theme-relearn/introduction/releasenotes) page for feature highlights or the [detailed changelog](https://mcshelby.github.io/hugo-theme-relearn/introduction/changelog) for a complete list of updates.

## Contributing

We welcome contributions for bug fixes and new features. Please see the [contribution guidelines](https://mcshelby.github.io/hugo-theme-relearn/development/contributing) before getting started.

## Licensing

The Relearn theme is distributed under the [MIT License](https://github.com/McShelby/hugo-theme-relearn/blob/main/LICENSE).

## Credits

This theme builds upon the work of [many contributors](https://mcshelby.github.io/hugo-theme-relearn/more/credits).
