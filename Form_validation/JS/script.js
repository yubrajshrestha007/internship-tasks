import { nepal_location } from "../JS/nepal_location.js";
import { nameValidator } from "../JS/NameValidation.js";
import { ageValidator } from "../JS/AgeValidator.js";
import { emailValidator } from "../JS/EmailValidator.js";

document.addEventListener('DOMContentLoaded', () => {
    const province = document.querySelector('#province');
    const district = document.querySelector('#district');
    const municipality = document.querySelector('#municipality');
    const form = document.querySelector('#form');

    console.log("Loading Provinces...");
    nepal_location.provinceList.forEach((prov) => {
        const option = document.createElement('option');
        option.value = prov.name;
        option.textContent = prov.name;
        province.appendChild(option);
    });

    function updateDistrict() {
        console.log("Province Selected:", province.value);
        district.innerHTML = '<option value="">Select District</option>';
        municipality.innerHTML = '<option value="">Select Municipality</option>';

        const selectedProvince = nepal_location.provinceList.find(p => p.name === province.value);
        if (!selectedProvince) {
            console.warn("Warning: No districts found for", province.value);
            return;
        }

        selectedProvince.districtList.forEach((dist) => {
            const option = document.createElement('option');
            option.value = dist.name;
            option.textContent = dist.name;
            district.appendChild(option);
        });
    }

    function updateMunicipality() {
        console.log("District Selected:", district.value);
        municipality.innerHTML = '<option value="">Select Municipality</option>';

        const selectedProvince = nepal_location.provinceList.find(p => p.name === province.value);
        if (!selectedProvince) return;

        const selectedDistrict = selectedProvince.districtList.find(d => d.name === district.value);
        if (!selectedDistrict) {
            console.warn("Warning: No municipalities found for", district.value);
            return;
        }

        selectedDistrict.municipalityList.forEach((mun) => {
            const option = document.createElement('option');
            option.value = mun.name;
            option.textContent = mun.name;
            municipality.appendChild(option);
        });
    }

    function clearErrorMessages() {
        document.querySelectorAll(".alert").forEach(error => error.textContent = "");
    }

    function handleSubmit(e) {
        e.preventDefault();
        clearErrorMessages();

        let errors = false;

        function showError(id, message) {
            document.getElementById(id).textContent = message;
            errors = true;
        }

        const fname = document.querySelector('#fname').value.trim();
        const lname = document.querySelector('#lname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const age = document.querySelector('#age').value.trim();
        const gender = document.querySelector('input[name="gender"]:checked');
        const course = document.querySelector('input[name="course"]:checked');
        const provinceValue = province.value.trim();
        const districtValue = district.value.trim();
        const municipalityValue = municipality.value.trim();
        const file = document.querySelector('#image');
        const date = document.querySelector('#date').value.trim();

        if (!nameValidator.validateFirstName(fname)) {
            showError("firstName-error", "Invalid first name.");
        }
        if (!nameValidator.validateLastName(lname)) {
            showError("lastName-error", "Invalid last name.");
        }
        if (!emailValidator.validateEmail(email)) {
            showError("email-error", "Invalid email format.");
        }
        if (!ageValidator.validateAge(age)) {
            showError("age-error", "Age must be a number above 0.");
        }
        if (!gender) {
            showError("gender-error", "Select a gender.");
        }
        if (!date) {
            showError("date-error", "Select a valid date.");
        }
        if (!course) {
            showError("course-error", "Select a course.");
        }
        if (provinceValue === "" || provinceValue === "Select Province") {
            showError("province-error", "Select a province.");
        }
        if (districtValue === "" || districtValue === "Select District") {
            showError("district-error", "Select a district.");
        }
        if (municipalityValue === "" || municipalityValue === "Select Municipality") {
            showError("municipality-error", "Select a municipality.");
        }

        if (Number(file.files.length) === 0) {
            showError("image-error", "Please upload a file.");
        }

        if (!errors) {
            document.querySelector('#render-result').style.display = "block";
    document.querySelector('#fname-data').textContent = fname;
    document.querySelector('#lname-data').textContent = lname;
    document.querySelector('#email-data').textContent = email;
    document.querySelector('#age-data').textContent = age;
    document.querySelector('#gender-data').textContent = gender.value.toUpperCase();
    document.querySelector('#course-data').textContent = course.value.toUpperCase();
    document.querySelector('#certificate-data').textContent = file.name;
    document.querySelector('#address-data').textContent = `${province.value}, ${district.value}, ${municipality.value}`;
    document.querySelector('#submission-data').textContent = date;
      const renderImage = document.querySelector('#render-image');
      const reader  = new FileReader();
      reader.addEventListener('load', () => {
        renderImage.src = reader.result;
      }, false)

    if(file){
      reader.readAsDataURL(file.files[0]);

    }

            form.reset();
            clearErrorMessages();
        }
    }

    province.addEventListener('change', updateDistrict);
    district.addEventListener('change', updateMunicipality);
    form.addEventListener('submit', handleSubmit);
});
