var React = require('react');

var AddNote = React.createClass({
  propTypes: {
    addNote: React.PropTypes.func.isRequired
  },
  setRef: function(ref){
    this.note = ref;
  },
  handleSubmit: function(){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  },
  handleEnter: function(event){
    if(event.keyCode === 13){
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
    }
  },
  render: function() {
    return(
      <div className='input-group'>
        <input type='text' className='form-control' placeholder='add a new note..' ref={this.setRef} onKeyDown={this.handleEnter} />
        <span className='input-group-btn'>
          <button className='btn btn-default' type='button' onClick={this.handleSubmit}>Submit</button>
        </span>
      </div>
    )
  }
});

module.exports = AddNote;