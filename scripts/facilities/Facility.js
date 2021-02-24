const eventHub = document.querySelector(".container")

export const facility = (facilityObject, criminals) => {
    return `
        <div class="facility facility-container">
            <h1>${facilityObject.facilityName}</h1>
            <div class="facility__details">
                <p class="facility__security">Security Level: ${facilityObject.securityLevel}</p>
                <p class="facility__capacity">Capacity: ${facilityObject.capacity}</p>
            </div>
            <div>
                <h2>Criminals</h2>
                <ul class="criminal">
                    ${criminals.map(c => `<li>${c.name}</li>`).join("")}
                </ul>
            </div>
        </div>
    `
}
