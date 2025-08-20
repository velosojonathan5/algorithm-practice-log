
// Here I'm using a Singly Linked List behavior to implement a list of tasks to do

class Task {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class Tasks {
    constructor(head = null) {
        this.head = head;
    }

    add(task) {
        
        if(this.head == null) {
            this.head = task
        } else {
            task.next = this.head;

            this.head = task;
        }
        console.log(` -> added the task ${task.name}`);
    }

    append(task) {
        if(this.head == null) {
            this.head = task
            return;
        }

        let current = this.head
        while (current !== null) {
            if(current.next === null) {
                current.next = task;
                console.log(` -> task ${task.name} appended`);
                break;
            }

            current = current.next;
        }
    }

    // get the last task in the list
    pop() {
        if(this.head == null) {
            console.log(` -> there aren't tasks`);
            return;
        }

        if(this.head.next == null) {
            const temp = this.head;
            this.head = null
            console.log(` -> removed the task ${temp.name}`);
            return temp;
        }

        let task = this.head;
        let prev;
        while (task != null) {
            if(task.next == null) {
                console.log(` -> removed the task ${task.name}`);
                prev.next = null;
                return task;
            }
            prev = task;
            task = task.next;
        }
    }

    shift() {
        if(this.head === null) {
            console.log(` -> there aren't tasks`);
            return;
        }

        const temp = this.head;
        this.head = this.head.next;
        console.log(` -> removed the task ${temp.name}`);
        return temp;
    }

    remove(name) {
        
    }

    search(name) {

    }

    showList() {
        console.log('--- TASK LIST START ---');
        console.log('');
        let task = this.head;
        while (task != null) {
            console.log(task.name);
            task = task.next;
        }
        console.log('');
        console.log('--- TASK LIST END ---');
    }
}


const tasks = new Tasks();
tasks.showList();

tasks.add(new Task('Study'));
tasks.add(new Task('Play Videogame'));
tasks.add(new Task('Tidy the closet'));

tasks.showList()

tasks.add(new Task('Clean the sink'));

tasks.showList();

const lastTask = tasks.pop();
tasks.pop();
tasks.pop();
tasks.pop();
tasks.pop();
tasks.showList();

tasks.add(new Task('Study'));
tasks.add(new Task('Play Videogame'));
tasks.add(new Task('Tidy the closet'));

tasks.showList();

tasks.shift()

tasks.showList();

tasks.shift();
tasks.shift();
tasks.shift();

tasks.append(new Task('Sing'));
tasks.append(new Task('Swimming'));
tasks.append(new Task('Watch TV'));

tasks.showList();
