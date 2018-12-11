<!-- DO NOT EDIT README.md (It will be overridden by README.hbs) -->

# slapshot

slapshot is an NHL API library written in [TypeScript](https://github.com/Microsoft/TypeScript).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Quick start example](#quick-start-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

With yarn

```sh
yarn add @hockeybots/slapshot
```

With npm

```sh
npm i @hockeybots/slapshot
```

## Quick start example

With async/await

```js
import idx from 'idx';
import slapshot from '@hockeybots/slapshot';

...

/**
* Fetch a teams data asynchronously
* returning an array of Team objects
*/
const teams = await slapshot.Teams(1).data();
const team = idx(teams, _ => _[0]);
if(team) {
  console.log(`The ${team.teamName} first appeared in ${team.firstYearOfPlay}`);
}
```

With vanilla promises

```js
import idx from 'idx';
import slapshot from '@hockeybots/slapshot';

...

/**
* Fetch a teams data asynchronously
* returning an array of Team objects
*/
slapshot
  .Teams(1)
  .data()
  .then((teams) => {
    const team = idx(teams, _ => _[0]);
    if(team) {
      console.log(`The ${team.teamName} first appeared in ${team.firstYearOfPlay}`);
    }
  })
  .catch(console.error);
```

Fetch multiple teams

```js
import slapshot from '@hockeybots/slapshot';

...

/**
* Fetch multiple teams data asynchronously
* returning an array of Team objects
*/
const teams = await slapshot.Teams(1,2,3,4).data();
teams.forEach(team =>
  console.log(`The ${team.teamName} first appeared in ${team.firstYearOfPlay}`)
);
```
