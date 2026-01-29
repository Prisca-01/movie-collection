# 🎬 Movie Collection Project

## 📍 Project Overview

The Movie Collection project is a beginner-friendly frontend application built as part of the Rise Academy program. It displays a collection of movies loaded from a JSON file and allows users to filter movies by genre. The project focuses on practicing core web development concepts and collaborative Git workflows.

## ⚙️ Project Setup Instructions

### Prerequisites

- Git
- A modern web browser
- VS Code (recommended)
- Live Server extension (for local development)

### Setup Steps

git clone https://github.com/Prisca-01/movie-collection.git
cd movie-collection
git checkout development


### Open the project in VS Code:

code .

Run the project using Live Server to ensure the JSON file loads correctly.

## 🧰 Available CLI Commands Used

git init
git add .
git commit -m "commit message"
git branch -M main
git checkout -b branch-name
git fetch origin
git pull origin development
git merge development
git push origin branch-name


These commands were used to initialize the project, manage branches, synchronize with the remote repository, and collaborate effectively.

## 🔄 Git Workflow Steps

1. Main branch
Reserved for stable releases

2. Development branch
Central integration branch for all features

3. Feature branches
Each feature is developed in its own branch (e.g. movie-cards, data, features/display-movie-cards, feature/filter-by-genre)

4. Pull Requests
Feature branches are pushed to GitHub
Pull requests are created against development
Code reviews are requested before merging

5. Merge
Approved pull requests are merged into development

## ✨ Features & Implementation Details

1. Movie Display
Movies are fetched asynchronously from a local movies.json file

Each movie is rendered as a card with:
Title
Release year
Genre
Description
Poster image

2. Genre Filtering

Genres are dynamically extracted from movie data
A dropdown allows users to filter movies by genre
Filtering logic is handled in JavaScript using array methods

## 📂 Project Structure

movie-collection/
│
├── assets
├── css/
│   └── style.css
├── images/
├── js/
│   ├── app.js
│   └── data/
│       └── movies.json
├── index.html
└── README.md

## 👥 Team Member Contributions

### Prisca (Repository Owner)

- Project setup and repository initialization
- Git workflow management
- Movie data structure setup
- Filtering by genre feature
- Code reviews and pull request management

### Esther (Collaborator)

- Git workflow management
- CSS styling and layout improvements
- Implemented movie card rendering
- Movie card UI enhancements
- Code contributions reviewed and merged via PRs
- Code reviews and pull request management

### 📚 Lessons Learned from Collaboration

- Importance of working with feature branches to keep the repository clean and organized  
- Writing clear and meaningful commit messages  
- How to request, review, and approve pull requests  
- Resolving merge conflicts calmly and correctly  
- Keeping features scoped to their respective branches  
- Collaborating effectively with a team member
- Clear communication improves overall team productivity  
- Understanding that pulling changes locally does not mean merging them
