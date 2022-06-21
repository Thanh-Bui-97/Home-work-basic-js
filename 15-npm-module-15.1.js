/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var readlineSync = require('readline-sync');
var fs = require('fs');

var DataContact = [];

function readJSON() {
    var content = fs.readFileSync('./15-npm-module-15.1.data.json', {
        encoding: 'utf8'
    });
    if (content) {
        DataContact = JSON.parse(content);
    }
}

function getOptions() {
    console.log('1. Creat new contact');
    console.log('2. Fix contact');
    console.log('3. Delete contact');
    console.log('4. Find contact');
    option = readlineSync.question('Chose 1 of this: ');
    
    switch(option) {
        case '1': 
            getDataContact();
            getOptions();
            break;
        case '2':
            fixDataContact();
            getOptions();
            break;
        case '3':
            deleteDataContact();
            getOptions();
            break;
        case '4':
            var foundResult = findDataContact();
            console.log(foundResult);
            getOptions();
            break;
        default:
            console.log('Wrong option');
            break;
    };
}

function getDataContact() {
    var persons = {};
    
    console.log('Fill this form: ');
    var nameData = readlineSync.question('What the contact name? : ');
    var phoneNumberData = readlineSync.question('What phone number? :');
    
    persons.name = nameData;
    persons.phoneNumber = parseFloat(phoneNumberData);
    DataContact.push(persons);
    
    DataContactJSON = JSON.stringify(DataContact);
    fs.writeFileSync('./15-npm-module-15.1.data.json', DataContactJSON, {
        encoding: 'utf8'
    })
};

function findDataContact() {
    if (!DataContact) {
        console.log('Emty list number!')
    } else {
        var foundValue = readlineSync.question('fill name or number? : ');
        var foundValueByNumber = parseFloat(foundValue);        
        
        if (!foundValueByNumber) {
            for (i = 0; i <= DataContact.length; i++) {
                if (foundValue === DataContact[i].name) {
                    return DataContact[i];
                    break;
                } else {
                    continue;
                    console.log('Can not find the phone number you need!!')
                }  
            }
        };
        
        if (foundValueByNumber) {
            for (e = 0; e <= DataContact.length; e++) {
                if (foundValueByNumber === DataContact[e].phoneNumber) {
                    return DataContact[e]
                    break;
                }
            }
            return 'Can not find the phone number you need!!';
        };
    }
}

function fixDataContact() {
    var numberFixing = findDataContact(); 
    console.log(numberFixing);
    var newPhoneName = readlineSync.question('What is new phone name? : ');
    var newPhoneNumber = readlineSync.question('What is new phone number? : ');
    numberFixing[0].name = newPhoneName;
    numberFixing[0].phoneNumber = parseFloat(newPhoneNumber);
    DataContact.concat(numberFixing);
    console.log(DataContact);
}

function deleteDataContact() {
    
}

function main() {
    readJSON();
    getOptions();
}

main();
