const API_URL = "https://www.trackcorona.live/api/countries/bo"

const fetchData = async () => {
    const response = await fetch(API_URL)
    const { data } = await response.json()
    const [infoBolivia] = data
    console.log(infoBolivia)
    return infoBolivia;
}

const elementConfirmed = document.getElementById("confirmed")
const elementRecovered = document.getElementById("recovered")
const elementDead = document.getElementById("dead")
const elementUpdated = document.getElementById("updated")

const showData = async () => {
    const { confirmed, recovered, dead, updated } = await fetchData()
    elementConfirmed.innerHTML = confirmed
    elementRecovered.innerHTML = recovered
    elementDead.innerHTML = dead
    const date = new Date(updated)
    elementUpdated.innerHTML = date
}

showData().then().catch(err => console.log(err))