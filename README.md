# Basic React Context Example with useState
A very basic React app with Context, which now can be used within the components, that are wrapped in the "App.js" Context Provider.

## Use it by cloning
1. clone the Repo by pressing the "Code" button and copying the link
2. in the editor do:
3. $ git clone LINK
4. $ cd react-context-template
5. $ npm i
6. $ npm start

## Recreate it by yourself
1. start a new React project with creating a new folder
2. $ cd FOLDERNAME
3. $ create-react-app .
4. $ npm start
5. optional: delete content which is not needed (.css files, jsx content, logo, etc.)
6. open "App.js" and add this before the "function":
```
import { createContext, useState } from "react";
import Component from './Component';
export const exampleContext = createContext({
  data: "",
  setData: () => {}
});
```
7. within the "function", add these before the "return":
```
const [ data, setData ] = useState("Hi from App.js!");
const contextValue = { data, setData };
```
8. within the "return", wrap everything with:
```
<exampleContext.Provider value={contextValue}>
</exampleContext.Provider>
```
9. within the "Component.js" file add this before the "function"
```
import { useContext } from "react";
import { exampleContext } from "./App.js";
```
10. within the "function", add this before the "return":
const { data, setData } = useContext(exampleContext);
11. you can now access the data from "App.js" inside "Component.js" by writing this before the return:
```
console.log(data)
```
or by adding this
within the return:
```
<p>{data}</p>
```
12. to modify the original data (until the page gets refreshed), add a button within the "return":
```
<button onClick={() => setData("Hi from Component.js!")}>Change it</button>
```