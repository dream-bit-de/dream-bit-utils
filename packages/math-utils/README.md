<p align="center">
[![NPM](https://nodei.co/npm/@dream-bit/math-utils.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@dream-bit/math-utils)
</p>
<h1 align="center">
  math-utils
</h1>

<p align="center">
  <a href="http://makeapullrequest.com">  
      <img alt="Gatsby" src="https://img.shields.io/badge/PRs-welcome-brightgreen" />
  </a>
</p>

**Some helper utilities used when working with math or random numbers.**

## 🎓 Install

Just use `npm install`, `yarn add` or `pnpm install`, it's your choice.
The package name is: `@dream-bit/math-utils`

## 🎉 Usage

You will find all necessary information about the functions in their own documentation.
Docs: https://dream-bit-de.github.io/dream-bit-utils/packages/math-utils/docs/

**Short explanation:**

- `additionWithLimit(limit: number, a: number | number[], b?: number): number`: Will sum up 2 numbers with a given limit. If that limit would've been exceeded by the addition, the limit is returned.
- `getRandom(): number`: Note that as numbers in JavaScript are IEEE 754 floating point numbers with round-to-nearest-even behavior, the ranges claimed for the functions below (excluding the one for Math.random() itself) aren't exact.
- `getRandomArbitrary(min: number, max: number): number`: This example returns a random number between the specified values.
- `getRandomIntInclusive(min: number, max: number): number`: This example returns a random integer between the specified values.
- `subtractionWithLimit(limit: number, a: number, b: number): number`: Will subtract 2 numbers with a given limit. If that limit would've been undershot by the subtraction, the limit is returned.

## ⭐ contributing

You want to help us, and join the Dream-bit Community?
Great! Please make sure to check out and understand what is written in the following files:

- CODE-OF-CONDUCT.md
- CONTRIBUTING.md

## 😊 About Dream-bit

At dream-bit dreams become software!
We encourage people to do good things with software and bring humanity forward.
You can be a part of us by contributing or joining the community at https://dream-bit.de

Develop software with your ❤️ as your 🧠.
