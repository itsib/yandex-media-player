import { HomeAssistant, MediaPlayerDeviceInfo } from 'types';

/**
 * Founds device info in HomeAssistant devices by device ID
 * @param hass
 * @param deviceIds
 */
export const findDevices = (hass: HomeAssistant, deviceIds: string[] = []): MediaPlayerDeviceInfo[] => {
  return deviceIds
    .map(deviceId => {
      const device = hass.devices[deviceId];
      let playerEntityId: string | undefined = undefined;
      let equalizerEntityId: string | undefined = undefined;

      for (const entityId in hass.entities) {
        const entity = hass.entities[entityId];
        if (entity.device_id === device.id) {
          if (entityId.startsWith('media_player')) {
            playerEntityId = entityId;
          } else if (entityId.includes('equalizer')) {
            equalizerEntityId = entityId;
          }
        }

        if (playerEntityId && equalizerEntityId) {
          break;
        }
      }

      if (!playerEntityId) {
        return null;
      }

      return {
        id: device.id,
        name: device.name_by_user || device.name || 'No name',
        model: device.model,
        playerEntityId,
        equalizerEntityId,
      };
    })
    .filter(Boolean) as MediaPlayerDeviceInfo[];
};
