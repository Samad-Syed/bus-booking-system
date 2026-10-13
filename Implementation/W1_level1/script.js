const form = document.getElementById("searchForm");
const results = document.getElementById("busResults");

const buses = [
    {
        name: "TSRTC Express",
        source: "Hyderabad",
        destination: "Bangalore",
        departure:"10:00 PM",
        arrival: "08:00 PM",
        distanceKm: 566,
        fare: 850,
        frequency: "Daily",
        view_seats: ["S11", "S12", "S27"]
    },
    {
        name: "Deccan Night Rider",
        source: "Hyderabad",
        destination: "Bangalore",
        departure:"08:30 PM",
        arrival: "06:00 PM",
        distanceKm: 566,
        fare: 750,
        frequency: "Daily",
        view_seats: ["S11", "S2", "S17"]
    },
    {
        name: "Southern Star Travels",
        source: "Hyderabad",
        destination: "Bangalore",
        departure:"09:15 AM",
        arrival: "06:00 AM",
        distanceKm: 566,
        fare: 950,
        frequency: "Daily",
        view_seats: []
    },
    {
        name: "Midnight Express",
        source: "Hyderabad",
        destination: "Bangalore",
        departure:"11:30 PM",
        arrival: "09:00 PM",
        distanceKm: 566,
        fare: 800,
        frequency: "Daily",
        view_seats: ["S1", "S2", "S7"]
    }

]

form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const source = document.getElementById("source").value.trim();
    const destination = document.getElementById("destination").value.trim();
    const travelDate = document.getElementById("travelDate").value
    if(source.toLowerCase()===destination.toLowerCase()){
        // result.textContent = "Source and Destination must be different.";
        // return;
        results.replaceChildren();
        const message = document.createElement("p");
        message.textContent = "Source and destination must be different.";
        results.appendChild(message);
        return;

    }

const matchingBuses = buses.filter((bus)=>{
    return (
        bus.source.toLowerCase() === source.toLowerCase() && bus.destination.toLowerCase() === destination.toLowerCase()
    );
});

results.replaceChildren();
const heading = document.createElement("h2");
heading.textContent = `Available Buses : ${source} --> ${destination}`

results.appendChild(heading);

const dateInfo = document.createElement("p");
dateInfo.textContent = `Travel date: ${travelDate} `
results.appendChild(dateInfo);

if(matchingBuses.length ===0){
    const message = document.createElement("p");
    message.textContent = "No buses found for this route.";
    results.appendChild(message);
    return;
}

matchingBuses.forEach((bus)=>{
    
    
const card = document.createElement("article");
card.className = "bus-card";

// Bus name
const name = document.createElement("h3");
name.textContent = bus.name;

// Route
const route = document.createElement("p");
route.className = "bus-route";
route.textContent = `${bus.source} → ${bus.destination}`;

// Departure and arrival times
const timings = document.createElement("div");
timings.className = "bus-timings";

const departure = document.createElement("span");
departure.textContent = bus.departure;

const arrival = document.createElement("span");
arrival.textContent = bus.arrival;

timings.append(departure, arrival);

// Fare
const fare = document.createElement("p");
fare.className = "bus-fare";
fare.textContent = `₹${bus.fare.toLocaleString("en-IN")}`;

// View Seats button
const actions = document.createElement("div");
actions.className = "bus-actions";

const seatsButton = document.createElement("button");
seatsButton.className = "view-seats";
seatsButton.textContent = "View Seats";

actions.appendChild(seatsButton);

// Assemble the reusable card
card.append(name, route, timings, fare, actions);

results.appendChild(card);

seatsButton.addEventListener("click",()=>{
    let seats_displayed = card.querySelector(".seats-container");
    if(seats_displayed){
        seats_displayed.remove();
        seatsButton.textContent = "View Seats";
        return;
    }
    const seats = document.createElement("div");
    seats.className = "seats-container";
    const NoOfSeats =bus.view_seats.length;
    if(NoOfSeats ===0 ){
        seats.textContent = "No Seats Available...";
        // seats.className = "no-seats"
        seats.classList.add("no-seats");
        card.appendChild(seats);
        seatsButton.textContent = "Hide Seats";
        return;
    }
    bus.view_seats.forEach(seat => {
        const seatElement=document.createElement("span");
        seatElement.className="seat";
        seatElement.textContent = seat.toUpperCase();
        seats.appendChild(seatElement)

        
    });
    card.appendChild(seats);
    seatsButton.textContent = "Hide Seats";
})

});

    // result.textContent = `Searching busses from ${source} to  ${destination} on ${travelDate}.`
});