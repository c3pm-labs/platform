import { useState } from 'react';
import Cookie from 'js-cookie';

function tryParseCookie<T>(key: string, initialValue: T): T {
  if (typeof window !== 'undefined') {
    const cookie = Cookie.get(key);
    if (cookie) {
      return JSON.parse(cookie) as T;
    }
    Cookie.set(key, initialValue);
  }
  return initialValue;
}

function useCookie<T>(key: string, initialValue: T): [T | undefined, (value: T) => void] {
  const initialValueOrCookie = tryParseCookie<T>(key, initialValue);
  const [value, setInnerValue] = useState<T>(initialValueOrCookie);

  function setValue(newValue: T) {
    setInnerValue(newValue);

    if (typeof window !== 'undefined') {
      Cookie.set(key, newValue);
    }
  }

  return [value, setValue];
}

export default useCookie;
