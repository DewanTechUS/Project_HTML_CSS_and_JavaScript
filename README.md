# Per Scholas – HTML, CSS, and JavaScript Project
## IP Address Tracker

# Author
- Dewan Mahmud (Rocky)
- Per Scholas Software Engineering
- GitHub: https://github.com/DewanTechUS
- Portfolio: https://dewantech.com
- 

# This project is an IP Address Tracker application that allows users to search any public IP address or domain name and view location details. The application displays important information such as IP, region, timezone, and Internet Service Provider, and it also updates a live map based on the search result.

# The project was built using:
## Technology Source
- IP Geolocation API	https://geo.ipify.org
- LeafletJS Map Library	https://leafletjs.com
- OpenStreetMap Tiles	https://www.openstreetmap.org (Optional, I didnt use it)

# HTML, CSS, JavaScript	Core front-end tools used
## Features

- Displays user's own IP and location on initial page load
- Allows searching any IP or domain and returns live data
- Shows IP details including location, timezone, and ISP
- Map automatically updates using latitude and longitude returned from the API
- Fully responsive layout for mobile and desktop

# How to Run
- Download or clone the repository
- Open index.html in any browser

# Insert your API key inside script.js
(Generated free at https://geo.ipify.org)

# Search an IP or domain. The map and data will update instantly.
## What I Struggled With

- While developing this project, I struggled most with:
- Understanding how APIs return data and how to access specific responses such as location.lat and location.lng.
- Learning how LeafletJS works, especially how to set the map position and move markers based on new search results.
- Making the layout responsive for mobile and desktop while keeping the design clean.
- Handling invalid input or missing results and preventing errors in the console.
- Connecting the search box to the API so that the map updates every time a user searches.
- Through researching documentation and testing line by line, I was able to fix errors and understand the flow much better. Debugging and re-writing sections of code helped me learn how APIs and maps communicate together.

# Future Plans and Improvements
- Add a search history feature that stores past IP lookups
- Add a dark/light theme option for better accessibility and user comfort
- Improve error handling for incorrect IP formats or unreachable API responses
- Add flags or country icons visually for each search
- Add animations and transitions for smoother UI movement
- Expand the project later into a cybersecurity awareness tool

# Special Thanks

- I would like to express my sincere appreciation to my instructors Tishana Trainor and Bryan Santos. Their teaching style, discipline, and guidance pushed me, challenged me, and helped me grow into a stronger developer. They trained us with a standard that felt professional, structured, and industry-focused. Every lesson sharpened me the way iron sharpens iron.

- I also want to thank my classmates in Cohort Per Scholas Atlanta - RTT-57 (2025). We learned, built, struggled, and improved together. Their support and determination motivated me throughout this project and throughout this journey.

- If anyone is serious about advancing in technology and wants real growth, structure, and high-level training, Per Scholas Atlanta is a place worth joining. If you want to become strong in software engineering, become the best - because our instructors are among the best and teach like it.

# I have created a separate file in the root directory for project planning.
## Project Planning – IP Address Tracker
## Goal:
## Build an IP Address Tracker application that can:
-	Detect the user's own IP address automatically
-	Search any IP address or domain
-	Show city, region, timezone, ISP
-	Display the location on a map using LeafletJS

## Features Checklist:
1.	Basic HTML structure
2.	Map created using Leaflet
3.	Fetch and display user IP 
4.	Search functionality
5.	Error handling
6.	Mobile responsive layout 

## Requirements:
-	LeafletJS map
-	geo.ipify API
-	IPify API
-	JavaScript DOM handling
-	Fetch API with async/await
-	Clean responsive CSS design
## Next Step:
-	Add better UI styling
-	Improve search result layout
-	Make the project responsive for mobile displays



# Reflection - IP Address Tracker Project

1. What I learned

# During this project I gained a stronger understanding of:
-	Connecting JavaScript to an external API
-	How IP addresses can be converted into location data
-	How to read API documentation and build requests correctly
-	Using async and await to handle asynchronous network calls
-	Updating the UI dynamically based on API responses
-	How LeafletJS renders a world map and updates markers
-	How CSS, HTML, and JavaScript work together as one system

## This project helped me improve my debugging skills, API usage, and map integration.

2. Challenges I faced
# Some challenges I experienced while building this project:
-	First time working with geolocation API responses
-	Handling invalid IP address errors and displaying messages
-	Getting Leaflet map to update correctly when new IPs were searched
-	Organizing files into clean structure (HTML, CSS, JS separated)
-	Understanding how to update DOM elements from API results

## At first, errors were confusing, but step by step testing helped me solve them.

3. What I improved over time
-	UI structure became more organized and readable
-	CSS classes were renamed for consistency
-	Search input validation improved to prevent empty requests
-	Map marker now updates correctly instead of stacking
-	Code comments added for future readability and maintenance

## Each improvement made the project more stable and more professional.

4. What I would like to add in the future
-	Dark / light mode toggle
-	Lookup history (previous IP searches saved)
-	Speed test / ping test feature
-	Reverse lookup (City → show all IP ranges)
-	Security features or warnings for unsafe domains

## The goal is to expand this tool into a complete Internet safety dashboard.

5. Personal Reflection

# This project gave me real confidence.
- I built something practical, visual, and useful.
- I learned how to research problems instead of giving up.
- Step by step, I am improving as a developer through effort and repetition.
- I am proud of this progress and excited to continue building more advanced projects.

