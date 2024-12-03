

let day = (process.argv[2]);
import(`./day-${day}/index.js`).then(function(m) {
    m.main();
});