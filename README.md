<!-- DO NOT EDIT README.md (It will be overridden by README.hbs) -->

# slapshot

slapshot is an NHL API library written in [TypeScript](https://github.com/Microsoft/TypeScript).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


  - [Installation](#installation)
  - [Quick start example](#quick-start-example)
- [API](#api)
  - [Classes](#classes)
  - [Constants](#constants)
  - [Functions](#functions)
  - [Typedefs](#typedefs)
  - [*Endpoint*](#endpoint)
    - [*new Endpoint()*](#new-endpoint)
  - [People ⇐ <code>Endpoint</code>](#people-%E2%87%90-codeendpointcode)
    - [new People()](#new-people)
    - [people.data() ⇒ <code>Array.&lt;Player&gt;</code>](#peopledata-%E2%87%92-codearrayltplayergtcode)
    - [people.parseData(apiData) ⇒ <code>Array.&lt;Player&gt;</code>](#peopleparsedataapidata-%E2%87%92-codearrayltplayergtcode)
    - [People.toPlayer(apiData) ⇒ <code>Player</code>](#peopletoplayerapidata-%E2%87%92-codeplayercode)
  - [Teams ⇐ <code>Endpoint</code>](#teams-%E2%87%90-codeendpointcode)
    - [new Teams(...ids)](#new-teamsids)
    - [teams.data() ⇒ <code>Array.&lt;Teams&gt;</code>](#teamsdata-%E2%87%92-codearrayltteamsgtcode)
    - [teams.withRoster() ⇒ <code>Teams</code>](#teamswithroster-%E2%87%92-codeteamscode)
    - [teams.withPreviousGame() ⇒ <code>Teams</code>](#teamswithpreviousgame-%E2%87%92-codeteamscode)
    - [teams.withNextGame() ⇒ <code>Teams</code>](#teamswithnextgame-%E2%87%92-codeteamscode)
    - [teams.withStats() ⇒ <code>Teams</code>](#teamswithstats-%E2%87%92-codeteamscode)
    - [teams.all() ⇒ <code>Teams</code>](#teamsall-%E2%87%92-codeteamscode)
    - [teams.parseData(apiData) ⇒ <code>Array.&lt;Team&gt;</code>](#teamsparsedataapidata-%E2%87%92-codearrayltteamgtcode)
    - [Teams.toConference(apiData) ⇒ <code>Conference</code>](#teamstoconferenceapidata-%E2%87%92-codeconferencecode)
    - [Teams.toDivision(apiData) ⇒ <code>Division</code>](#teamstodivisionapidata-%E2%87%92-codedivisioncode)
    - [Teams.toVenue(apiData) ⇒ <code>Venue</code>](#teamstovenueapidata-%E2%87%92-codevenuecode)
    - [Teams.toTeam(apiData) ⇒ <code>Team</code>](#teamstoteamapidata-%E2%87%92-codeteamcode)
  - [AWARDS\_ENDPOINT : <code>string</code>](#awards%5C_endpoint--codestringcode)
  - [CONFERENCES\_ENDPOINT : <code>string</code>](#conferences%5C_endpoint--codestringcode)
  - [DIVISIONS\_ENDPOINT : <code>string</code>](#divisions%5C_endpoint--codestringcode)
  - [DRAFT\_ENDPOINT : <code>string</code>](#draft%5C_endpoint--codestringcode)
  - [DRAFT\_PROSPECTS\_ENDPOINT : <code>string</code>](#draft%5C_prospects%5C_endpoint--codestringcode)
  - [GAME\_ENDPOINT : <code>string</code>](#game%5C_endpoint--codestringcode)
  - [PEOPLE\_ENDPOINT : <code>string</code>](#people%5C_endpoint--codestringcode)
  - [SCHEDULE\_ENDPOINT : <code>string</code>](#schedule%5C_endpoint--codestringcode)
  - [STANDINGS\_ENDPOINT : <code>string</code>](#standings%5C_endpoint--codestringcode)
  - [STANDINGS\_TYPES\_ENDPOINT : <code>string</code>](#standings%5C_types%5C_endpoint--codestringcode)
  - [STATS\_TYPES\_ENDPOINT : <code>string</code>](#stats%5C_types%5C_endpoint--codestringcode)
  - [TEAMS\_ENDPOINT : <code>string</code>](#teams%5C_endpoint--codestringcode)
  - [ALL\_TIME\_RECORD\_VS\_FRANCHISE\_ENDPOINT : <code>string</code>](#all%5C_time%5C_record%5C_vs%5C_franchise%5C_endpoint--codestringcode)
  - [ATTENDANCE\_RECORDS\_ENDPOINT : <code>string</code>](#attendance%5C_records%5C_endpoint--codestringcode)
  - [DRAFT\_RECORDS\_ENDPOINT : <code>string</code>](#draft%5C_records%5C_endpoint--codestringcode)
  - [FRANCHISE\_DETAIL\_RECORDS\_ENDPOINT : <code>string</code>](#franchise%5C_detail%5C_records%5C_endpoint--codestringcode)
  - [FRANCHISE\_GOALIE\_RECORDS\_ENDPOINT : <code>string</code>](#franchise%5C_goalie%5C_records%5C_endpoint--codestringcode)
  - [FRANCHISE\_RECORDS\_ENDPOINT : <code>string</code>](#franchise%5C_records%5C_endpoint--codestringcode)
  - [FRANCHISE\_SEASON\_RESULTS\_ENDPOINT : <code>string</code>](#franchise%5C_season%5C_results%5C_endpoint--codestringcode)
  - [FRANCHISE\_SKATER\_RECORDS\_ENDPOINT : <code>string</code>](#franchise%5C_skater%5C_records%5C_endpoint--codestringcode)
  - [FRANCHISE\_TEAM\_TOTALS\_ENDPOINT : <code>string</code>](#franchise%5C_team%5C_totals%5C_endpoint--codestringcode)
  - [MILESTONE\_1000\_POINT\_CAREER\_ENDPOINT : <code>string</code>](#milestone%5C_1000%5C_point%5C_career%5C_endpoint--codestringcode)
  - [MILESTONE\_100\_POINT\_SEASON\_ENDPOINT : <code>string</code>](#milestone%5C_100%5C_point%5C_season%5C_endpoint--codestringcode)
  - [MILESTONE\_500\_GOAL\_CAREER\_ENDPOINT : <code>string</code>](#milestone%5C_500%5C_goal%5C_career%5C_endpoint--codestringcode)
  - [MILESTONE\_50\_GOAL\_SEASON\_ENDPOINT : <code>string</code>](#milestone%5C_50%5C_goal%5C_season%5C_endpoint--codestringcode)
  - [MILESTONE\_5\_GOAL\_GAME\_ENDPOINT : <code>string</code>](#milestone%5C_5%5C_goal%5C_game%5C_endpoint--codestringcode)
  - [OFFICIALS\_ENDPOINT : <code>string</code>](#officials%5C_endpoint--codestringcode)
  - [PLAYER\_RECORDS\_ENDPOINT : <code>string</code>](#player%5C_records%5C_endpoint--codestringcode)
  - [PLAYOFFS\_SERIES\_RECORDS\_ENDPOINT : <code>string</code>](#playoffs%5C_series%5C_records%5C_endpoint--codestringcode)
  - [PLAYOFF\_FRANCHISE\_VS\_FRANCHISE\_ENDPOINT : <code>string</code>](#playoff%5C_franchise%5C_vs%5C_franchise%5C_endpoint--codestringcode)
  - [RECORD\_DETAIL\_ENDPOINT : <code>string</code>](#record%5C_detail%5C_endpoint--codestringcode)
  - [TROPHY\_RECORDS\_ENDPOINT : <code>string</code>](#trophy%5C_records%5C_endpoint--codestringcode)
  - [genEndpoint](#genendpoint)
  - [Conference : <code>object</code>](#conference--codeobjectcode)
  - [Division : <code>object</code>](#division--codeobjectcode)
  - [Game : <code>object</code>](#game--codeobjectcode)
  - [Player : <code>object</code>](#player--codeobjectcode)
  - [Team : <code>object</code>](#team--codeobjectcode)
  - [Venue : <code>object</code>](#venue--codeobjectcode)
  - [STATS\_API\_ENDPOINT : <code>string</code>](#stats%5C_api%5C_endpoint--codestringcode)
  - [RECORDS\_API\_ENDPOINT : <code>string</code>](#records%5C_api%5C_endpoint--codestringcode)

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
<dd></dd>
<dt><a href="#People">People</a> ⇐ <code><a href="#Endpoint">Endpoint</a></code></dt>
<dd><p>People endpoint wrapper</p></dd>
<dt><a href="#Teams">Teams</a> ⇐ <code><a href="#Endpoint">Endpoint</a></code></dt>
<dd><p>Teams endpoint wrapper</p></dd>
</dl>

## Constants

<dl>
<dt><a href="#AWARDS_ENDPOINT">AWARDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL distributed awards</p></dd>
<dt><a href="#CONFERENCES_ENDPOINT">CONFERENCES_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL conferences</p></dd>
<dt><a href="#DIVISIONS_ENDPOINT">DIVISIONS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL divisions</p></dd>
<dt><a href="#DRAFT_ENDPOINT">DRAFT_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL draft information</p></dd>
<dt><a href="#DRAFT_PROSPECTS_ENDPOINT">DRAFT_PROSPECTS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL draft proscpect information</p></dd>
<dt><a href="#GAME_ENDPOINT">GAME_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL game information</p></dd>
<dt><a href="#PEOPLE_ENDPOINT">PEOPLE_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL people and player information</p></dd>
<dt><a href="#SCHEDULE_ENDPOINT">SCHEDULE_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL team schedule information</p></dd>
<dt><a href="#STANDINGS_ENDPOINT">STANDINGS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL team standings</p></dd>
<dt><a href="#STANDINGS_TYPES_ENDPOINT">STANDINGS_TYPES_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL standing types</p></dd>
<dt><a href="#STATS_TYPES_ENDPOINT">STATS_TYPES_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL stats types</p></dd>
<dt><a href="#TEAMS_ENDPOINT">TEAMS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL teams</p></dd>
<dt><a href="#ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT">ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL all time records against the target franchise</p></dd>
<dt><a href="#ATTENDANCE_RECORDS_ENDPOINT">ATTENDANCE_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL attendance records</p></dd>
<dt><a href="#DRAFT_RECORDS_ENDPOINT">DRAFT_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL draft records</p></dd>
<dt><a href="#FRANCHISE_DETAIL_RECORDS_ENDPOINT">FRANCHISE_DETAIL_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise record details</p></dd>
<dt><a href="#FRANCHISE_GOALIE_RECORDS_ENDPOINT">FRANCHISE_GOALIE_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise goalie records</p></dd>
<dt><a href="#FRANCHISE_RECORDS_ENDPOINT">FRANCHISE_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise</p></dd>
<dt><a href="#FRANCHISE_SEASON_RESULTS_ENDPOINT">FRANCHISE_SEASON_RESULTS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise results for a target season</p></dd>
<dt><a href="#FRANCHISE_SKATER_RECORDS_ENDPOINT">FRANCHISE_SKATER_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise skater records</p></dd>
<dt><a href="#FRANCHISE_TEAM_TOTALS_ENDPOINT">FRANCHISE_TEAM_TOTALS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL franchise team totals</p></dd>
<dt><a href="#MILESTONE_1000_POINT_CAREER_ENDPOINT">MILESTONE_1000_POINT_CAREER_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL players who have reached 1000 points in a career</p></dd>
<dt><a href="#MILESTONE_100_POINT_SEASON_ENDPOINT">MILESTONE_100_POINT_SEASON_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL players who have reached 100 points in a season</p></dd>
<dt><a href="#MILESTONE_500_GOAL_CAREER_ENDPOINT">MILESTONE_500_GOAL_CAREER_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL players who have scored 500 career goals</p></dd>
<dt><a href="#MILESTONE_50_GOAL_SEASON_ENDPOINT">MILESTONE_50_GOAL_SEASON_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL players who have scored 50 goals in a season</p></dd>
<dt><a href="#MILESTONE_5_GOAL_GAME_ENDPOINT">MILESTONE_5_GOAL_GAME_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL players who have scored 5 goals in a game</p></dd>
<dt><a href="#OFFICIALS_ENDPOINT">OFFICIALS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL officials</p></dd>
<dt><a href="#PLAYER_RECORDS_ENDPOINT">PLAYER_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL player records</p></dd>
<dt><a href="#PLAYOFFS_SERIES_RECORDS_ENDPOINT">PLAYOFFS_SERIES_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL playoff series records</p></dd>
<dt><a href="#PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT">PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL playoff records against each target franchise</p></dd>
<dt><a href="#RECORD_DETAIL_ENDPOINT">RECORD_DETAIL_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL record details</p></dd>
<dt><a href="#TROPHY_RECORDS_ENDPOINT">TROPHY_RECORDS_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Endpoint used for fetching NHL trophies</p></dd>
</dl>

## Functions

<dl>
<dt><a href="#genEndpoint
Composes BASE_ENDPOINT with the target path to create a valid endpoint">genEndpoint
Composes BASE_ENDPOINT with the target path to create a valid endpoint(base, path)</a> ⇒ <code>string</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Conference">Conference</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Conference.</p></dd>
<dt><a href="#Division">Division</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Division.</p></dd>
<dt><a href="#Game">Game</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Game.</p></dd>
<dt><a href="#Player">Player</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Player.</p></dd>
<dt><a href="#Team">Team</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Team.</p></dd>
<dt><a href="#Venue">Venue</a> : <code>object</code></dt>
<dd><p>A representation of an NHL Venue.</p></dd>
<dt><a href="#STATS_API_ENDPOINT">STATS_API_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Base endpoint of the NHL Stats API</p></dd>
<dt><a href="#RECORDS_API_ENDPOINT">RECORDS_API_ENDPOINT</a> : <code>string</code></dt>
<dd><p>Base endpoint of the NHL Records API</p></dd>
</dl>

<a name="Endpoint"></a>

## *Endpoint*
**Kind**: global abstract class  
<a name="new_Endpoint_new"></a>

### *new Endpoint()*
<p>The Endpoint abstract class<br />
All endpoints, for example {Teams} extend Endpoint</p>

<a name="People"></a>

## People ⇐ [<code>Endpoint</code>](#Endpoint)
<p>People endpoint wrapper</p>

**Kind**: global class  
**Extends**: [<code>Endpoint</code>](#Endpoint)  

* [People](#People) ⇐ [<code>Endpoint</code>](#Endpoint)
    * [new People()](#new_People_new)
    * _instance_
        * [.data()](#People+data) ⇒ [<code>Array.&lt;Player&gt;</code>](#Player)
        * [.parseData(apiData)](#People+parseData) ⇒ [<code>Array.&lt;Player&gt;</code>](#Player)
    * _static_
        * [.toPlayer(apiData)](#People.toPlayer) ⇒ [<code>Player</code>](#Player)

<a name="new_People_new"></a>

### new People()
<p>An abstraction of the {PEOPLE_ENDPOINT} with a fluent API</p>

<a name="People+data"></a>

### people.data() ⇒ [<code>Array.&lt;Player&gt;</code>](#Player)
<p>This method is used after building of the URI is complete. It will fetch and parse the NHL API data.</p>

**Kind**: instance method of [<code>People</code>](#People)  
<a name="People+parseData"></a>

### people.parseData(apiData) ⇒ [<code>Array.&lt;Player&gt;</code>](#Player)
<p>This method will parse the raw NHL API data in to an array of Player objects.</p>

**Kind**: instance method of [<code>People</code>](#People)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The raw NHL API data</p> |

<a name="People.toPlayer"></a>

### People.toPlayer(apiData) ⇒ [<code>Player</code>](#Player)
<p>This method will transform API data in to a Player object.</p>

**Kind**: static method of [<code>People</code>](#People)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The conference object of the response from the NHL API</p> |

<a name="Teams"></a>

## Teams ⇐ [<code>Endpoint</code>](#Endpoint)
<p>Teams endpoint wrapper</p>

**Kind**: global class  
**Extends**: [<code>Endpoint</code>](#Endpoint)  

* [Teams](#Teams) ⇐ [<code>Endpoint</code>](#Endpoint)
    * [new Teams(...ids)](#new_Teams_new)
    * _instance_
        * [.data()](#Teams+data) ⇒ [<code>Array.&lt;Teams&gt;</code>](#Teams)
        * [.withRoster()](#Teams+withRoster) ⇒ [<code>Teams</code>](#Teams)
        * [.withPreviousGame()](#Teams+withPreviousGame) ⇒ [<code>Teams</code>](#Teams)
        * [.withNextGame()](#Teams+withNextGame) ⇒ [<code>Teams</code>](#Teams)
        * [.withStats()](#Teams+withStats) ⇒ [<code>Teams</code>](#Teams)
        * [.all()](#Teams+all) ⇒ [<code>Teams</code>](#Teams)
        * [.parseData(apiData)](#Teams+parseData) ⇒ [<code>Array.&lt;Team&gt;</code>](#Team)
    * _static_
        * [.toConference(apiData)](#Teams.toConference) ⇒ [<code>Conference</code>](#Conference)
        * [.toDivision(apiData)](#Teams.toDivision) ⇒ [<code>Division</code>](#Division)
        * [.toVenue(apiData)](#Teams.toVenue) ⇒ [<code>Venue</code>](#Venue)
        * [.toTeam(apiData)](#Teams.toTeam) ⇒ [<code>Team</code>](#Team)

<a name="new_Teams_new"></a>

### new Teams(...ids)
<p>An abstraction of the {TEAMS_ENDPOINT} with a fluent API</p>


| Param | Type | Description |
| --- | --- | --- |
| ...ids | <code>Array.&lt;number&gt;</code> | <p>Target team id's</p> |

<a name="Teams+data"></a>

### teams.data() ⇒ [<code>Array.&lt;Teams&gt;</code>](#Teams)
<p>This method is used after building of the URI is complete. It will fetch and parse the NHL API data.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+withRoster"></a>

### teams.withRoster() ⇒ [<code>Teams</code>](#Teams)
<p>This method will add the necessary query string to the URI for including the roster data.
When parsing the API data we map all people ids from the roster to make a call to the
PEOPLE_ENDPOINT for rich data.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+withPreviousGame"></a>

### teams.withPreviousGame() ⇒ [<code>Teams</code>](#Teams)
<p>This method will add the necessary query string to the URI for including the target team(s)
previous game(s) data.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+withNextGame"></a>

### teams.withNextGame() ⇒ [<code>Teams</code>](#Teams)
<p>This method will add the necessary query string to the URI for including the target team(s)
next game(s) data.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+withStats"></a>

### teams.withStats() ⇒ [<code>Teams</code>](#Teams)
<p>This method will add the necessary query string to the URI for including the target team(s)
statistical data.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+all"></a>

### teams.all() ⇒ [<code>Teams</code>](#Teams)
<p>This method will add all possible query strings to the URI.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  
<a name="Teams+parseData"></a>

### teams.parseData(apiData) ⇒ [<code>Array.&lt;Team&gt;</code>](#Team)
<p>This method will parse the raw NHL API data in to an array of Team objects.</p>

**Kind**: instance method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The raw NHL API data</p> |

<a name="Teams.toConference"></a>

### Teams.toConference(apiData) ⇒ [<code>Conference</code>](#Conference)
<p>This method will transform API data in to a Conference object.</p>

**Kind**: static method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The conference object of the response from the NHL API</p> |

<a name="Teams.toDivision"></a>

### Teams.toDivision(apiData) ⇒ [<code>Division</code>](#Division)
<p>This method will transform API data in to a Division object.</p>

**Kind**: static method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The division object of the response from the NHL API</p> |

<a name="Teams.toVenue"></a>

### Teams.toVenue(apiData) ⇒ [<code>Venue</code>](#Venue)
<p>This method will transform API data in to a Venue object.</p>

**Kind**: static method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The venue object of the response from the NHL API</p> |

<a name="Teams.toTeam"></a>

### Teams.toTeam(apiData) ⇒ [<code>Team</code>](#Team)
<p>This method will transform API data in to a Team object.</p>

**Kind**: static method of [<code>Teams</code>](#Teams)  

| Param | Type | Description |
| --- | --- | --- |
| apiData | <code>object</code> | <p>The Team object of the response from the NHL API</p> |

<a name="AWARDS_ENDPOINT"></a>

## AWARDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL distributed awards</p>

**Kind**: global constant  
<a name="CONFERENCES_ENDPOINT"></a>

## CONFERENCES\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL conferences</p>

**Kind**: global constant  
<a name="DIVISIONS_ENDPOINT"></a>

## DIVISIONS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL divisions</p>

**Kind**: global constant  
<a name="DRAFT_ENDPOINT"></a>

## DRAFT\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL draft information</p>

**Kind**: global constant  
<a name="DRAFT_PROSPECTS_ENDPOINT"></a>

## DRAFT\_PROSPECTS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL draft proscpect information</p>

**Kind**: global constant  
<a name="GAME_ENDPOINT"></a>

## GAME\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL game information</p>

**Kind**: global constant  
<a name="PEOPLE_ENDPOINT"></a>

## PEOPLE\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL people and player information</p>

**Kind**: global constant  
<a name="SCHEDULE_ENDPOINT"></a>

## SCHEDULE\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL team schedule information</p>

**Kind**: global constant  
<a name="STANDINGS_ENDPOINT"></a>

## STANDINGS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL team standings</p>

**Kind**: global constant  
<a name="STANDINGS_TYPES_ENDPOINT"></a>

## STANDINGS\_TYPES\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL standing types</p>

**Kind**: global constant  
<a name="STATS_TYPES_ENDPOINT"></a>

## STATS\_TYPES\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL stats types</p>

**Kind**: global constant  
<a name="TEAMS_ENDPOINT"></a>

## TEAMS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL teams</p>

**Kind**: global constant  
<a name="ALL_TIME_RECORD_VS_FRANCHISE_ENDPOINT"></a>

## ALL\_TIME\_RECORD\_VS\_FRANCHISE\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL all time records against the target franchise</p>

**Kind**: global constant  
<a name="ATTENDANCE_RECORDS_ENDPOINT"></a>

## ATTENDANCE\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL attendance records</p>

**Kind**: global constant  
<a name="DRAFT_RECORDS_ENDPOINT"></a>

## DRAFT\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL draft records</p>

**Kind**: global constant  
<a name="FRANCHISE_DETAIL_RECORDS_ENDPOINT"></a>

## FRANCHISE\_DETAIL\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise record details</p>

**Kind**: global constant  
<a name="FRANCHISE_GOALIE_RECORDS_ENDPOINT"></a>

## FRANCHISE\_GOALIE\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise goalie records</p>

**Kind**: global constant  
<a name="FRANCHISE_RECORDS_ENDPOINT"></a>

## FRANCHISE\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise</p>

**Kind**: global constant  
<a name="FRANCHISE_SEASON_RESULTS_ENDPOINT"></a>

## FRANCHISE\_SEASON\_RESULTS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise results for a target season</p>

**Kind**: global constant  
<a name="FRANCHISE_SKATER_RECORDS_ENDPOINT"></a>

## FRANCHISE\_SKATER\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise skater records</p>

**Kind**: global constant  
<a name="FRANCHISE_TEAM_TOTALS_ENDPOINT"></a>

## FRANCHISE\_TEAM\_TOTALS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL franchise team totals</p>

**Kind**: global constant  
<a name="MILESTONE_1000_POINT_CAREER_ENDPOINT"></a>

## MILESTONE\_1000\_POINT\_CAREER\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL players who have reached 1000 points in a career</p>

**Kind**: global constant  
<a name="MILESTONE_100_POINT_SEASON_ENDPOINT"></a>

## MILESTONE\_100\_POINT\_SEASON\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL players who have reached 100 points in a season</p>

**Kind**: global constant  
<a name="MILESTONE_500_GOAL_CAREER_ENDPOINT"></a>

## MILESTONE\_500\_GOAL\_CAREER\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL players who have scored 500 career goals</p>

**Kind**: global constant  
<a name="MILESTONE_50_GOAL_SEASON_ENDPOINT"></a>

## MILESTONE\_50\_GOAL\_SEASON\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL players who have scored 50 goals in a season</p>

**Kind**: global constant  
<a name="MILESTONE_5_GOAL_GAME_ENDPOINT"></a>

## MILESTONE\_5\_GOAL\_GAME\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL players who have scored 5 goals in a game</p>

**Kind**: global constant  
<a name="OFFICIALS_ENDPOINT"></a>

## OFFICIALS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL officials</p>

**Kind**: global constant  
<a name="PLAYER_RECORDS_ENDPOINT"></a>

## PLAYER\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL player records</p>

**Kind**: global constant  
<a name="PLAYOFFS_SERIES_RECORDS_ENDPOINT"></a>

## PLAYOFFS\_SERIES\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL playoff series records</p>

**Kind**: global constant  
<a name="PLAYOFF_FRANCHISE_VS_FRANCHISE_ENDPOINT"></a>

## PLAYOFF\_FRANCHISE\_VS\_FRANCHISE\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL playoff records against each target franchise</p>

**Kind**: global constant  
<a name="RECORD_DETAIL_ENDPOINT"></a>

## RECORD\_DETAIL\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL record details</p>

**Kind**: global constant  
<a name="TROPHY_RECORDS_ENDPOINT"></a>

## TROPHY\_RECORDS\_ENDPOINT : <code>string</code>
<p>Endpoint used for fetching NHL trophies</p>

**Kind**: global constant  
<a name="genEndpoint
Composes BASE_ENDPOINT with the target path to create a valid endpoint"></a>

## genEndpoint
Composes BASE\_ENDPOINT with the target path to create a valid endpoint(base, path) ⇒ <code>string</code>
**Kind**: global function  
**Returns**: <code>string</code> - <p>The composed endpoint</p>  

| Param | Type | Description |
| --- | --- | --- |
| base | [<code>STATS\_API\_ENDPOINT</code>](#STATS_API_ENDPOINT) \| [<code>RECORDS\_API\_ENDPOINT</code>](#RECORDS_API_ENDPOINT) | <p>The root NHL API endpoint</p> |
| path | <code>string</code> | <p>The target path, for example &quot;teams&quot; or &quot;people&quot;</p> |

<a name="Conference"></a>

## Conference : <code>object</code>
<p>A representation of an NHL Conference.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the conference.</p> |

<a name="Division"></a>

## Division : <code>object</code>
<p>A representation of an NHL Division.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| abbreviation | <code>string</code> | <p>The divisions abbreviated name</p> |
| name | <code>string</code> | <p>The name of the division.</p> |

<a name="Game"></a>

## Game : <code>object</code>
<p>A representation of an NHL Game.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> | <p>The ID of the game.</p> |

<a name="Player"></a>

## Player : <code>object</code>
<p>A representation of an NHL Player.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| fullName | <code>string</code> | <p>The full name of the player.</p> |

<a name="Team"></a>

## Team : <code>object</code>
<p>A representation of an NHL Team.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| abbreviation | <code>string</code> | <p>The teams name in abbpreviated form.</p> |
| active | <code>boolean</code> | <p>Indicates whether the team is currently active in the NHL.</p> |

<a name="Venue"></a>

## Venue : <code>object</code>
<p>A representation of an NHL Venue.</p>

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | <p>The name of the venue.</p> |

<a name="STATS_API_ENDPOINT"></a>

## STATS\_API\_ENDPOINT : <code>string</code>
<p>Base endpoint of the NHL Stats API</p>

**Kind**: global typedef  
<a name="RECORDS_API_ENDPOINT"></a>

## RECORDS\_API\_ENDPOINT : <code>string</code>
<p>Base endpoint of the NHL Records API</p>

**Kind**: global typedef  
