import logging
import os
import time

from homeassistant.components.frontend import add_extra_js_url
from homeassistant.core import HomeAssistant
from homeassistant.helpers.typing import ConfigType

DOMAIN = 'yandex_media_player'

LOGGER = logging.getLogger(__name__)


async def async_setup(hass: HomeAssistant, _: ConfigType) -> bool:
    """Register media player resources for lovelace"""

    hass.states.async_set("yandex_media_player.install", "ok")

    card_file_path = os.path.dirname(os.path.realpath(__file__)) + "/lovelace"
    hass.http.register_static_path("/yandex-media-player", card_file_path, False)
    add_extra_js_url(hass, "/yandex-media-player/media-player.js?cache=" + str(time.time()), es5=False)

    return True
