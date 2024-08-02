function getDataFromUser(callback) {
    
    const userData = {
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    callback(userData);
}

function displayData(data) {
    console.log('User Data:', data);
}

getDataFromUser(displayData);
