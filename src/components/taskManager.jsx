import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

class TaskManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      newTask: {
        title: '',
        description: '',
        dueDate: '',
        status: 'pending'
      }
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState((prevState) => ({
      newTask: {
        ...prevState.newTask,
        [name]: value
      }
    }));
  };

  handleAddTask = () => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, prevState.newTask],
      newTask: {
        title: '',
        description: '',
        dueDate: '',
        status: 'pending'
      }
    }));
  };

  handleDeleteTask = (index) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.filter((task, i) => i !== index);

      return {
        tasks: updatedTasks
      };
    });
  };

  render() {
    const { tasks, newTask } = this.state;

    return (
      <Row>
        <Col md={6}>
          <div>
            <p className='Azey'>AZEY'S EATERIES</p>

            <div>
              <h2>ORDER YOUR FOOD HERE</h2>
              <input
                type="text"
                name="title"
                placeholder="Your kind of food"
                value={newTask.title}
                onChange={this.handleInputChange}
                className='title'
              />
              <br />
              <br/>
              <input
                type="text"
                name="description"
                placeholder="Others"
                value={newTask.description}
                onChange={this.handleInputChange}
                className='description'
              />
              <br />
              <br/>
              <label>To be delivered on</label>
              <br/>
              <input
                type="date"
                name="dueDate"
                placeholder="Due Date"
                value={newTask.dueDate}
                onChange={this.handleInputChange}
              />
              <br />
              <br/>
              <select
                name="status"
                value={newTask.status}
                onChange={this.handleInputChange}
              >
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
              </select>
              <br/>
              <br/>
              <button onClick={this.handleAddTask} className='OrderButton'>Place Order</button>
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div>
            <p className='orders'>Your Orders</p>
            {tasks.length === 0 ? (
              <p>No Order Yet</p>
            ) : (
              <ul>
                {tasks.map((task, index) => (
                  <li key={index}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>Due Date: {task.dueDate}</p>
                    <p>Status: {task.status}</p>
                    <button onClick={() => this.handleDeleteTask(index)}className='OrderButton'>
                      Cancel Order
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Col>
      </Row>
    );
  }
}

export default TaskManager;
