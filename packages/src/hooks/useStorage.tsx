type StorageActionType = {
  get: (key: string) => string | null;
  set: (key: string, value: any) => void;
};

export const storageActions: StorageActionType = {
  get: (key) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      return window.localStorage.getItem(key);
    }
    return null;
  },
  set: (key, value) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  },
};
