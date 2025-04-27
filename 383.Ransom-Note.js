/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomNoteMap = new Map();

  for (const ch of ransomNote) {
    ransomNoteMap.set(ch, (ransomNoteMap.get(ch) || 0) + 1);
  }

  for (const ch of magazine) {
    if (ransomNoteMap.has(ch)) {
      ransomNoteMap.set(ch, ransomNoteMap.get(ch) - 1);

      if (ransomNoteMap.get(ch) === 0) {
        ransomNoteMap.delete(ch);
      }
    }
  }

  return ransomNoteMap.size === 0;
};
