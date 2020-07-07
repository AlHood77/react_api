import React, { Component } from 'react';

class NewsArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <li>
                {this.props.title}
            </li>
        );
    }
}

export default NewsArticle;