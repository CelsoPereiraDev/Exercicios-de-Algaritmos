const techs = ['java', 'javascript', 'python', 'html', 'css', 'ruby', 'C++', 'C#'];

function menor(array) {
  return array.reduce((a, b) => (a.length <= b.length ? a : b));
}

function maior(array) {
  return array.reduce((a, b) => (a.length <= b.length ? b : a));
}
