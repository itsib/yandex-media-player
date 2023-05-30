import { HassEntityState, HassEntityStateAttributes, LovelaceCardConfig } from 'types';

export interface MediaPlayerCardConfig extends LovelaceCardConfig {
  color: string;
  devices: string[];
}

export interface MediaPlayerDeviceInfo {
  /**
   * Device ID
   */
  id: string;
  /**
   * Device name
   */
  name: string;
  /**
   * Device model (used for ordering)
   */
  model?: string;
  /**
   * Media player entity ID (Domain - media_player).
   */
  playerEntityId: string;
  /**
   * Equalizer entity ID (Domain - select)
   */
  equalizerEntityId?: string;
}

interface MediaPlayerEntityAttributes extends HassEntityStateAttributes {
  media_content_id?: string;
  media_content_type?: string;
  media_artist?: string;
  media_playlist?: string;
  media_series_title?: string;
  media_season?: any;
  media_episode?: any;
  app_name?: string;
  media_position_updated_at?: string | number | Date;
  media_duration?: number;
  media_position?: number;
  media_title?: string;
  media_channel?: string;
  icon?: string;
  entity_picture_local?: string;
  is_volume_muted?: boolean;
  volume_level?: number;
  repeat?: string;
  shuffle?: boolean;
  source?: string;
  source_list?: string[];
  sound_mode?: string;
  sound_mode_list?: string[];
}

export enum MediaPlayerState {
  PLAYING = 'playing',
  PAUSED = 'paused',
  IDLE = 'idle',
  OFF = 'off',
  ON = 'on',
  UNAVAILABLE = 'unavailable',
  UNKNOWN = 'unknown',
  STANDBY = 'standby',
  BUFFERING = 'buffering',
}

export interface MediaPlayerEntityState extends HassEntityState {
  attributes: MediaPlayerEntityAttributes;
  state: MediaPlayerState;
}
