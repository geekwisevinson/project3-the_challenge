
function truncate(text) {
  return text.slice(0, 19) + (text.length > 19 ? '' || '...' : '');
}

function parse(text) {
  return text.replace("_", " ");
}

function capital(text) {
  let array = [];
  const result = [];

  if (text) {
    array = text.split(' ');
    array.forEach((word) => {
      if (word.length > 1) {
        result.push(word.substring(0, 1).toUpperCase() +
          word.substring(1, word.length).toLowerCase());
      } else {
        result.push(word.toUpperCase());
      }
    });
  }

  return result.join(' ');
}

function uppercase(text) {
  if (typeof text !== 'string') { return text; }
  return text.toUpperCase();
}

function removePrimary(text) {
  if (text.substring(0, 7) === 'primary') { return text.substring(8, text.length); }
  return text;
}

function parse(text) {
  return text.replace("_", " ");
}

function firstInArray(text) {
  if (Array.isArray(text)) { return text[0]; }
  return text;
}

function dateFormat(text) {
  Date.prototype.stdTimezoneOffset = function () { // eslint-disable-line
    const jan = new Date(this.getFullYear(), 0, 1);
    const jul = new Date(this.getFullYear(), 6, 1);
    return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
  };

  Date.prototype.dst = function () { // eslint-disable-line
    return this.getTimezoneOffset() < this.stdTimezoneOffset();
  };


  if (!text) return text;
  if (typeof text === 'number' || typeof text === 'object') {
    return text;
  }
  if (text.split('T')[0].length !== 10) {
    return text;
  }
  if (text.substring(text.length - 1) !== 'Z') {
    return text;
  }
  const time = text.split('T')[0];

  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const dateobj = new Date(time);
  if (dateobj.dst()) {
    dateobj.setHours(dateobj.getHours() + 7);
  } else {
    dateobj.setHours(dateobj.getHours() + 8);
  }

  return dateobj.toLocaleDateString('en-US', options);
}

function searchIncludes(text_a, text_b) { // eslint-disable-line
  return (text_a.toLowerCase().includes(text_b.toLowerCase()));
}



export default {
  parse,
  truncate,
  capital,
  uppercase,
  removePrimary,
  firstInArray,
  dateFormat,
  searchIncludes,
  parse,
};
