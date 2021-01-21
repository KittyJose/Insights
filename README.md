# Insights record action

This javascript POST's a GitHub action when an event is performed on a repo of interest

## Inputs

### `database`

**Required** Datbase url to post json.

### `key`

**Required** Secret API Key.

### `json`

**Required** gitHub action object.

## Outputs

### `results`

A HTTP response

## Example usage

uses: actions/Insights@v1.0
with:
  database: 'https://hub.terminusdb.com/'
  key:  ***
  json: {}
