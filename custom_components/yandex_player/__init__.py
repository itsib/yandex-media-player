import logging
import os
import time

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType
from homeassistant.config_entries import SOURCE_IMPORT, ConfigEntry

from .const import DOMAIN, NAME

LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, config: ConfigType) -> bool:
    """Register media player resources for lovelace"""

    card_file_path = os.path.dirname(os.path.realpath(__file__)) + "/lovelace"
    hass.http.register_static_path("/yandex-player", card_file_path, False)
    add_extra_js_url(hass, "/yandex-player/index.js?cache=" + str(time.time()), es5=False)

    # Async init entry
    hass.async_create_task(
        hass.config_entries.flow.async_init(
            DOMAIN,
            context={"source": SOURCE_IMPORT},
            data=config,
        )
    )
    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up from a config entry."""
    hass.data[DOMAIN] = {'name': NAME}
    await hass.config_entries.async_forward_entry_setups(entry, [])
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    unload_ok = await hass.config_entries.async_unload_platforms(entry, [])
    if unload_ok:
        hass.data.pop(DOMAIN)

    return unload_ok
