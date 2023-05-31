function handleCustomImage(card: HTMLElement): void {
  const haCard = card.shadowRoot?.querySelector('ha-card');
  const haCardHeader = haCard?.querySelector('ha-integration-header');
  const image = haCardHeader?.shadowRoot?.querySelector('.header')?.querySelector('img') as HTMLImageElement | null;
  if (image) {
    image.src = '/yandex-media-player/logo.png';
  }
}

function findPlayerCard(integrations: HTMLElement): void {
  setTimeout(() => {
    const subPage = integrations.shadowRoot?.querySelector('hass-tabs-subpage');
    const container = subPage?.querySelector('.container');
    if (!container || !(container as HTMLElement).children.length) {
      return;
    }

    for (let i = 0; i < (container as HTMLElement).children.length; i++) {
      const card = (container as HTMLElement).children.item(i) as HTMLElement;
      if (card['domain'] === 'yandex_media_player') {
        handleCustomImage(card);
      }
    }
  }, 500);
}

function changeCallback(mutationList: MutationRecord[]): void {
  mutationList.map(mutation => {
    if (!mutation.addedNodes.length) {
      return;
    }

    for (const node of mutation.addedNodes.values()) {
      if (node.nodeName === 'HA-CONFIG-INTEGRATIONS') {
        findPlayerCard(node as HTMLElement);
      }
    }
  });
}

function getDrawer(): HTMLElement | null {
  const homeAssistant = document.body.querySelector('home-assistant');
  const homeAssistantMain = homeAssistant?.shadowRoot?.querySelector('home-assistant-main');
  return homeAssistantMain?.shadowRoot?.querySelector('ha-drawer') || null;
}

export function subscribeToChangeDom(drawer: HTMLElement): void {
  const observer = new MutationObserver(changeCallback);
  observer.observe(drawer, { subtree: true, childList: true });
}

if (window) {
  const drawer = getDrawer();
  if (drawer) {
    subscribeToChangeDom(drawer);
  } else {
    window?.setTimeout(() => {
      const drawer = getDrawer();
      if (!drawer) {
        console.warn('No ha drawer found');
        return;
      }
      subscribeToChangeDom(drawer);
    }, 500);
  }
}
