# Mastering React Performance 🚀

A hands-on repository demonstrating the hidden traps of React memoization and lifecycles. 

This project goes beyond the basic definitions of React's performance hooks. It provides concrete, interactive examples of how to correctly optimize CPU-heavy tasks, preserve memory references, and prevent browser crashes caused by memory leaks.

## 🧠 What You Will Learn

This repository contains isolated examples demonstrating four critical React concepts:

1. **The Ghost in the Machine (`useEffect` Cleanups):** How to properly tear down global event listeners (like window resizing) to prevent catastrophic memory leaks when components unmount.
2. **The Premature Optimization Trap (`React.memo`):** Understanding when wrapping a component in `React.memo` actually makes your application *slower*, and when it is absolutely necessary.
3. **Escaping the Computation Trap (`useMemo`):** Using a custom, CPU-heavy `Factorial` class to demonstrate how to cache expensive math operations so they survive unrelated state changes (like toggling a dark mode theme).
4. **Escaping the Reference Trap (`useCallback`):** How JavaScript memory allocation breaks `React.memo`, and how to freeze a function's memory address to protect heavily optimized child components.

## 🛠️ How to Use This Repo

The best way to understand these concepts is to intentionally break them. 

1. **Clone the repo:** `git clone https://github.com/nshah-nitt/react-most-imp.git`
2. **Install dependencies:** `npm install`
3. **Run the app:** `npm start` (or `npm run dev`)
4. **Experiment:** Open your React DevTools Profiler. Try removing the `useCallback` wrapper from the child prop, or the `useMemo` from the factorial calculation, and watch how the components behave when you toggle the theme state. 

## 📌 The Cheat Sheet

Whenever you are unsure which hook to reach for, remember these caching rules:

* **`useEffect` return:** Caches nothing. Destroys background processes.
* **`useMemo`:** Caches a **Value** (the result of a function).
* **`useCallback`:** Caches a **Function Address** (the function itself).
* **`React.memo`:** Caches a **Component's UI state** (prevents re-renders if props are identical).

---
*Created as a companion to the article: [Insert Link to Your Medium Article Here]*