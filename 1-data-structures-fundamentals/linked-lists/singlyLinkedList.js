
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
    }

    // get the last task in the list
    getNext() {

    }

    remove() {

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


const tasks = new Tasks()
tasks.showList()

tasks.add(new Task('Study'));
tasks.add(new Task('Play Videogame'));
tasks.add(new Task('Tidy the closet'));

tasks.showList()

tasks.add(new Task('Clean the sink'));

tasks.showList()