# To Snake Case
This is a utility module for converting text from camel case i.e. `displayName` to snake case i.e. `display_name`.  That's all it does, nothing fancy here.
Basically the algorithm looks through a string, where it finds a capital letter, it adds an underscore before it and converts all text to lower case, then if you supplied true for the second parameter it converts the text to upper case before returning it to you.

### Usage

Install via npm - `npm install @corpsmap/to-snake-case --save` note that the --save is optional, use if you want to include it in your package.json as a dependancy.

```
var toSnake = requir('@corpsmap/to-snake-case');
var text = 'camelCase';
var newText = toSnake(text);
console.log(newText)

> "camel_case"
```

### Parameters

|Name|Required|Description|
|---|---|---|
|text|Required|Camel cased (or not) text you want to convert to snake case.|
|upperCase|Optional, default = `false`|Boolean, `true` to convert the result to upper case, `false` to get lower case text|
