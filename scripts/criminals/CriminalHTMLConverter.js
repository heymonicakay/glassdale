
export const criminalCardCreator = (mugShot) => {
      return `
            <span class="container--criminal-card">
                  <div class="container--criminal-card-details">
                        <span class="criminal-card-detail criminal-card-detail--name">
                              ${mugShot.name}
                        </span>
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
                        <span class="associate-list child">
                        </span>
                  </div>
                  
                  <div class="container--criminal-card-button">
                        <span class="button button--associates associates--${mugShot.id}">
                              Show Known Associates
                        </span>
                  </div>
                  
            </span>
            
      `
}