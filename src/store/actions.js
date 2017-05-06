const actions = {
  setMessageAsync(context, payload) {
    setTimeout(() => {
      context.commit('setMessage', payload);
    }, 1000);
  },
};

export default actions;
