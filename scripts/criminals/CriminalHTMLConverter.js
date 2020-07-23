export const criminalHTMLConverter = (mugShot) => {
      return `
            <section class="criminal--card">
                  <div class="criminal--info">
                        <p class="criminal--name">
                              ${mugShot.name}
                        </p>
                        <p class="criminal--specs">
                              Age: ${mugShot.age}<br>
                              <span class="crime">Crime: ${mugShot.conviction}</span>
                              <br>
                              Term start: ${new Date(mugShot.incarceration.start).toLocaleDateString('en-US')}<br>
                              Term end: ${new Date(mugShot.incarceration.end).toLocaleDateString('en-US')}
                        </p>
                  </div>
            </section>
      `
}