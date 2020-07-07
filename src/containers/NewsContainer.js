import React, { Component } from 'react';
import NewsListBox from '../components/NewsListBox';

class NewsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            articles: []
         };
    }


    componentDidMount() {
        const url = 'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=44e2ab8a147d4f40bcea6b44a90fc4ca';

        fetch(url)
            .then(res => res.json())
            .then(data => this.setState({articles: data}))
    }

    render() {
        return (
            <NewsListBox articles={this.state.articles} />
        );
    }
}

export default NewsContainer;