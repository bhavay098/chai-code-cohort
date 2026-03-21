# ☕ Chai CSS — Mini Tailwind Engine

A lightweight, runtime utility-first CSS engine built using **Vanilla JavaScript**.

> Add `chai-` classes to your HTML and styles are applied dynamically — just like Tailwind.

---

## 📸 Demo / Preview

**Try it in dev tools or in the live playground included in the project**

🌐 [Live Link](https://chai-tailwind-phi.vercel.app)

🔗 [GitHub Repository](https://github.com/bhavay098/chai-code-cohort/tree/main/Projects/Chai%20Tailwind)

---

## 🚀 About

Chai CSS is a **mini Tailwind-like engine** that:

- Parses utility classes (`chai-*`)
- Maps them to CSS properties
- Applies styles dynamically via JavaScript
- Reacts to DOM changes using **MutationObserver**

---

## ⚙️ How It Works

1. A `classMap` acts as the core engine (utility → CSS mapping)
2. JavaScript scans DOM elements for `chai-*` classes
3. Matching styles are applied as **inline styles**
4. A MutationObserver listens for:
   - New elements
   - Class changes
5. Styles are applied automatically in real-time

---

## 🧪 Example Usage

```html
<h1
  class="chai-p-2 chai-text-2xl chai-bg-orange chai-text-white chai-rounded-lg"
>
  Hello World ☕
</h1>
```

### Result:

- Padding: 8px
- Font size: 32px
- Background: Orange
- Text: White
- Rounded corners

---

## 🧠 Key Concepts Covered

- DOM Traversal
- Dynamic Style Injection
- Utility-first CSS architecture
- MutationObserver (reactive DOM updates)
- Class parsing & mapping

---

## 🛠 Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)

---
