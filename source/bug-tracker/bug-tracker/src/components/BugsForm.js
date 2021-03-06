import React from 'react'

var Chance = require('chance')
var chance = new Chance()

class BugsForm extends React.Component {

  render () {
    return (
      <section className="hero is-medium">
        <div className="hero-body">
          <h2 className="title">Add New Bug Report:</h2>
          <form action="" id="bugInputForm">
            <label className="label" >Description</label>
            <p className="control">
              <input className="input" type="text" id="description" placeholder="Describe a bug..."></input>
            </p>
            <label className="label" >Severity</label>
            <p className="control">
              <span className="select">
                <select id="severity" name="severity">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </span>
            </p>
            <label className="label">Assigned To</label>
            <p className="control">
              <input className="input" type="text" id="assignedTo" placeholder="Enter responsible..." />
            </p>
            <div className="control is-grouped">
              <p className="control">
                <button className="button is-warning" onClick={saveBug}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </section>
    )
  }
}

function saveBug (e) {
  const bug = {
    id: chance.guid(),
    description: document.getElementById('description').value,
    severity: document.getElementById('severity').value,
    assignedTo: document.getElementById('assignedTo').value,
    status: 'Open'
  }
  let bugs = []
  if (localStorage.getItem('bugs') !== null) {
    bugs = JSON.parse(localStorage.getItem('bugs'))
  }
  bugs.push(bug)
  localStorage.setItem('bugs', JSON.stringify(bugs))

  document.getElementById('bugInputForm').reset()

  e.preventDefault()
}

export default BugsForm
