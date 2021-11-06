const fs = require('fs');

trans = fs.readFileSync('./translate.json', 'utf8')

console.log(trans)

transFormated = JSON.parse(trans)


type = 1
number = 0
list = {}
array = []
names = {}
namesnewnew = []
numbernameon = 0

fs.readFileSync('./list.txt', 'utf8').split('\n').forEach(async (line)=>{
    //group every 5 new lines put them in an array
    newLine = ''
    switch (type) {
        case 1:{
            console.log(transFormated[numbernameon])
            newLine = `Name: ${line.toString()} -> ${transFormated[numbernameon].toString()}`
            array.push(newLine.toString().replace('\r', ''))
            type++, number++, numbernameon++
            break
        }
        case 2:{
            newLine = `Max Level: ${line.toString()}`
            array.push(newLine.toString().replace('\r', ''))
            type++
            break
        }
        case 3:{
            newLine = `Type: ${line.toString()}`
            array.push(newLine.toString().replace('\r', ''))
            type++
            break
        }
        case 4:{
            newLine = `Default Items: ${line.toString()}`
            array.push(newLine.toString().replace('\r', ''))
            type++
            break
        }
        case 5:{
            newLine = `Description: ${line.toString()}`
            array.push(newLine.toString().replace('\r', ''))
            list[number] = array
            array = []
            type=1
            fs.writeFileSync('./list.json', JSON.stringify(list, null, 2), 'utf8');
            break
        }
    }
});


