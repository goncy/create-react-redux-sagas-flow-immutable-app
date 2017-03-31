export type JokesAction = {
  type: string,
  payload: any
}

export type JokeResponse = {
  category: ?string,
  icon_url: string,
  id: string,
  url: string,
  value: string
}

export type JokesState = List<JokeResponse>
