# BBCode Details by FriendsOfFlarum

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/fof/bbcode-details.svg)](https://packagist.org/packages/fof/bbcode-details)

A [Flarum](http://flarum.org) extension. Details BBCode for Flarum. Original by @sijad.

### Installation

Use [Bazaar](https://discuss.flarum.org/d/5151-flagrow-bazaar-the-extension-marketplace) or install manually with composer:

```sh
composer require fof/bbcode-details
```

### Updating

```sh
composer update fof/bbcode-details
```

### Usage

Use the following BBCode in your posts:

```
[details="Summary text here"]Hidden content here[/details]
[details title="Summary text here"]Hidden content here[/details]
[details]Hidden content with no summary[/details]
```

You may optionally also provide the `open=` attribute to mark as open by default. The `name=` attribute may be used to provide a unique identifier for the details block (which can be used to only open one details block at a time in a group).

<img src="https://i.imgur.com/mmtCS3M.png" width="300" loading="lazy" alt="screenshot" />

### Links

- [Packagist](https://packagist.org/packages/fof/bbcode-details)
- [GitHub](https://github.com/FriendsOfFlarum/bbcode-details)
- [Sijad's Details](https://github.com/sijad/flarum-ext-details)

An extension by [FriendsOfFlarum](https://github.com/FriendsOfFlarum).

