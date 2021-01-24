const csv = require('csv-parser');
const fs = require('fs');
const { isBuffer } = require('util');

//delete canada.txt and usa.txt if they already exist using fs module
try {
    if(fs.existsSync('./canada.txt')){
        fs.unlink('canada.txt', function(err){
            if (err) throw err;
            console.log('canada.txt deleted');
        });
    }
    if(fs.existsSync('./usa.txt')){
        fs.unlink('usa.txt', function(err){
            if (err) throw err;
            console.log('usa.txt deleted');
        });
    }
} catch(err) {
    console.error(err)
}

//filter data of Canada and write to canada.txt
fs.writeFile('canada.txt', 'Canada', function(err){
    if (err) return console.log(err);
    console.log('Canada.txt created')
})
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.country == "Canada"){
            fs.appendFile('canada.txt', JSON.stringify(row), function(err){
                if (err) throw err;
            })
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    })

//filter data of USA and write to usa.txt
fs.writeFile('usa.txt', 'USA', function(err){
    if(err) return console.log(err);
    console.log('Usa.txt created')
})
fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if (row.country == "United States"){
            fs.appendFile('usa.txt', JSON.stringify(row), function(err){
                if (err) throw err;
            })
        }
    })
    .on('end', () => {
        console.log('CSV file successfully processed')
    })