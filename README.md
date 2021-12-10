# baseVite
Base Template for vanilla Javascript using the [**Vite**](https://vitejs.dev/) build tool.
#### To use starting a new project:
```Shell
npx degit gbruneau/baseVite myNewApplicationName
cd myNewApplicationName
npm install
``` 
#### Before build
Change the file `vite.config.js` to set the output directory (`outDir`) properly. 
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
```
𝐦𝐲𝐍𝐞𝐰𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐍a𝐦𝐞/
   ┣━ 𝐝𝐢𝐬𝐭/
   ┃   ┗━ 𝐦𝐲𝐍𝐞𝐰𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐍a𝐦𝐞/
   ┃         ┣━ assets
   ┃         ┣━ index.html
   ┃         ┗━ manifest.json
   ┣━ 𝐧𝐨𝐝𝐞_𝐦𝐨𝐝𝐮𝐥𝐞𝐬/
   ┣━ 𝐬𝐫𝐜/
   ┃   ┣━ 𝐢𝐦𝐚𝐠𝐞/
   ┃   ┣━ style.css
   ┃   ┣━ index.css
   ┃   ┗━ main.js
   ┣━ .gitignore
   ┣━ vite.config.js
   ┣━ package.json
   ┗━ README.md
   ```
