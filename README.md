# baseVite
Base Template for vanilla Javascript using the [**Vite**](https://vitejs.dev/) build tool.
#### To star a new project
```Shell
npx degit gbruneau/baseVite myNewApplicationName
cd myNewApplicationName
npm install
``` 
#### Before build
In the file `vite.config.js` , rename the output directory (`outDir`)  
from `BaseVite` to your application name (`myNewApplicationName`). 
```JavaScript
// vite.config.js
export default {
    root: "src",
    base: "./",
    clearScreen: false,
    server: {https: false},
    build:
        {
         𝐨𝐮𝐭𝐃𝐢𝐫: "../dist/𝐦𝐲𝐍𝐞𝐰𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐍a𝐦𝐞",
         manifest: true 
        }    
  }
```
#### Structure
This is the structure given after build.
```
𝐦𝐲𝐍𝐞𝐰𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐍𝐚𝐦𝐞/
   ┣━ 𝐝𝐢𝐬𝐭/
   ┃   ┗━ 𝐦𝐲𝐍𝐞𝐰𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐍𝐚𝐦𝐞/
   ┃         ┣━ 𝐚𝐬𝐬𝐞𝐭𝐬/
   ┃         ┣━ index.html
   ┃         ┗━ manifest.json
   ┣━ 𝐧𝐨𝐝𝐞_𝐦𝐨𝐝𝐮𝐥𝐞𝐬/
   ┣━ 𝐬𝐫𝐜/
   ┃   ┣━ 𝐢𝐦𝐚𝐠𝐞/
   ┃   ┣━ index.css
   ┃   ┣━ main.js
   ┃   ┗━ style.css
   ┣━ .gitignore
   ┣━ package.json
   ┣━ README.md
   ┗━ vite.config.js
   ```
