import { compose } from 'redux';
import { withAuthNavigate } from '../../HOC/withAuthNavigate';
import { addMessage } from '../../redux/messages-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { getMessages } from '../../redux/messages-selectors';



let mapStateToProps = (state) => ({
    messagesPage: getMessages(state), 
})


export default compose(
    connect(mapStateToProps, { addMessage }),
    withAuthNavigate
)(Dialogs);