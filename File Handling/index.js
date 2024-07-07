// const fs = require('fs');
// const path = require('path');

// const directoryPath = 'F:/MCA_Sem_3/Node Js/File Handling';

// fs.readdir(directoryPath, (err, files) => {
//     if (err) {
//         console.error('Error reading directory:', err);
//         return;
//     }


//     const textFiles = files.filter(file => file.endsWith('.txt'));

    
//     textFiles.forEach(file => {
//         const filePath = path.join(directoryPath, file);
//         fs.readFile(filePath, 'utf8', (err, data) => {
//             if (err) {
//                 console.error(`Error reading file ${file}:`, err);
//                 return;
//             }
//             console.log(`Contents of ${file}:`);
//             console.log(data);
//         });
//     });
// });


const fs = require('fs');
const path = require('path');

const inputFile = 'input.txt'; 

fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    let newFileName;
    if (data.includes('<html') || data.includes('<body') || data.includes('<script')) {
        newFileName = 'output.html';
    } else {
        newFileName = 'output.js';
    }

    fs.writeFile(newFileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(`File ${newFileName} created successfully!`);
    });
});



