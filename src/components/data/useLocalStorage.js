import { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  // Prefix keys to avoid accidental collisions
  const prefix = "sandbox:";
  const storageKey = prefix + key;

  // Initialize state safely
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === null) {
        // Nothing saved yet, use initial value
        return initialValue;
      }
      // Parse JSON safely
      return JSON.parse(saved);
    } catch (error) {
      console.error("Error reading from localStorage:", error);
      return initialValue;
    }
  });

  // Persist to localStorage whenever value changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [storageKey, value]);

  // Remove an item by id (useful for arrays of records)
  const removeRecord = (id) => {
    if (!Array.isArray(value)) return;
    const filtered = value.filter((item) => item.id !== id);
    setValue(filtered);
  };

  return [value, setValue, removeRecord];
}

export default useLocalStorage;
