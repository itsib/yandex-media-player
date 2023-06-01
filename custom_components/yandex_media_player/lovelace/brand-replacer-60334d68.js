function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
/**
 * Retries the function that returns the promise until the promise successfully resolves up to n retries
 * @param fn function to retry
 * @param attempt how many times to retry
 */
function retry(fn, attempt = 3) {
    const increase = 50;
    let completed = false;
    let timeout = 50;
    return new Promise(async (resolve, reject) => {
        while (true) {
            let result;
            try {
                result = await fn();
                if (!completed) {
                    resolve(result);
                    completed = true;
                }
                break;
            }
            catch (error) {
                if (completed) {
                    break;
                }
                if (attempt <= 0) {
                    reject(error);
                    completed = true;
                    break;
                }
                attempt--;
            }
            await sleep(timeout);
            timeout += increase;
        }
    });
}
class BrandReplacer {
    static insert(domain, image) {
        if (!window || !document || !('MutationObserver' in window)) {
            console.warn('The runtime environment is not supported.');
            return;
        }
        let instance = BrandReplacer.INSTANCE;
        if (!instance) {
            instance = new BrandReplacer();
            BrandReplacer.INSTANCE = instance;
        }
        instance._watch(domain, image);
    }
    static getShadowRoot(element) {
        if (element.shadowRoot) {
            return Promise.resolve(element.shadowRoot);
        }
        return retry(() => {
            if (element.shadowRoot) {
                return element.shadowRoot;
            }
            throw new Error(`No shadow root found`);
        }, 10);
    }
    static getElement(rootElement, selector) {
        const element = rootElement.querySelector(selector);
        if (element) {
            return Promise.resolve(element);
        }
        return retry(() => {
            const element = rootElement.querySelector(selector);
            if (element) {
                return element;
            }
            throw new Error(`No "${selector}" element found`);
        }, 10);
    }
    static findNode(nodes, nodeName) {
        for (const node of nodes.values()) {
            if (node.nodeName === nodeName) {
                return node;
            }
        }
        return undefined;
    }
    constructor() {
        /**
         * Replacer has been initialized
         * @private
         */
        this._initialized = false;
        this._watchedImages = {};
    }
    _watch(domain, image) {
        this._watchedImages[domain] = image;
        if (this._initialized) {
            this._handleIntegrationsSettingsPage();
            this._handleIntegrationsSettingsPage();
        }
        else {
            this._init();
        }
    }
    _init() {
        if (this._initialized) {
            return;
        }
        this._initialized = true;
        BrandReplacer.getElement(document.body, 'home-assistant')
            .then(element => BrandReplacer.getShadowRoot(element))
            .then(shadowRoot => {
            const observer = new MutationObserver(this._homeAssistantMutationCallback.bind(this));
            observer.observe(shadowRoot, { subtree: true, childList: true });
            return BrandReplacer.getElement(shadowRoot, 'home-assistant-main');
        })
            .then(main => {
            if (!main.shadowRoot) {
                throw new Error('No shadow root in <home-assistant-main />');
            }
            return BrandReplacer.getElement(main.shadowRoot, 'ha-drawer');
        })
            .then(drawer => {
            const configElement = drawer.querySelector('ha-config-integrations');
            if (configElement) {
                this._configIntegrations = configElement;
                this._handleIntegrationsSettingsPage();
            }
            const observer = new MutationObserver(this._drawerMutationCallback.bind(this));
            observer.observe(drawer, { subtree: true, childList: true });
        })
            .catch(console.error);
    }
    _drawerMutationCallback(mutations) {
        for (let i = mutations.length - 1; i >= 0; i--) {
            const mutation = mutations[i];
            const configIntegrations = BrandReplacer.findNode(mutation.addedNodes, 'HA-CONFIG-INTEGRATIONS');
            if (configIntegrations) {
                this._configIntegrations = configIntegrations;
                this._handleIntegrationsSettingsPage();
                continue;
            }
            if (BrandReplacer.findNode(mutation.removedNodes, 'HA-CONFIG-INTEGRATIONS')) {
                this._configIntegrations = undefined;
            }
        }
    }
    _homeAssistantMutationCallback(mutations) {
        for (let i = mutations.length - 1; i >= 0; i--) {
            const mutation = mutations[i];
            const dialog = BrandReplacer.findNode(mutation.addedNodes, 'DIALOG-ADD-INTEGRATION');
            if (dialog) {
                this._dialogAddIntegration = dialog;
                this._handleDialogAddIntegration();
                continue;
            }
            if (BrandReplacer.findNode(mutation.removedNodes, 'DIALOG-ADD-INTEGRATION')) {
                this._dialogAddIntegration = undefined;
                if (this._dialogIntegrationListObserver) {
                    this._dialogIntegrationListObserver.disconnect();
                    this._dialogIntegrationListObserver = undefined;
                }
            }
        }
    }
    _dialogIntegrationListMutationCallback(mutations) {
        var _a;
        for (let i = 0; i < mutations.length; i++) {
            const mutation = mutations[i];
            const item = BrandReplacer.findNode(mutation.addedNodes, 'HA-INTEGRATION-LIST-ITEM');
            if (item && ((_a = item['__integration']) === null || _a === void 0 ? void 0 : _a.domain) in this._watchedImages) {
                this._replaceImageDialogAddIntegration(item, item['__integration'].domain);
            }
        }
    }
    _handleIntegrationsSettingsPage() {
        if (!this._configIntegrations) {
            return;
        }
        BrandReplacer.getShadowRoot(this._configIntegrations)
            .then(shadowRoot => BrandReplacer.getElement(shadowRoot, 'hass-tabs-subpage'))
            .then(tabsSubpage => BrandReplacer.getElement(tabsSubpage, '.container'))
            .then(container => {
            if (!container || !container.children.length) {
                console.warn('Container is empty');
                return;
            }
            for (let i = 0; i < container.children.length; i++) {
                const card = container.children.item(i);
                const cardDomain = card['domain'];
                if (cardDomain in this._watchedImages) {
                    this._replaceImageIntegrationCard(card, cardDomain);
                }
            }
        })
            .catch(console.error);
    }
    _handleDialogAddIntegration() {
        if (!this._dialogAddIntegration) {
            return;
        }
        BrandReplacer.getShadowRoot(this._dialogAddIntegration)
            .then(shadowRoot => BrandReplacer.getElement(shadowRoot, 'ha-dialog'))
            .then(haDialog => BrandReplacer.getElement(haDialog, 'mwc-list'))
            .then(list => {
            this._dialogIntegrationListObserver = new MutationObserver(this._dialogIntegrationListMutationCallback.bind(this));
            this._dialogIntegrationListObserver.observe(list, { subtree: true, childList: true });
        })
            .catch(console.error);
    }
    _replaceImageIntegrationCard(card, domain) {
        BrandReplacer.getShadowRoot(card)
            .then(shadowRoot => BrandReplacer.getElement(shadowRoot, 'ha-card'))
            .then(haCard => BrandReplacer.getElement(haCard, 'ha-integration-header'))
            .then(haCardHeader => BrandReplacer.getShadowRoot(haCardHeader))
            .then(shadowRoot => BrandReplacer.getElement(shadowRoot, '.header'))
            .then(header => BrandReplacer.getElement(header, 'img'))
            .then(image => {
            image.src = this._watchedImages[domain];
        })
            .catch(console.error);
    }
    _replaceImageDialogAddIntegration(item, domain) {
        const imageSrc = this._watchedImages[domain];
        BrandReplacer.getShadowRoot(item)
            .then(root => BrandReplacer.getElement(root, 'span > img'))
            .then(image => {
            image.src = imageSrc;
        })
            .catch(console.error);
    }
}

export { BrandReplacer };
