This is a simple RESTful API for managing tasks using Node.js and Express.js. It supports basic CRUD (Create, Read, Update, Delete) operations for tasks. You can use this API to create, retrieve, update, and delete tasks.

## Getting Started

Follow these steps to set up and run the API on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd task-management-api

   ```

2. **Install Dependencies:**
   Use npm to install the required dependencies:

   ```bash
   npm install
   ```

3. **Run the API:**
   Start the API server:

   ```
   npm start
   ```

## The API will be available at [http://localhost:3000](http://localhost:3000/).

## API Endpoints

### 1. Retrieve All Tasks

- **Endpoint:** `GET /tasks`
- **Description:** Get a list of all tasks.
- **Response:** Returns an array of task objects.

### 2. Retrieve a Task by ID

- **Endpoint:** `GET /tasks/:id`
- **Description:** Get a single task by its ID.
- **Request:** Include the task ID in the URL path.
- **Response:** Returns a task object if found, or a 404 status code if the task is not found.

### 3. Create a New Task

- **Endpoint:** `POST /tasks`
- **Description:** Create a new task.
- **Request:** Provide a JSON object with `title` and `description` properties in the request body.
- **Response:** Returns the created task with a 201 status code if successful, or a 400 status code if validation fails.

### 4. Update a Task by ID

- **Endpoint:** `PUT /tasks/:id`
- **Description:** Update an existing task by its ID.
- **Request:** Include the task ID in the URL path and provide a JSON object with properties you want to update in the request body.
- **Response:** Returns the updated task if found, or a 404 status code if the task is not found.

### 5. Delete a Task by ID

- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Delete a task by its ID.
- **Request:** Include the task ID in the URL path.
- **Response:** Returns a 200 status code if successful, or a 404 status code if the task is not found.

## Task Object Structure

A task object has the following attributes:

- `id` (string): A unique identifier for the task.
- `title` (string): The task's title.
- `description` (string): A description of the task.
- `completed` (boolean): A Boolean indicating whether the task is completed.

## Error Handling

The API handles errors for various scenarios, such as tasks not found and validation errors, and returns appropriate HTTP status codes and error messages.

## Contributing

Feel free to contribute to this project by submitting pull requests or reporting issues. Your contributions are welcome!

## License

This project is open-source and available under the [MIT License](https://chat.openai.com/c/LICENSE).

---

Enjoy using the Task Management API!
