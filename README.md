Description

This Next.js application provides a user-friendly interface to explore country data from the CountryAPI (https://countryapi.io/). Features include:

Interactive Header: Displays the application title and a theme switcher.
Search and Filter: Filter countries by name and region using a search bar and dropdown.
Country Cards: Visually appealing cards showcasing each country's flag, name, population, region, and capital.
Detailed Country Pages: Access in-depth information about a specific country by clicking on its card.
Error Handling: Gracefully handles potential errors during data fetching and displays a user-friendly message.
Responsive Design: Adapts to different screen sizes for optimal viewing experience.
Installation


Start the development server: npm run dev (or yarn dev)
Access the application in your browser (usually at http://localhost:3000).
Project Structure

components: Reusable UI components (e.g., MainHeader, CountriesList, CountryCard).
global-types: TypeScript interfaces defining data structures (e.g., CountriesType, Country).
lib: Utility functions (e.g., fetcher).
pages: Application pages (e.g., Home, CountryPage).
Running the Application

The Home page component fetches all countries initially using the fetcher function and renders the CountriesList component with the fetched data.

Country Detail Pages

The CountryPage component fetches detailed information for a specific country based on the name parameter in the URL. It displays various data points about the country, including:

Flag
Native Names
Population
Region
Sub Region
Capital
Top Level Domain
Currencies
Languages
Border Countries (if applicable)
Error Handling



Next Steps

Implement pagination for large datasets of countries.
Consider adding functionalities like sorting or filtering by specific criteria.
Explore integrating additional data sources or APIs for a richer user experience.