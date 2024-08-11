>[!WARNING]
> This project is still in early development and is not yet ready for production use. Feel free to contribute to the project by submitting a pull request or opening an issue.

# Product Landing Page Template (React)

This is a product landing page template built with React. It is a simple, responsive, configurable, and easy-to-use template that you can use to showcase your product or service.

## Features

- **Responsive design.** The template is fully responsive and works on desktop, tablet, and mobile devices.
- Does not rely on any 3rd party libraries or frameworks apart from `react` and `react-icons`. The latter can easily be removed if you don't want to use the icons.
- **Conventional appearance.** Takes visual inspiration from the [Adjust](https://www.adjust.com/) and [Streamlit](https://www.streamlit.io/) landing pages.
- **Reusable components.** The template is built with reusable components that you can easily customize and reuse. You can find these in the `src/components` directory.
- **Custom hooks.** The template uses custom hooks to detect window widths and window scroll positions. You can find these in the `src/hooks` directory.
- **Free assets.** The template uses free assets from [Icon 8](https://icons8.com/illustrations) and [Streamlit](https://www.streamlit.io/). You can find these in the `public` directory.

## Getting Started

To get started with the template, you can clone the repository and install the dependencies:

```bash
git clone https://github.com/bouzidanas/product-page-template.git
```
Change into the project directory:
```bash
cd product-page-template
```
Use your package manager to install the dependencies. If you are using npm, you can run:
```bash
npm install
```
You can test the template by running:
```bash
npm run dev
```

>[!NOTE]
> The template is built with Vite. You can find more information about Vite [here](https://vitejs.dev/). It also uses icons from [React Icons](https://react-icons.github.io/react-icons/).


## Using the Template to Build Your Product Landing Page

The quick and dirty:

1. Copy `AdjustLandingPage.tsx` and `AdjustLandingPage.css` from the `src/` directory.
2. Paste them into your project. 
3. Rename the files to something that makes sense for your project.
4. Update the imports inside `main.tsx` to point to the renamed files.
5. In the CSS file, you can change the css variables and properties to match your brand colors and styles.
6. In the TSX file, you can:
    - Change the content of the sections to match your product or service.
    - Change the icons to match your product or service.
    - Add or remove content as needed.
    - Create your own sections based on the existing ones.

## Contributing

If you would like to contribute to the project, you can do so by submitting a pull request or opening an issue.

## License

This project is licensed under the [MIT License](https://github.com/bouzidanas/product-page-template?tab=MIT-1-ov-file#readme).