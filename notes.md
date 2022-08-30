# Notes

## React hooks

### useState

In class components, we can access the state by doing: `this.state = ...`. However, in functional components, there is no `this` keyword,
so we need to use the state hook.

Additionally, we can not mutate the state directly. Therefore, when trying to update the state, we should:

- Use functions (such as filter or map) that create a new array instead of mutating the original one
- use the setState hook (in functional components)

### useEffect

![image](https://paper-attachments.dropbox.com/s_EAEEAE9063B0CA7CBC6574F36123E82B36B6C1EC3724A86DA7C0B4C67C2DD652_1645380076460_explaining+useeffect+local+storage.jpg)

Structure of how hooks works with localstorage to set items

## Links and References

### Tutorials

[freeCodeCamp: how to use localStorage with React Hooks to Get and Set Items](https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/)

### Explanations

#### React Hooks

[A Simple Explanation of React.useEffect() by Dmitri Pavlutin](https://dmitripavlutin.com/react-useeffect-explanation/)

### Organize later

- <https://bobbyhadz.com/blog/react-update-object-in-array>
- <https://felixgerschau.com/react-localstorage/>
- <https://dmitripavlutin.com/react-useeffect-explanation/#1-useeffect-is-for-side-effects>
