import { nepal_location } from "./nepal_location.js";

document.addEventListener('DOMContentLoaded', () => {
    const province = document.querySelector('#province');
    const district = document.querySelector('#district');
    const municipality = document.querySelector('#municipality');
    const form = document.querySelector('#locationForm');

    // ✅ Populate Province Dropdown
    console.log("Loading Provinces...");
    nepal_location.provinceList.forEach((prov) => {
        const option = document.createElement('option');
        option.value = prov.name;
        option.textContent = prov.name;
        province.appendChild(option);
    });

    // ✅ Update District Dropdown
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

    // ✅ Update Municipality Dropdown
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

    // ✅ Handle Form Submission
    function handleSubmit(event) {
        event.preventDefault();

        const fname = document.querySelector('#fname').value.trim();
        const lname = document.querySelector('#lname').value.trim();
        const email = document.querySelector('#email').value.trim();
        const age = document.querySelector('#age').value.trim();
        const provinceValue = province.value.trim();
        const districtValue = district.value.trim();
        const municipalityValue = municipality.value.trim();

        if (!fname || !lname || !email || !age) {
            alert("Error: Please fill in all fields.");
            return;
        }

        if (provinceValue === " "|"Select Province") {
            alert("Error: Please select a province.");
            return;
        }

        if (districtValue === " "|"Select District") {
            alert("Error: Please select a district.");
            return;
        }

        if (municipalityValue === ""|"Select Municipality") {
            alert("Error: Please select a municipality.");
            return;
        }

        const message = `Form submitted successfully!
First Name: ${fname}
Last Name: ${lname}
Email: ${email}
Age: ${age}
Province: ${provinceValue}
District: ${districtValue}
Municipality: ${municipalityValue}`;

        alert(message);
        document.querySelector('#locationForm').reset();
    }

    province.addEventListener('change', updateDistrict);
    district.addEventListener('change', updateMunicipality);
    form.addEventListener('submit', handleSubmit);
});
