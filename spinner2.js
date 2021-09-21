
const cursor = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-'   , '\\   ', '|   '];


for (let i =1; i < cursor.length + 1; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + cursor[i])
  }, 100 + (i * 200))
};

