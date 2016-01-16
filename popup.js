// Shows a d6 random number.

function getRandInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('result').textContent = getRandInt(1, 6);
});
