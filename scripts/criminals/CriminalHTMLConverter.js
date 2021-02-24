
export const criminalCardCreator = (mugShot, facilities) => {
  return `
    <div class="container--criminal-card criminal--${mugShot.id}">
      <div class="container--criminal-card-details">
        <div class="criminal-card-detail criminal-card-detail--name">
          ${mugShot.name}
        </div>
        <span class="criminal-card-detail criminal-card-detail--age">
          Age: ${mugShot.age}
        </span>
        <span class="criminal-card-detail criminal-card-detail--crime">
          Crime: ${mugShot.conviction.charAt(0).toUpperCase() + mugShot.conviction.slice(1)}
        </span>
        <span class="criminal-card-detail criminal-card-detail--incar-start-date">
          Term start: ${new Date(mugShot.incarceration.start).toLocaleDateString('en-US')}
        </span>                        <span class="criminal-card-detail criminal-card-detail--incar-end-date">
          Term end: ${new Date(mugShot.incarceration.end).toLocaleDateString('en-US')}
        </span>
        <span class="associate-list card--${mugShot.id}">
        </span>
        <span class="criminal-card-detail criminal-card-detail--name">
          Facilities
        </span>
        <div class="list">
            ${facilities.map(f => `<div class="each-facility" >• ${f.facilityName}</div>`).join("")}
        </div>
      </div>
      <div class="container--criminal-card-button">
        <span class="button button--associates associates--${mugShot.id}">
          Show Known Associates
        </span>
      </div>
    </div>
  `
}