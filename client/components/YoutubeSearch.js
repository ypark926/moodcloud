import React, {Component} from 'react'

class YoutubeSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {term: ''}

    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  onChangeHandler(e) {
    this.setState({term: e.target.value})
    this.props.onSearch(e.target.value)
  }

  render() {
    return (
      <div className="searching">
        <input value={this.state.term} onChange={this.onChangeHandler} />
      </div>
    )
  }
}

export default YoutubeSearch
