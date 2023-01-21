export interface DailyCricketMatchDetails {
  status?: string;
  response?: DC_Response;
  etag?:string;
  modified?:string;
  datetime?:string;
  api_version?:string;
}

export interface DC_Response{
  items?:DC_Item[];
  total_items?: number;
  total_pages?: number;
}

export interface DC_Item{
  match_id?: number;
  title?: string;
  short_title?:string;
  subtitle?:string;
  format?:number;
  format_str?:string;
  status?:number;
  status_str?:string;
  status_note?:string;
  verified?:string;
  pre_squad?:string;
  odds_available?:string;
  game_state?:number;
  game_state_str?:string;
  domestic?:string;
  competition?: DC_Competition; //
  teama?: DC_Team; //
  teamb?: DC_Team; //
  date_start?:string;
  date_end?:string;
  timestamp_start?:number;
  timestamp_end?:number;
  date_start_ist?:string;
  date_end_ist?:string;
  venue?:DC_Venu;
  umpires?:string;
  referee?:string;
  equation?:string;
  live?:string;
  result?:string;
  result_type?:string;
  win_margin?:string;
  winning_team_id?:string;
  commentary?:string;
  wagon?:string;
  latest_inning_number?:string;
  presquad_time?:string;
  verify_time?:string;
  toss?:DC_Toss;
}

export interface DC_Competition{
  cid?: number;
  title?: string;
  abbr?: string;
  type?: string;
  category?: string;
  match_format?: string;
  season?: string;
  status?: string;
  datestart?: string;
  dateend?: string;
  country?: string;
  total_matches?: string;
  total_rounds?: string;
  total_teams?: string;
}


export interface DC_Team{
  team_id?: number;
  name?: string;
  short_name?: string;
  logo_url?: string;
  scores_full?: string;
  scores?: string;
  overs?: string;
  status?: string;
  datestart?: string;
  dateend?: string;
  country?: string;
  total_matches?: string;
  total_rounds?: string;
  total_teams?: string;
}

export interface DC_Venu{
  venue_id?: number;
  name?: string;
  location?: string;
  country?: string;
}

export interface DC_Toss{
  text?: string;
  winner?: string;
  decision?: string;
}


export enum Status {
  fixture = 1,
  result = 2,
  live = 3
}

