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
        console.log(typeof foundValueByNumber);
        
        var foundValueByNumber = parseFloat(foundValue);
        if (typeof foundValueByNumber !== 'number') {
            var foundPersonByName = DataContact.filter(function(element) {
                console.log(element.name);
                return element.name === foundValue;
            })
            console.log(foundPersonByName);
        } else {
             var foundPersonByNumber =
               DataContact.filter(function(element) {
               return element.phoneNumber === 
                  foundValueByNumber;
               });
           console.log(foundPersonByNumber);
        }
    }
}



function main() {
    getDataContact();
//    fixDataContact();
//    deleteDataContact();
    findDataContact();
}

main();
