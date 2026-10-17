# PlaySpot Starter Project

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example` and set your MongoDB URI and JWT secret.

3. Start the app:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:5000` in your browser.

## Example API flow

### Register user
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul","email":"rahul@example.com","password":"pass123","role":"player","phone":"9999999999"}'
```

### Add turf
```bash
curl -X POST http://localhost:5000/api/turfs/add \
  -H "Content-Type: application/json" \
  -d '{"ownerId":"<OWNER_ID>","turfName":"Green Arena","sportType":"Box Cricket","location":"Delhi","pricePerHour":500,"workingHours":{"start":"08:00","end":"22:00"}}'
```

### Book slot
```bash
curl -X POST http://localhost:5000/api/bookings/create \
  -H "Content-Type: application/json" \
  -d '{"userId":"<USER_ID>","turfId":"<TURF_ID>","bookingDate":"2026-10-20","startTime":"18:00","endTime":"19:00","totalAmount":500}'
```

## Notes
- This is a starter version for a turf booking website.
- Slot conflict logic prevents double-booking for overlapping time periods on the same turf/date.
