let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(burrito => burrito.json())
        .then(parsleyCriminals => {
                criminals = parsleyCriminals 
            }
        )
    /*
        Load database state into application state with a fetch().
        Make sure the last then() updates the criminals array
    */
}