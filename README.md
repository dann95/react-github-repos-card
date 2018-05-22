# React github repositories card

## Why?
> Just have fun and learn some things of React.

## Should i use this?
> Nah, it's just a test, and not finished yet :C

## Usage
```html
<div id="repos"></div>
<script>
    ghrepos(
        document.getElementById('repos') // DOM Element,
        'torvalds', // github user
        {} // options
    )
</script>
```

## Options
> This is the default options object, by passing an object as third argument it will merge with default settings and render the card, so be free to modify any of properties.

```js
{
    forks: true,
    button:{
        color: '#2a4366',
        text: 'repositories',
        textColor: '#fff'
    },
    container: {
        color: '#725252',
        strip: '#AB6D7D',
        text: '#fff',
        icons: '#AB7C94'
    }
}
```