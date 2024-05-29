# Search Component Application

A React application that allows users to search for books using the Open Library API. The search bar is integrated into a navigation bar that stays sticky at the top of the page. This project uses TypeScript, SCSS, and various modern React practices such as custom hooks and component-based architecture.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Hooks](#hooks)
- [Services](#services)
- [Styling](#styling)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- Search for books using the Open Library API.
- Sticky navigation bar with an integrated search bar.
- Debounced search input to optimize API calls.
- Pagination for navigating through search results.
- Modular and maintainable code structure using TypeScript and SCSS.

## Project Structure

```
search-component/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── global.scss
│   ├── components/
│   │   ├── common/
│   │   │   ├── Loader.tsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.scss
│   │   │   ├── index.ts
│   │   ├── SearchComponent/
│   │   │   ├── SearchInput/
|   |   |        ├── SearchInput.tsx
|   |   |        ├── SearchInput.scss
|   |   |        ├── SearchInput.test.tsx
│   │   │   ├── SearchResults/
│   │   │        ├── SearchResults.tsx
|   |   |        ├── SearchResults.scss
|   |   |        ├── SearchResults.test.tsx
│   │   │   ├── index.ts
│   ├── hooks/
│   │   ├── useDebounce.ts
│   │   ├── useSearch.ts
│   ├── services/
│   │   └── bookService.ts
│   ├── utils/
│   │   └──helpers.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── setupTests.ts
├── jest.config.js
├── package.json
├── tsconfig.json

```

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/AlyssaWendt/search-component.git
cd search-component
npm install
```

## Usage
To start the development service run:
```bash
npm start
```

## Componenets 

### Navbar
* <strong>File</strong>: `src/components/Navbar/Navbar.tsx`
* <strong>Description</strong>: The navigation bar that contains the search bar and remains sticky at the top of the page.

### SearchComponent
* <strong>File</strong>: `src/components/SearchComponent/SeachInput/SearchInput.tsx`
* <strong>Description</strong>: The SearchInput component is a controlled input field that allows users to enter their search query. It takes in the current search term and a function to update the search term as props. This component handles user input and updates the parent component's state accordingly

* <strong>File</strong>: `src/components/SearchComponent/SeachResults/SearchResults.tsx`
* <strong>Description</strong>: The SearchResults component is responsible for displaying the search results. It takes in the list of books, the current page number, a function to update the page number, and the loading and error states as props. This component displays the search results in a list, handles pagination, and shows loading and error messages when necessary.

### Loader
* <strong>File</strong>: `src/components/common/Loader.tsx`
* <strong>Description</strong>: A simple loading spinner component used to indicate data loading.

## Hooks

### useDebounce
* <strong>File</strong>: `src/hooks/useDebounce.ts`
* <strong>Description</strong>: A custom hook to debounce the input value, delaying the update until the user stops typing.

### useSearch
* <strong>File</strong>: `src/hooks/useSearch.ts`
* <strong>Description</strong>: A custom hook to manage the search functionality, including fetching data from the API and handling loading and error states.

## Services

### bookService
* <strong>File</strong>: `src/services/bookService.ts`
* <strong>Description</strong>: A module for fetching book data from the Open Library API.

## Styling

### Global Styles
* <strong>File</strong>: `src/assets/styles/global.scss`
* <strong>Description</strong>: Contains global styles that apply across the entire application.

### Component Styles
* <strong>File</strong>: `src/components/Navbar/Navbar.scss`
* <strong>Description</strong>: Styles specific to the Navbar component.
* <strong>File</strong>: `src/components/SearchComponent/SearchInput.scss`
* <strong>Description</strong>: Styles specific to the SearchInput
* <strong>File</strong>: `src/components/SearchComponent/SearchResults.scss`
* <strong>Description</strong>: Styles specific to the SearchResults

## Testing

### SearchComponent Tests
* <strong>File</strong>: `src/components/SearchComponent/SeachInput/SeachInput.test.tsx`
* <strong>Description</strong>: The SearchResults component is responsible for displaying the search results. It takes in the list of books, the current page number, a function to update the page number, and the loading and error states as props. This component displays the search results in a list, handles pagination, and shows loading and error messages when necessary.

* <strong>File</strong>: `src/components/SearchComponent/SeachResults/SeachResults.test.tsx`
* <strong>Description</strong>: This file contains unit tests for the SearchResults component. It tests the rendering of loading indicators, error messages, and the list of books. It also verifies that pagination buttons correctly call the setPage function and that the previous button is disabled on the first page.

To run the test use the following command:
```bash
npm test
```

# Contributing

Contributing are welcome! Please open an issue or submit a pull request for any changes or enhancement
