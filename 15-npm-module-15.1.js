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


function getDataContact() {
    var persons = {};
    
    console.log('Fill this form: ');
    var nameData = readlineSync.question('What the contact name? : ');
    var phoneNumberData = readlineSync.question('What phone number? :');
    
    persons.name = nameData;
    persons.phoneNumber =
        parseFloat(phoneNumberData);
    DataContact.push(persons);
    console.log(DataContact);
};

function findDataContact() {
    if (!DataContact) {
        console.log('Emty list number!')
    } else {
        var foundValue = readlineSync.question('What name or number you need find? : ');
        
        var foundValueByNumber = parseFloat(foundValue);
        console.log(foundValueByNumber);
        
        if (!foundValueByNumber) {
            var foundPersonByName = DataContact.filter(function(element) {
                console.log(element.name);
                return element.name === foundValue;
            })
            return foundPersonByName;
        } 
        
        if (foundValueByNumber) {
             var foundPersonByNumber =
               DataContact.filter(function(element) {
               return element.phoneNumber === 
                  foundValueByNumber;
               });
            return foundPersonByNumber;
        }
    }
}

function fixDataContact() {
   var numberFixing = findDataContact(); 
    var newPhoneName = readlineSync.question('What is new phone name? : ');
    var newPhoneNumber = readlineSync.question('What is new phone number? : ');
    numberFixing[0].name = newPhoneName;
    numberFixing[0].phoneNumber = newPhoneNumber;
    DataContact.concat(numberFixing);

}


function main() {
    getDataContact();
    fixDataContact();
//    deleteDataContact();
    findDataContact();
}

main();
