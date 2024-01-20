# GitHub Repo Viewer

## Overview

- Seamlessly view a GitHub user's profile information and public repositories in a visually appealing and user-friendly interface.<br>
- Fetches data directly from the GitHub API for real-time updates.<br>
- Navigate through multiple pages of repositories with ease using pagination.<br>
## Live Demo

*Explore the project here*: https://omvibhandik.github.io/Fyle-GitHub_RepoViewer/

## Technologies Used

- HTML<br>
- CSS<br>
- Bootstrap<br>
- JavaScript<br>
- GitHub API<br>
## Setup and Installation

1. Clone or download the repository from GitHub.<br>
2. Open index.html in a web browser to start using the application.<br>
3. No additional setup or libraries are required.<br>
## Usage

1. Upon launch, the application displays a loading screen while fetching data.
2. Once data is retrieved, the user's profile information and repositories are presented.
3. Navigate between pages of repositories using the pagination links located below the repository list.
## Project Structure

- index.html: Main HTML file defining the structure of the application.<br>
- index.css: Contains styling rules for the application's visual appearance.<br>
- index.js: Houses the JavaScript code responsible for functionality and interaction with the GitHub API.<br>
## Features

#### **User Information:**
- Displays the user's profile picture, name, bio, location, and Twitter link (if available).<br>
#### **Repository Display:**
- Lists repository titles and descriptions in a clear and organized manner.<br>
- Highlights the programming languages used in each repository with buttons for easy identification.<br>
#### **Pagination:**
- Browse through multiple pages of repositories using Bootstrap's pagination component.<br>

## Code Logic Breakdown

> - loadPage function:
>> - Fetches repository data from the GitHub API.
>> - Renders repositories on the page in a grid format.
>
> - userAction function:
>> - Fetches user data from the GitHub API.
>> - Updates the page with user information.
>> - Calls loadPage to display repositories.
>
> - Pagination:
>> - Implemented using Bootstrap's pagination component.
>> - Event listeners handle page navigation.
>


## Additional Notes

Currently, the application displays repositories for a hardcoded GitHub username (*OmVibhandik*).<br>
