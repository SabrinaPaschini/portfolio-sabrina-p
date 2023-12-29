//manipular html 

function updateProfileInfo(profileData) {

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const job = document.getElementById('profile.job')
    job.innerText = profileData.job

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`;


    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`;


}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')



}

function updateHardSkills(profileData) {

    const hardskills = document.getElementById('profile.skills.hardskills')
    hardskills.innerHTML = profileData.skills.hardskills.map(skill => ` <li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('')

}




(async () => {
    const profileData = await fetchProfileData();
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)

})();


