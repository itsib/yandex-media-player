import { MediaPlayerEntityState, MediaPlayerState } from 'types';
import { t } from 'i18n';

export const DEMO_STATE: MediaPlayerEntityState = {
  attributes: {
    volume_level: 0.2,
    is_volume_muted: false,
    media_content_type: 'music',
    media_duration: 100,
    media_position: 10,
    media_title: t('media.demo_media_artist'),
    media_artist: t('media.demo_media_title'),
    alice_state: 'IDLE',
    device_class: 'tv',
    friendly_name: 'Yandex Station',
  },
  entity_id: 'media_player.yandex_station',
  last_changed: '1970-01-01T00:00:00',
  last_updated: '1970-01-01T00:00:00',
  state: MediaPlayerState.PAUSED,
  context: {
    id: '0',
    parent_id: null,
    user_id: '0',
  },
};
