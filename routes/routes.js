// JSON data
// Load the MySQL pool connection
const pool = require('../data/config');

// Router
const router = app => {

    // Display all users
    app.get('/', (request, response) => {
        pool.query('SELECT * FROM PatientOwner', (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    //Display a single user
    app.get('/PatientOwner/:id', (request, response) => {
        const id = request.params.OwnerID;

        pool.query('SELECT * FROM PatientOwner where id = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    // Add a new user
    app.post('/PatientOwner', (request, response) => {
        pool.query('INSERT INTO PatientOwner SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.end()
        });
    });

    // Update an existing user
    app.put('/users/:id', (request, response) => {
        const id = request.params.id;

        pool.query('UPDATE users SET ? WHERE id = ?', [request.body, id], (error, result) => {
            if (error) throw error;

            response.send('User updated successfully.');
        });
    });

    // Add a new appointment
    app.post('/Appointments', (request, response) => {
        pool.query('INSERT INTO Appointments SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.end()
        });
    });

    // Add a new vet
    app.post('/Vets', (request, response) => {
        pool.query('INSERT INTO Vet SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.end()
        });
    })
}

// Export the router
module.exports = router;
