import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/Firebase';
import AuthenticatedRutas from './component/authenticated/AuthenticatedRutas';
import NotAutenticateRoutes from './component/not-authenticated/notAuthenticateRoutes';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/Actions';


class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.props.autenticacion();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <AuthenticatedRutas /> */}
        <NotAutenticateRoutes />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
  autenticacion: (values) => {
    // dispatch();
    autenticacion
      .onAuthStateChanged((user) => {
        if (user) {
          console.log(user.toJSON());
          dispatch(actionEstablecerSesion(user));
        } else {
          // User is signed out.
          console.log('No existe sesion');
          dispatch(actionCerrarSesion());
          // ...
        }
      });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Select);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
