# MovieScope 🎬

A movie discovery app built with React and the TMDB API — browse popular movies, search for any title, view details, and save favourites.

**Live Link:** https://movie-scope-black.vercel.app/

**Repo Link:** https://github.com/mahnoorseemab/MovieScope

## Features

- Browse popular movies fetched from TMDB
- Search movies by title
- View detailed info for each movie (overview, rating, release date, popularity)
- Add/remove favourites, persisted in localStorage
- Fully responsive across mobile, tablet, and desktop
- Loading states with poster preloading (no flash of missing images)

## Tech Stack

- React
- React Router (navigation)
- Context API (state management)
- Tailwind CSS
- TMDB API

## Getting Started

```bash
git clone https://github.com/mahnoorseemab/MovieScope.git
cd MovieScope
npm install
```

Create a `.env` file in the root:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Run the dev server:

```bash
npm run dev
```

## Project Structure

```
src/
  components/
    Navbar.jsx            # Top navigation bar
    HomePage.jsx           # Popular movies grid + search
    MovieCard.jsx           # Movie card for the popular movies grid
    MovieDetail.jsx         # Movie detail page
    SearchResult.jsx        # Search results page
    SearchedDataCard.jsx     # Movie card for search results
    Favourites.jsx          # Favourites page
    FavouritesCard.jsx       # Movie card for favourites
    LoadingSpinner.jsx       # Loading spinner component
    BackButton.jsx           # Reusable back button
  context/
    FavouritesContext.jsx    # Favourites & loading state context
  App.jsx
  main.jsx
```
