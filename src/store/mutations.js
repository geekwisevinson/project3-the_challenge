const mutations = {
  setMessage(state, payload) {
    state.message = payload; // eslint-disable-line
  },
  setPath(state, payload) {
    state.path = payload; // eslint-disable-line
  },
  setLoggedInUser(state, payload) {
    state.logged_in_user = payload; // eslint-disable-line
  },
  setToken(state, payload) {
    state.token = payload; // eslint-disable-line
  },
  updateForm(state, payload) {
    state.formValue[payload[0]] = payload[1]; // eslint-disable-line
  },
  setShowModal(state, payload) {
    state.showModal = payload; // eslint-disable-line
    state.formValue = {}; // eslint-disable-line
  },
	setShowPayment(state, payload) {
		state.showPayment = payload; // eslint-disable-line
	},
  setEnrollModal(state, payload) {
    state.enrollModal = payload; // eslint-disable-line
    state.formValue = {}; // eslint-disable-line
  },
  setDetailsApiPath(state, payload) {
    state.details_api_path = payload; // eslint-disable-line
  },
};

export default mutations;
