export const criminalHTMLConverter = (mugShot) => {
      return `
            <section>
            <h4 class="criminal--name">${mugShot.name}</h4>
            <div class="criminal--specs">
                  <p class="criminal--age">${mugShot.age}</p>
                  <p class="criminal--crime">${mugShot.conviction}</p>
                  <p class="criminal--term-start">${new Date(mugShot.incarceration.start).toLocaleDateString('en-US')}</p>
                  <p class="criminal--term-end">${new Date(mugShot.incarceration.end).toLocaleDateString('en-US')}</p>
      `
}