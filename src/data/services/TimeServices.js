export const TimeService = {
    // ? formata os minutos e segundos
    formatTime(duration) {
        const minutes = (Math.floor(duration / 60)).toString().padStart(2, '0'),
            seconds = (duration % 60).toString().padStart(2, '0')

        return `${minutes} : ${seconds}`
    }
}