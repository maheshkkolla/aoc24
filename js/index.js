

let day = (process.argv[2]);
import(`./day-${day}/index.js`).then((m) => {
    m.main();
});