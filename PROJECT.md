# NetFlix-GPT Project-:

 - Create a Vite app with TailwindCss using TailwindCss docx.
  - [text](https://tailwindcss.com/docs/installation/using-vite)


# Step by Step of Creating NetflixGPT App-:
 - Create Vite App
 - Configure Tailwind
 - Header
 - Routing Of App
 - Login Form
 - Sign Up Form
 - Form Validation
 - useRef Hook -: for Form Validations
 - Authentication -: Google FireBase
 - Deploying App to production
  


---

## Features -:

- Login / SignUp Page-:
  - Sign In / Sign Up form
  - redirect to browse page

  - Sign In -: Email, Password
  - Sign Up -: Name , Email , Password 
  - Build a Sign In and Sign Up form Using Usestate ==> Toggle Feature. if t rue ==> sign In if false ==> Sign Up.

  - If the Very Big Form Is required then use Libray name ====> FORMIK

  - useRef Hooks -: lets you refrence of value that's not needed for rendering
  
  - For Name Validation we use regex-: 
    /^[a-zA-Z ]{2,30}$/.test(name);

  - For Email validation we use Regex
     For Testing-: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  - For Password Validation we use regex-: 
       /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)



---
# Authentication-: Google FireBase with Google Analytics
 - [text](https://console.firebase.google.com)

 - ![alt text](image.png)
 - [text](https://console.firebase.google.com/u/0/project/netflixgpt-vedant/authentication/providers)

---
# Browse Page
- Browse Page()-: Only comes after Authentication.-:
   - Header
   - Main Movie
       - Trailer in BackGround
       - Title & Description
       - Movie Suggestions
          - MovieLists * N   (verticle scrollable)

- NetFlixGpt
   - Search Bar
   - Movie Suggestions
            
