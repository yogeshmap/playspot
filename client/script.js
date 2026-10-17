async function fetchTurfs() {
  const res = await fetch('/api/turfs');
  const data = await res.json();
  const container = document.getElementById('turf-list');
  container.innerHTML = data.map(t => `
    <div class="turf-card">
      <h3>${t.turfName}</h3>
      <p>${t.sportType} - ${t.location}</p>
      <p>₹${t.pricePerHour}/hr</p>
      <small>id: ${t._id}</small>
    </div>
  `).join('');
}

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    userId: document.getElementById('userId').value,
    turfId: document.getElementById('turfId').value,
    bookingDate: document.getElementById('date').value,
    startTime: document.getElementById('start').value,
    endTime: document.getElementById('end').value,
    totalAmount: 0
  };

  const res = await fetch('/api/bookings/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const data = await res.json();
  document.getElementById('book-result').innerText = res.ok
    ? 'Booked! ID: ' + data._id
    : 'Error: ' + data.msg;

  fetchTurfs();
});

fetchTurfs();
