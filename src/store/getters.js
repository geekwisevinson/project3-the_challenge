const getters = {
  getMessage(state) {
    return state.message;
  },
  getPath(state) {
    return state.path;
  },
  getLoggedInUser(state) {
    return state.logged_in_user;
  },
  getToken(state) {
    return state.token;
  },
  getFormValue(state) {
    return state.formValue;
  },
  getShowModal(state) {
    return state.showModal;
  },
	getShowPayment(state) {
		return state.showPayment;
	},
  getEnrollModal(state) {
    return state.enrollModal;
  },
  getDetailsApiPath(state) {
    return state.details_api_path;
  },
  getActiveRounds(state) {
    return state.active_rounds;
  },
  getActiveRoundsCourses(state) {
    return state.active_rounds_courses;
  },

};

export default getters;
