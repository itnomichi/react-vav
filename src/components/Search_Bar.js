import React, {Component} from 'react';
import styles from '../../style/style.css';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className={styles.search_bar}>
                <div className={styles.search_bar_input + " " + "ui icon input"}>
                    <input type="text"
                           onChange={event => this.setState({term: event.target.value})}
                           placeholder="Search....."
                    />
                    <i className="inverted circular search link icon"></i>
                </div>
            </div>
        )
    }
};

export default SearchBar;