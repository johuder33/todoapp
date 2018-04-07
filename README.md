## TODO App Demo

### Getting started

To use our amazing todo apps, you just need some few steps

1. Clone this repository into your machine
2. Once cloned, exec this command `yarn install`
3. Once installed all dependencies, run this command `yarn start`
4. That's all enjoy creating todo everwhere. :sunglasses:

## Project structure

Why I use my current folder structure ? 

For the first time I wanted to make a mix between 2 types of folder structure.

1. Some kind of for large scalable application, where I join the features (components, pages) as they are related to each other

2. For a basic setup folder structure, so for this app it's ok, do in that way, because is simple for this purpose.

As you can see, I put together each component with its styles, actions, controllers, container, etc, this is really helpful when your app starts to grow, why ? because when you start to read your code, it's easier because all needed code it's just in one place and it avoid to jump to side to side to see which files are used.

For a really big application, maybe it's good to use some pattern as Singleton, for register our miniapps (components or views), register custom reducers, and routes, why it would be so great ? because you turn your code into an API for developers can use it, and developers can extend your code but no break it, so it's related to SOLID principles.