import React, { Component } from 'react';

interface WatchState {
    time: string;
}

class Watch extends Component<{}, WatchState> {
    private timerID?: NodeJS.Timeout;
    
    constructor(props: {}) {
        super(props);
        this.state = {
            time: this.getCurrentTime(),
        };
    }
    
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        if (this.timerID) {
        clearInterval(this.timerID);
    }
}

getCurrentTime(): string {
    const now = new Date();
    return now.toLocaleTimeString('en-GB', { hour12: false });
}

tick() {
    this.setState({
        time: this.getCurrentTime(),
    });
}

render() {
    return (
    <div>
        {this.state.time}
    </div>
    );
}
}

export default Watch;
