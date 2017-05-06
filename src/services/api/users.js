import getAll from './users/getAll'
import signUp from './users/sign-up'

const users = {
	init (context) {
		this.http = context.http;
		this.store = context.store;
	},
	signUp(user){
		console.log('users')
		return signUp(this, user)
	}

};

export default  users;
