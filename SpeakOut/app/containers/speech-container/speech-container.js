import { connect } from 'react-redux';
import SpeechComponent from '../../components/speech-component/speech-component';
import { fetchData } from '../../actions/fetch-data/fetch-data';


class SpeechContainer extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <SpeechComponent />
    )
  }
}

function mapStateToProps(state) {
    return {
        isVoicePlayed : state.isVoicePlayed
    }
} 

function mapDispatchToProps (dispatch){
  return{
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeechContainer);