import React from 'react';
// import PropTypes from 'prop-types';

// BaiTap1.propTypes = {

// };

class BaiTap1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            value: '',
        };
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (this.state.value !== '') {
                const dataNew = this.state.data.concat(this.state.value);
                this.setState({ data: dataNew });

                this.setState({
                    value: '',
                });
            }
        }
    };

    updateInputValue = (e) => {
        this.setState({
            value: e.target.value,
        });
    };

    handleRemove = (index) => {
        // console.log(index);

        const dataNew = this.state.data;
        delete dataNew[index];
        this.setState({ data: dataNew });
    };

    render() {
        return (
            <div className="container">
                Nhập thêm text ở đây
                <input
                    value={this.state.value}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.updateInputValue}
                />
                <ul className="list-items">
                    {this.state.data.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => this.handleRemove(index)}>
                                Xoá
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BaiTap1;
