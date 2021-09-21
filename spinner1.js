
setTimeout(() => {
  // extra spaces are added after the animated cursor so that the CL cursor doesn't obsure it.
  process.stdout.write('\r|     ')
}, 100);

setTimeout(() => {
  process.stdout.write('\r/     ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-     ')
}, 500);

setTimeout(() => {
  // there needs to be an extra \ after the \ to escape the character
  process.stdout.write('\r\\     ')
}, 700);

setTimeout(() => {
  process.stdout.write('\r|     ')
}, 900);
