# Elewa Intermediary Assessment

## Apprenticeship Assessment

## Cloning Elewa Website

### Technologies Used

1. **React**: Used to build the frontend by employing components.

2. **TypeScript**: TypeScript is a statically typed superset of the JavaScript language. It improves the readability and maintainability of the website, making it easier to debug when encountering bugs.

3. **CSS**: Used for styling the components in the project to enhance visual appeal.

## Tools/Libraries Utilized

1. React router: for navigation

2. useState and useEffect: for updating the website with data from json

3. JSON: acts as the server side for the Application


## File tree -structure

├── App.tsx
├── assets
│   └── react.svg
├── index.css
├── main.tsx
├── Models
│   ├── Analysis.ts
│   ├── Beyond.ts
│   ├── Cooperative.ts
│   ├── Footer.ts
│   ├── HeaderInvest.ts
│   ├── Header.ts
│   ├── Landing.ts
│   ├── Open.ts
│   ├── Project.ts
│   └── Social.ts
├── Pages
│   ├── About.tsx
│   ├── Invest.tsx
│   └── SocialImpact.tsx
├── Styles
│   ├── Analysis.css
│   ├── Beyond.css
│   ├── Cooperative.css
│   ├── Footer.css
│   ├── Header.css
│   ├── Landing.css
│   ├── Open.css
│   ├── Project.css
│   └── Social.css
├── ViewModels
│   ├── useAnalysisData.ts
│   ├── useBeyondData.ts
│   ├── useCooperativeData.ts
│   ├── useFooterData.ts
│   ├── useHeaderData.ts
│   ├── useHeaderInvest.ts
│   ├── useLandingData.ts
│   ├── useOpenData.ts
│   ├── useProjectData.ts
│   └── useSocialData.ts
├── Views
│   ├── Analysis.tsx
│   ├── Beyond.tsx
│   ├── Cooperative.tsx
│   ├── Footer.tsx
│   ├── HeaderInvest.tsx
│   ├── Header.tsx
│   ├── Landing.tsx
│   ├── Open.tsx
│   ├── Project.tsx
│   └── Social.tsx
└── vite-env.d.ts

6 directories, 47 files

## How to Set Up

1. **Repository link**:
```sh
https://github.com/JobKoech610/Elewa-Intermediary-Assessment
```

2. Clone the repo using ssh key

```sh
git clone git@github.com:JobKoech610/Elewa-Intermediary-Assessment.git
```

3. Change directory to the project's directory using:

```sh
cd Elewa-Test-One
```

4. Install the required dependencies by running this command in the terminal:

```sh
npm install
```

5. Run the website-APP by:

```sh
npm run dev
```
The website will  run on http://localhost:5173/.

6. Start/Run the backend (json data) by watching json on a seperate terminal at root directory of the application (/Elewa-Test-One):

```sh
json-server --watch db.json --port 3001
```

7. To access the social-impact, Invest and About page here are the links: 

- social-impact: http://localhost:5173/social-impact

- About page : http://localhost:5173/about

- Invest page: http://localhost:5173/invest


## Features


1. **Dynamic Content**: The application dynamically loads and displays content for displaying in the website from the json data.

2. **Navigation**: Application enable links navigation using routers.

3. **Interactive UI**: visual appealing website.



## License and copyright

- This project is licensed under terms of the General Public License (GPLv-3.0).

- You are granted permission to use, modify, and contribute to the project under (GPLv-3.0 license.) 

## Author

Project was created by @Job.




