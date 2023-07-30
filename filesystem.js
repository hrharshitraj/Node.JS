/*
Common use for the File System module:
Read files
Create files
Update files
Delete files
Rename files
*/

/* 1. Read files : fs.readFile()
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('filesystemcontent.html', (err, data) => {
        res.writeHead(200, {'Content_Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
 */

/*
2. Create Files-

* To create the file, to write to a file, or to read a file fs.open() method is used. fs.readFile() is only for reading the file and similarly fs.writeFile() is only for writing to a file, whereas fs.open() method does several operations on a file.

fs.appendFile() -> fs.appendFile() method appends specified content to a file. If the file does not exist, new file will be created.
fs.open()
fs.writeFile()
*/

const http = require('http');
const fs = require('fs');

fs.appendFile('myNewFile.txt', 'Appended/Created a new file using fs.appendFile!', (err) => {
    if(err) throw err;
    console.log('Saved!');
});
// myNewFile.txt has been created;
// flag -> r-read, w-write, r+ -readwrite
fs.open('myNewFile','r', (err,data) => {
    if(err) throw err;
    console.log(data);
    console.log('Saved!');
})

// To delete a file with the File System module,  use the fs.unlink() method.