document.addEventListener('DOMContentLoaded', function() {
    const data = [
        {"number_plate": "MH10DH2610", "owner_name": "John Doe", "rc_status": "active"},
        {"number_plate": "MH10DL1120", "owner_name": "Jane Smith", "rc_status": "active"},
        {"number_plate": "MH14BM2048", "owner_name": "Alice Johnson", "rc_status": "inactive"},
        {"number_plate": "MH09BM9961", "owner_name": "Bob Brown", "rc_status": "active"},
        {"number_plate": "MH09CP2641", "owner_name": "Emily Davis", "rc_status": "inactive"},
        {"number_plate": "MH10HD2048", "owner_name": "Charlie White", "rc_status": "active"},
        {"number_plate": "MH10ZO7840", "owner_name": "David Black", "rc_status": "inactive"},
        {"number_plate": "MH12YA5271", "owner_name": "Eva Green", "rc_status": "active"},
        {"number_plate": "KA22AB6899", "owner_name": "Frank Blue", "rc_status": "inactive"},
        {"number_plate": "MH10BC2699", "owner_name": "Grace Red", "rc_status": "active"}
    ];

    const checkStatusBtn = document.getElementById('checkStatusBtn');
    const inputCarNumber = document.getElementById('inputCarNumber');
    const statusMessage = document.getElementById('statusMessage');

    // Debugging logs
    console.log('checkStatusBtn:', checkStatusBtn);
    console.log('inputCarNumber:', inputCarNumber);
    console.log('statusMessage:', statusMessage);

    if (!checkStatusBtn || !inputCarNumber || !statusMessage) {
        console.error('One or more elements are not found in the DOM.');
        return;
    }

    checkStatusBtn.addEventListener('click', function() {
        const carNumberValue = inputCarNumber.value.trim();
        
        console.log('Car number entered:', carNumberValue);

        const carData = data.find(car => car.number_plate === carNumberValue);
        
        if (carData) {
            statusMessage.innerText = `${carData.number_plate} has RC status of ${carData.rc_status}`;
            statusMessage.className = 'alert alert-success';
        } else {
            statusMessage.innerText = 'Car number not found.';
            statusMessage.className = 'alert alert-danger';
        }
    });
});
