const fs = require('fs');

// 1. Create a new txt file using the same fs module method we have
// learned before.
// ----------------------------------------------------------------
// fs.writeFile('new-file', "Hi!", 'utf8', err => {
//     if (err) console.log(err);
// });
// ----------------------------------------------------------------


// 2. Create a copy of the newly created txt file using a method from
// the fs module.
// ----------------------------------------------------------------
// fs.copyFile('./new-file', 'copy-file', 0, err => {
//     if (err) console.log(err);
// });
// ----------------------------------------------------------------


// 3. Rename one of the files using a method from the fs module.
// ----------------------------------------------------------------
// fs.rename("./new-file", "./rename-new-file", err => {
//     if (err) console.log(err);
// });
// ----------------------------------------------------------------


// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
// ----------------------------------------------------------------
// fs.readdir('./', (err, files) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// });
// ----------------------------------------------------------------


// 5. Find out and implement another method for the fs module.
// ----------------------------------------------------------------
// fs.appendFile('./copy-file', ' this text append by node js', err => {
//     if (err) console.log(err);
// });
// ----------------------------------------------------------------