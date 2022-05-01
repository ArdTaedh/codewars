function generateHashtag (str) {
    if(str.trim() === '')
      return false
    
    const capitalizedWord = str.split(' ').map(el => el.charAt(0).toUpperCase() + el.slice(1) ).join('')
    const withHashtag = `#${capitalizedWord.trim()}`;
    return withHashtag.length > 140 ? false : stringWithHashtag;
}

console.log("code" + " ".repeat(140) + "wars")