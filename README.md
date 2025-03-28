# Calculator Microservice (Node.js + Express)

A lightweight RESTful microservice that performs **basic arithmetic operations** (Addition, Subtraction, Multiplication, Division) using query parameters. The service includes:

- Modular API routes  
- Error handling for invalid input & edge cases  
- Request logging with Winston  

---

## Project Structure

```
calculator-microservice/
│
├── index.js                  # Main server file
├── routes/                   # Folder containing all operation routes
│   ├── add.js
│   ├── subtract.js
│   ├── multiply.js
│   └── divide.js
├── logs/                     # Log files (auto-generated)
│   ├── combined.log
│   └── error.log
├── package.json              # Project metadata and dependencies
└── README.md                 # You're reading it!
```

---

## Requirements

- [Node.js](https://nodejs.org/en/) v14 or above
- npm (comes with Node.js)

---

## Getting Started

### 1. Clone or Set Up Project

```bash
mkdir sit737-2025-prac4p
cd sit737-2025-prac4p
npm init -y
```

### 2. Install Dependencies

```bash
npm install express winston
```

### 3. Create Folders and Files

```bash
mkdir routes logs
touch index.js routes/add.js routes/subtract.js routes/multiply.js routes/divide.js
```

(Or copy from provided templates)

---

##  How It Works

Start the server:

```bash
node index.js
```

Then call the endpoints using `curl`, Postman, or a browser.

---

## 🔌 API Endpoints

All endpoints accept two **query parameters**: `num1` and `num2`.

| Operation     | Method | Endpoint                        | Example Query                            |
|---------------|--------|----------------------------------|-------------------------------------------|
| Addition      | GET    | `/add`                          | `/add?num1=5&num2=3`                      |
| Subtraction   | GET    | `/subtract`                     | `/subtract?num1=10&num2=2`                |
| Multiplication| GET    | `/multiply`                     | `/multiply?num1=4&num2=6`                 |
| Division      | GET    | `/divide`                       | `/divide?num1=15&num2=3`                  |

**Response Example:**
```json
{
  "result": 8
}
```

---

## Error Handling

Invalid input (non-numbers or missing params):

```json
{
  "error": "Invalid input: num1 and num2 must be numbers."
}
```

Division by zero:

```json
{
  "error": "Division by zero is not allowed."
}
```

---

##  Logging with Winston

Winston logs request and error messages to:

- `logs/combined.log` — All requests
- `logs/error.log` — Only errors

**View logs in real-time:**

```bash
tail -f logs/combined.log
```

---

##  Example Test with curl
(You can run the below url directly on browser or postman)
```bash
curl "http://localhost:3000/add?num1=12&num2=8"
```

Response:

```json
{ "result": 20 }
```

---

## Author

**Sushma Singh**  
📧 s223743838@deakin.edu.au


