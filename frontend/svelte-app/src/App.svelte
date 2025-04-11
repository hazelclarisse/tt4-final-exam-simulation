<script>
    import { tasks, fetchTasks, addTask, updateTask, deleteTask } from './stores/TaskStore.js';

    let newTask = { title: '', description: '', completed: false };

    // Fetch tasks on component load
    fetchTasks();

    // Add task function
    const handleAddTask = () => {
        if (newTask.title && newTask.description) {
            addTask(newTask);
            newTask = { title: '', description: '', completed: false }; // Reset form
        }
    };

    // Update task function
    const handleUpdateTask = (task) => {
        updateTask({ ...task, completed: !task.completed });
    };

    // Delete task function
    const handleDeleteTask = (id) => {
        deleteTask(id);
    };
</script>

<main>
    <h1>Task Manager</h1>

    <div>
        <input bind:value={newTask.title} placeholder="Title" />
        <input bind:value={newTask.description} placeholder="Description" />
        <button on:click={handleAddTask}>Add Task</button>
    </div>

    <ul>
        {#each $tasks as task (task.id)}
            <li>
                <span class={task.completed ? 'completed' : ''}>{task.title} - {task.description}</span>
                <button on:click={() => handleUpdateTask(task)}>Toggle Completed</button>
                <button on:click={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
        {/each}
    </ul>

    <style>
        .completed {
            text-decoration: line-through;
            color: gray;
        }
    </style>
</main>
