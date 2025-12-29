# NetOrbit Brand Identity Guide

This folder contains all the essential design assets and guidelines to replicate the NetOrbit aesthetic in other applications.

## Directory Structure

-   `assets/`: Contains logo files (`logo.png`, `logo-icon.png`).
-   `colors.css`: CSS variables defining the full color palette.
-   `typography.md`: Font families and usage guidelines.
-   `index_reference.css`: A copy of the main global stylesheet used in the CRM.

## Quick Start

1.  **Colors:** Import `colors.css` or copy the variables into your CSS root.
    -   Primary Color: `var(--color-primary-500)` (Emerald Green #10b981)
    -   Secondary Color: `var(--color-secondary-500)` (Blue #3b82f6)
    -   Accent Color: `var(--color-accent-500)` (Purple #8b5cf6)

2.  **Typography:** Use the **Inter** font family.
    -   `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">`
    -   CSS: `font-family: 'Inter', system-ui, sans-serif;`

3.  **Logos:** existing high-res logos are in `assets/`.
    -   `logo.png`: Full logo text + icon.
    -   `logo-icon.png`: Icon only.

## Aesthetics Principles

-   **Clean & Modern:** Use ample whitespace (spacing) and rounded corners (`border-radius: 0.75rem` or `1rem`).
-   **Vibrant Colors:** Use the 500-600 shades for primary actions and brand recognition.
-   **Soft Shadows:** interactive elements should have subtle shadows (`0 4px 12px rgba(0,0,0,0.1)`).
-   **Dark Mode:** The palette includes a `dark` scale (#0f172a base) for seamless dark mode implementation.

For detailed Tailwind configuration, refer to the original `tailwind.config.js` in the frontend codebase.
