// from data to console
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const employeeData = {
      profilePhoto: document.getElementById('profilePhoto').files[0] ? document.getElementById('profilePhoto').files[0].name : 'No file selected',
      firstName: document.getElementById('firstName').value,
      lastName: document.getElementById('lastName').value,
      employeeID: document.getElementById('employeeID').value,
      email: document.getElementById('email').value,
      phoneNumber: document.getElementById('phoneNumber').value,
      department: document.getElementById('department').value,
      designation: document.getElementById('designation').value,
      gender: document.getElementById('gender').value,
      dob: document.getElementById('dob').value,
      aboutMe: document.getElementById('aboutMe').value,
      employeeStatus: document.getElementById('employeeStatus').value
    };

    console.log(employeeData);
});


// Image Show function.....
function previewImage() {
    const input = document.getElementById('profilePhoto');
    const imagePreview = document.getElementById('imagePreview');
    const uploadArea = document.getElementById('uploadArea');

    if (input.files && input.files[0]) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        imagePreview.src = e.target.result;
        imagePreview.classList.remove('hidden');
        uploadArea.classList.add('hidden'); 
      };
  
      reader.readAsDataURL(input.files[0]);
    }
}
  