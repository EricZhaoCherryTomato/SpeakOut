import { connect } from 'react-redux';
import SpeechComponent from '../../components/speech-component/speech-component';
import { fetchData } from '../../actions/fetch-data/fetch-data';

const mapStateToProps(state: Object) {
    return {
        isVoicePlayed : state.isVoicePlayed;
    };
} 

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: () => dispatch(fetchData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpeechComponent);