<body>
    <h1>Library Management System</h1>
    <p>This project is a library management system built using Node.js, Express.js, MongoDB, and EJS templates. It allows students to search for books, request or cancel a book, and check their request status, while administrators can manage the book inventory and approve or reject book requests.</p>

  <h2>Features</h2>
    <h3>Student Side:</h3>
    <ul>
        <li>Search for available books by title, author, or book code</li>
        <li>Request a book for borrowing.</li>
        <li>Cancel a book request.</li>
        <li>View the status of requested books (approved or rejected).</li>
    </ul>

  <h3>Admin Side:</h3>
    <ul>
        <li>Add new books to the library inventory.</li>
        <li>Update existing book details.</li>
        <li>Delete books from the inventory.</li>
        <li>View student requests for books and approve or reject them.</li>
        <li>The changes will reflect on the student's dashboard (status updates).</li>
    </ul>

  <h2>Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/Digvijayjakhaniya/Library-Management-expressJs.git</code></pre>
        </li>
        <li>Navigate to the project directory:
            <pre><code>cd Library-Management-expressJs</code></pre>
        </li>
        <li>Install the necessary dependencies:
            <pre><code>npm install</code></pre>
        </li>
        <li>Create .env file: 
          <pre> add 'PORT' and 'MONGODB_URI' in .env file </pre>
    </ol>

  <h2>Usage</h2>
    <p>To start the application, run:</p>
    <pre><code>npm start</code></pre>
    <p>Open your browser and navigate to <a href="http://localhost:3000">http://localhost:3000</a> (if PORT = 3000) to see the application in action.</p>

  <h2>Project Structure</h2>
    <pre><code>
Node_Express_MongoDB_EJS-Library-Management/
│
├── controllers/
│   └── LibraryController.js
|
├── Db/
│   └── connection.js
│
├── models/
│   └── library.js
│
├── routes/
│   └── web.js
│
├── public/
│   ├── CSS/
│   │   ├── all.css
│   │   ├── bootstrap.css
│   │   └── bootstrap.min.css
│   │
│   ├── images/logo.png
│   │
│   └── JS/
│       ├── all.js
│       ├── bootstrap.js
│       ├── jquery.js
│       └── bootstrap.min.js
│      
├── views/
│   ├── includes/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   ├── index.ejs
│   ├── admin.ejs
│   ├── all_books.ejs
│   ├── checkreq.ejs
│   ├── create.ejs
│   ├── edit.ejs
│   | 
│   ├── student.ejs
│   ├── books.ejs
│   
├── index.js
├── package-lock.json
├── package.json
└── README.md
      
  </code></pre>

  <h2>Endpoints</h2>
    <h3>Student Endpoints:</h3>
    <ul>
        <li><code>GET /books</code> - Search books, Show all books and status.</li>
        <li><code>GET /action/:action/:id </code> - Request or cancel a book.</li>
    </ul>

  <h3>Admin Endpoints:</h3>
    <ul>
        <li><code>GET /all_books </code> - View all books in the library.</li>
        <li><code>POST /store </code> - Add a new book.</li>
        <li><code>POST /update/:id </code> - Update an existing book.</li>
        <li><code>GET /delete/:id </code> - Delete a book.</li>
        <li><code>GET /books_manage </code> - View student book requests.</li>
        <li><code>GET /action/:action/:id </code> - Approve or Reject a book request.</li>
    </ul>

  <h2>Dependencies</h2>
    <ul>
        <li><code>express</code> - Fast, unopinionated, minimalist web framework for Node.js.</li>
        <li><code>mongoose</code> - MongoDB object modeling tool designed to work in an asynchronous environment.</li>
        <li><code>ejs</code> - Embedded JavaScript templating.</li>
        <li><code>body-parser</code> - Node.js body parsing middleware.</li>
    </ul>
<br><br><hr>
  <footer class="card-footer bg-white pt-2">
    <p>© 2024 Made with 🤍 by <a href="https://digvijay.rf.gd" target="_blank" class="link-danger page-link alert-link d-inline">Digvijay Jakhaniya</a></p>
  </footer>
</body>
</html>
