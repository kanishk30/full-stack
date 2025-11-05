import React, {Component} from 'react'

const withLoading = (WrappedComponent) => {
    return class WithLoading extends Component {
        constructor(props){
            super(props);
            this.state = {
                loading: true,
            }
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState({loading: false})
            }, 2000)
        }

        render() {
            if(this.state.loading){
                return <div>Loading...</div>
            }
            return <WrappedComponent {...this.props} />
        }

        
    }
}

export default withLoading