# App for Wedding After Party

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Usage

All you have to do is update `/src/app.constants.ts` , this includes the following datum:

```
# IsControlInformationVisible

Boolean
Default: true.

# BackgroundImage

String: Absolute or relative image url should be included.
Default: Use loremflickr API.

# JingleRequired

Boolean: Which jingle is required when toggle each award panels.
Default: true, /src/assets/jingles/toggle.mp3 is set in /src/awards/awards.component.ts.

# Teams

ITeam (described into app.component.ts): Team-name (string), Team-color (string) is editable.
Default: The below:

[
  { name: 'α', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) },
  { name: 'β', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) },
  { name: 'γ', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) },
  { name: 'δ', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) },
  { name: 'ε', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) },
  { name: 'ζ', point: 0, color: '#'+((1<<24)*Math.random()|0).toString(16) }
]

# Awards

IAward (described into app.component.ts): Award title (string), Award image url (absolute or relative path).
Default: The below:

[
  {
    title: 'AAA',
    imageUrl: 'https://loremflickr.com/160/160?lock=1',
    isOpened: false
  },
  {
    title: 'BBB',
    imageUrl: 'https://loremflickr.com/160/160?lock=2',
    isOpened: false
  },
  {
    title: 'CCC',
    imageUrl: 'https://loremflickr.com/160/160?lock=3',
    isOpened: false
  },
  {
    title: 'DDD',
    imageUrl: 'https://loremflickr.com/160/160?lock=4',
    isOpened: false
  },
  {
    title: 'EEE',
    imageUrl: 'https://loremflickr.com/160/160?lock=5',
    isOpened: false
  },
  {
    title: 'FFF',
    imageUrl: 'https://loremflickr.com/160/160?lock=6',
    isOpened: false
  },
  {
    title: 'GGG',
    imageUrl: 'https://loremflickr.com/160/160?lock=7',
    isOpened: false
  },
  {
    title: 'HHH',
    imageUrl: 'https://loremflickr.com/160/160?lock=8',
    isOpened: false
  },
  {
    title: 'III',
    imageUrl: 'https://loremflickr.com/160/160?lock=9',
    isOpened: false
  },
  {
    title: 'JJJ',
    imageUrl: 'https://loremflickr.com/160/160?lock=10',
    isOpened: false
  },
  {
    title: 'KKK',
    imageUrl: 'https://loremflickr.com/160/160?lock=11',
    isOpened: false
  },
  {
    title: 'LLL',
    imageUrl: 'https://loremflickr.com/160/160?lock=12',
    isOpened: false
  },
  {
    title: 'MMM',
    imageUrl: 'https://loremflickr.com/160/160?lock=13',
    isOpened: false
  },
  {
    title: 'NNN',
    imageUrl: 'https://loremflickr.com/160/160?lock=14',
    isOpened: false
  },
  {
    title: 'OOO',
    imageUrl: 'https://loremflickr.com/160/160?lock=15',
    isOpened: false
  },
  {
    title: 'PPP',
    imageUrl: 'https://loremflickr.com/160/160?lock=16',
    isOpened: false
  },
  {
    title: 'QQQ',
    imageUrl: 'https://loremflickr.com/160/160?lock=17',
    isOpened: false
  },
  {
    title: 'RRR',
    imageUrl: 'https://loremflickr.com/160/160?lock=18',
    isOpened: false
  }
]
```

## Note

This app does not have any relationship with DB or Local/SessionStorage service, when you close or refresh browser statuses will be reset. Angular CanDeactivate prevents unintentional controls.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

MIT.
