<!-- DO NOT EDIT README.md (It will be overridden by README.hbs) -->

# slapshot

slapshot is an NHL API library written in TypeScript.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Installation](#installation)
  - [Quick start example](#quick-start-example)
- [API](#api)
  - [Classes](#classes)
  - [Members](#members)
  - [Constants](#constants)
  - [Endpoint](#endpoint)
  - [People](#people)
  - [Teams](#teams)
    - [teams.withRoster()](#teamswithroster)
    - [Teams.toConference(apiData) ⇒](#teamstoconferenceapidata-%E2%87%92)
  - [RECORDS\_API\_ENDPOINT ⇒ <code>string</code>](#records%5C_api%5C_endpoint-%E2%87%92-codestringcode)
  - [genEndpoint](#genendpoint)
  - [TEAMS\_ENDPOINT](#teams%5C_endpoint)
  - [STATS\_API\_ENDPOINT](#stats%5C_api%5C_endpoint)

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

# API
## Classes

<dl>
<dt><a href="#Endpoint">Endpoint</a></dt>
<dd><p>The Endpoint abstract class
All endpoints, for example {Team} extend Endpoint</p></dd>
<dt><a href="#People">People</a></dt>
<dd><p>People endpoint wrapper</p></dd>
<dt><a href="#Teams">Teams</a></dt>
<dd><p>Teams endpoint wrapper</p></dd>
</dl>

## Members

<dl>
<dt><a href="#RECORDS_API_ENDPOINT">RECORDS_API_ENDPOINT</a> ⇒ <code>string</code></dt>
<dd><p>Composes BASE_ENDPOINT with the target path to create a valid endpoint</p></dd>
<dt><a href="#genEndpoint">genEndpoint</a></dt>
<dd><p>API endpoints for the NHL Stats API.</p></dd>
<dt><a href="#TEAMS_ENDPOINT">TEAMS_ENDPOINT</a></dt>
<dd><p>API endpoints for the NHL Records API</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#STATS_API_ENDPOINT">STATS_API_ENDPOINT</a></dt>
<dd><p>Base endpoint of the NHL Stats API and Records API</p></dd>
</dl>

<a name="Endpoint"></a>

## Endpoint
<p>The Endpoint abstract class
All endpoints, for example {Team} extend Endpoint</p>

**Kind**: global class  
<a name="People"></a>

## People
<p>People endpoint wrapper</p>

**Kind**: global class  
<a name="Teams"></a>

## Teams
<p>Teams endpoint wrapper</p>

**Kind**: global class  

* [Teams](#Teams)
    * _instance_
        * [.withRoster()](#Teams+withRoster)
    * _static_
        * [.toConference(apiData)](#Teams.toConference) ⇒

<a name="Teams+withRoster"></a>

### teams.withRoster()
<p>Fluen API methods</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams.toConference"></a>

### Teams.toConference(apiData) ⇒
<p>This method will transform API data in to a Conference object.</p>

**Kind**: static method of [<code>Teams</code>](#Teams)  
**Returns**: <p>Conference</p>  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The conference object of the response from the NHL API</p> |

<a name="RECORDS_API_ENDPOINT"></a>

## RECORDS\_API\_ENDPOINT ⇒ <code>string</code>
<p>Composes BASE_ENDPOINT with the target path to create a valid endpoint</p>

**Kind**: global variable  
**Returns**: <code>string</code> - <p>The composed endpoint</p>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | <p>The target path, for example &quot;teams&quot; or &quot;people&quot;</p> |

<a name="genEndpoint"></a>

## genEndpoint
<p>API endpoints for the NHL Stats API.</p>

**Kind**: global variable  
<a name="TEAMS_ENDPOINT"></a>

## TEAMS\_ENDPOINT
<p>API endpoints for the NHL Records API</p>

**Kind**: global variable  
<a name="STATS_API_ENDPOINT"></a>

## STATS\_API\_ENDPOINT
<p>Base endpoint of the NHL Stats API and Records API</p>

**Kind**: global constant  
