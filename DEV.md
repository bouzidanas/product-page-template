# TODO

## Organization

### Components

Core components need to be in their own package. This package should be using Vite in library mode. For now, this package should only contain the components that all templates need and make use of.

The remaining components should be in template package that uses them. This package should be using Vite in app mode.

### Templates

The ideal is to change the structure of this package to have a directory for each template. This directory should contain the template's components, styles, and any other assets. Each of these template directories should be its own package and github repository.

## Installation

We need to create some sort of installable script that will ask the user which template they want to use and then install the necessary packages and files.