# 🥞 Soupswap UIkit

**This repository is not used anymore. See the [https://github.com/soupswap/soupswap-toolkit](Soupswap toolkit) instead**

[![Version](https://img.shields.io/npm/v/soupswap-libs-uikit)](https://www.npmjs.com/package/soupswap-libs-uikit) [![Size](https://img.shields.io/bundlephobia/min/soupswap-libs-uikit)](https://www.npmjs.com/package/soupswap-libs-uikit)

Soupswap UIkit is a set of React components and hooks used to build pages on Soupswap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add soupswap-libs-uikit`

## Setup

### Theme

Before using Soupswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'soupswap-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'soupswap-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)
