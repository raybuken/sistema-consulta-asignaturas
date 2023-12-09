export const parseTimeToNumber = (time) => {
    const timeSplitted = time.split(':')
    let hour = parseInt(timeSplitted[0])
    let minutes = parseInt(timeSplitted[1])

    const timeInNumberFormat = hour + minutes / 60

    return timeInNumberFormat
}

export const parseNumberToTime = (number)  => {
    const hour = Math.floor(number)
    let minutes = Math.round((number - hour) * 60);

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    const time = [hour, minutes];
    const timeInStringFormat = time.join(':')

    return timeInStringFormat
}