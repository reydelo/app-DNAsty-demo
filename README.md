# App DNAsty!

[https://app-dnasty.vercel.app/](https://app-dnasty.vercel.app/)

A demo of a landing page hero with a scrolling animation and hover state animation.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Work Sans, a custom Google Font.

## Deploy on Vercel

Every commit pushed to the main branch will trigger a Production Deployment.

The app is deployed with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js).

## Resources

[Prototype](https://www.figma.com/proto/Q6UNgq6ZqKAlBI0X6DuwLj/Reyna-DeLog%C3%A9-%E2%80%93-Test-Task-Creative-Frontend-Developer?page-id=0%3A1&node-id=1%3A2615&viewport=1157%2C773%2C0.2&scaling=min-zoom&starting-point-node-id=1%3A2615) | [Designs](https://www.figma.com/file/Q6UNgq6ZqKAlBI0X6DuwLj/Reyna-DeLog%C3%A9-%E2%80%93-Test-Task-Creative-Frontend-Developer?node-id=0%3A1&t=9mK8h6dLuhGSdgby-1) | [Instructions](https://www.notion.so/Test-Task-Creative-Frontend-Developer-Reyna-DeLog-3a177e31e741490b900050a3d859c6c0)

## Tasks:

- [x] Create new Next.js App
  - [x] Remove boilerplate code
  - [] Change favicon
  - [x] Rename github repo and domain to app-dnasty
- [x] Create UI skeleton
  - [x] Text content
  - [x] Typography
  - [x] Color variables
  - [x] Add SVGs
  - [x] Non-optimized layout
- [x] Hover state interaction
  - [x] When hoving a block, highlight all blocks of the same color:
  - [x] reduce opacity of all blocks of a different cololr
  - [x] Fade out stack name labels
  - [x] Display label that describes the colored blocks
  - [x] Positioning of color labels in bottom row
- [x] Scroll-into animation
  - [x] layout
    - [x] On intial render, show title/subtile in 75% of available screen
    - [x] Show tops of DNA stacks at the bottom, as a teaser
      - [x] each stack should have a unique starting position
      - [x] stack label is not shown
  - [x] On scroll, the stacks move to their final position which includes reveals the stack label
    - [] ~Shortcut: use a library like Motion or GSAP~
    - [] JS-only approach with `requestAnimationFrame`
    - [] Animation should be smooth and ideally run at 60FPS
    - [x] Show stack label as each individual stack arrives at final position

## After base requirements are finished:

- [] Review for Semantic HTML
- [] Create classes for typography
- [] Refactor CSS for better handling of px, em, padding, max-width, etc..
- [] Review for recommended best practices:
  - [] Tailwind
  - [] working with an 8px spacing system
  - [] variables for colors
  - [] avoiding absolute values
  - [x] abstracting data from markup

## Nice to haves:

- [] Animation to reveal colored stacks (good for touch screens, since they can't hover)
- [] Quick wins for responsiveness (but responsiveness is out of scope)
- [] Review font loading and best use of @next/font
