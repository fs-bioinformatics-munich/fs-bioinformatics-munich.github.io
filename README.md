This repo contains the code for the website of the munich bioinformatics student council. The website is built using Jekyll and hosted on GitHub Pages. The website is available at [https://fs-bioinformatics-munich.github.io/](https://fs-bioinformatics-munich.github.io/).

# Development

## Setting up the development environment
### GitHub CodeSpace
This repository comes with a development container setup using Docker. The fastest way to get started is to open this repository in a CodeSpace (GitHub's cloud-based development environment). It will automatically install all dependencies and start the development server.

### Local Development inside the Development Container
If you want to develop locally, you can also use the development container. You need VS Code and Docker installed on your machine. You can follow [this guide](https://code.visualstudio.com/docs/devcontainers/containers) to get started with development containers in VS Code.

### Manual Installation
If you don't want to use the development container, you can also install the dependencies on your machine. You need Ruby and Bundler installed. You can install the dependencies by running `bundle install`. You can start the development server by running `bundle exec jekyll serve`.

## Live preview
Once the development server is running, you can preview the website by opening [http://localhost:4000/](http://localhost:4000/) in your browser.
