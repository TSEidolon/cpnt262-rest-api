# CPNT 262 Assignment 1 - Fetching API Data
## By: Edgar Caballero

Troubleshooting:
1. Had trouble referencing a URL for the API since it did not have an object with its own url to it.
  - I went to the <a href="https://gadhagod.github.io/Hyrule-Compendium-API/#/" target="_blank"> Hyrule compendium API</a> website and realized that there was a way to display certain data by their ID numbers.
```
 <a href="https://botw-compendium.herokuapp.com/api/v2/entry/${monsterData.id}" target="_blank">Raw Data</a>

```

2. `addEventListener` did not work due to me referencing the <strong> parent element instead of the child element </strong> that I was targeting.
  - Fixed when I properly referenced the element

Attributions:
1. <a href="https://www.youtube.com/watch?v=V_Kr9OSfDeU " target="_blank"> Async await video</a> 
2. <a href="https://www.youtube.com/watch?v=y17RuWkWdn8" target="_blank"> DOM Manipulation for JavaScript</a> 
3. <a href="http://www.javascriptkit.com/javatutors/trycatch2.shtml" target="_blank"> Error and throw new error</a> 
 - Used to define the error and throw new error commands since i was still confused on their differences.
    - "`throw new Error`" throws your own exeptions to force it to happen on demand instead of waiting for other errors above it to occur.
    - "`Error`" gets passed into the catch clause when an error event occurs.

4. Tony Grimes for the <a href="https://github.com/sait-wbdv/in-class-w22/blob/main/02-17-exceptions-apis/02-disney-demo-starter/js/app.js" target="_blank"> Disney demo starter code</a> .