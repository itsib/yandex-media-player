import { CustomIcon } from 'types';

const MDI_DOMAINS = ['mdi', 'hass', 'hassio', 'hademo'];
const MDI_DB_NAME = 'hass-icon-db';
const MDI_DB_STORE = 'mdi-icon-store';

export async function getIconPath(icon: string): Promise<string> {
  const [domain, name] = icon.split(':', 2);
  if (!domain || !name) {
    throw new Error(`Invalid icon name`);
  }

  if (!MDI_DOMAINS.includes(domain)) {
    return getCustomIconPath(domain, name);
  }

  return getMdiIconPath(domain, name);
}

async function getCustomIconPath(domain: string, name: string): Promise<string> {
  const customIcon = window.customIcons?.[domain];
  if (!customIcon || typeof customIcon.getIcon !== 'function') {
    throw new Error(`Icon ${domain}:${name} not found`);
  }

  const result: CustomIcon = await customIcon.getIcon(name);
  if (!result?.path) {
    throw new Error(`Icon ${domain}:${name} not found`);
  }
  return result.path;
}

async function getMdiIconPath(domain: string, name: string): Promise<string> {
  const dbInfo = (await indexedDB.databases()).find(db => db.name === MDI_DB_NAME);

  const db = await new Promise<IDBDatabase>((resolve, reject) => {
    if (!dbInfo || !dbInfo.name) {
      return reject(new Error(`Database ${MDI_DB_NAME} not found`));
    }

    const request = indexedDB.open(dbInfo.name, dbInfo.version);

    request.onerror = () => reject(new Error(`Error to open DB. Code: ${request['errorCode']}`));
    request.onsuccess = event => resolve(event.target!['result']);
  });

  const store = db.transaction(MDI_DB_STORE, 'readonly').objectStore(MDI_DB_STORE);

  return new Promise((resolve, reject) => {
    const request = store.get(name);

    request.onerror = () => reject(new Error(`Request error. Code: ${request['errorCode']}`));
    request.onsuccess = event => {
      if (event.target?.['result']) {
        return resolve(event.target['result']);
      }
      return reject(`Icon ${domain}:${name} not found`);
    };
  });
}
