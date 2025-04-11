import { writable } from 'svelte/store';

// Store to manage the tasks
export const tasks = writable([]);

// Fetch tasks from the backend
export const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/api/task');
    const data = await res.json();
    tasks.set(data);
};

// Add a new task
export const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/api/task', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    const data = await res.json();
    tasks.update(current => [...current, data]);
};

// Update a task
export const updateTask = async (task) => {
    const res = await fetch(`http://localhost:5000/api/task/${task.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    });
    if (res.ok) {
        tasks.update(current => 
            current.map(t => t.id === task.id ? task : t)
        );
    }
};

// Delete a task
export const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/task/${id}`, {
        method: 'DELETE',
    });
    if (res.ok) {
        tasks.update(current => current.filter(task => task.id !== id));
    }
};
